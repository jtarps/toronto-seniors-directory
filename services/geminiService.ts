
import { GoogleGenAI } from "@google/genai";
import { services } from '../data';
import { Language } from '../types';

// Lazy initialization - only create when needed and API key is available
let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    // In Vite, use import.meta.env for environment variables
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('API key not configured');
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

const languageNames: Record<Language, string> = {
  en: 'English',
  fr: 'French',
  zh: 'Simplified Chinese',
  pa: 'Punjabi',
  es: 'Spanish'
};

// Helper to create a condensed service object (reduces token usage by ~70%)
const createCondensedService = (service: any, lang: Language) => {
  const getStr = (obj?: { [key in Language]: string }) => obj?.[lang] || obj?.en || '';
  return {
    name: getStr(service.name),
    phone: service.phone || '',
    description: getStr(service.description),
    category: service.category,
    subcategory: getStr(service.subcategory) || ''
  };
};

// Filter services based on query keywords to reduce context size
const filterRelevantServices = (query: string, lang: Language) => {
  const queryLower = query.toLowerCase();
  const keywords = queryLower.split(/\s+/).filter(w => w.length > 2);
  
  // If query is very short or generic, return top 50 most common services
  if (keywords.length === 0 || queryLower.length < 5) {
    return services.slice(0, 50).map(s => createCondensedService(s, lang));
  }
  
  const getStr = (obj?: { [key in Language]: string }) => obj?.[lang] || obj?.en || '';
  
  // Score services based on keyword matches
  const scored = services.map(service => {
    const name = getStr(service.name).toLowerCase();
    const desc = getStr(service.description).toLowerCase();
    const subcat = getStr(service.subcategory).toLowerCase();
    
    let score = 0;
    keywords.forEach(keyword => {
      if (name.includes(keyword)) score += 3;
      if (desc.includes(keyword)) score += 2;
      if (subcat.includes(keyword)) score += 1;
    });
    
    return { service, score };
  });
  
  // Return top 30 matching services, or top 20 if no good matches
  const filtered = scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 30)
    .map(item => createCondensedService(item.service, lang));
  
  // If we have good matches, return them; otherwise return top 20 general services
  return filtered.length > 0 
    ? filtered 
    : services.slice(0, 20).map(s => createCondensedService(s, lang));
};

export const queryGemini = async (userQuery: string, language: Language = 'en') => {
  try {
    // Get AI instance (will initialize if needed and check for API key)
    const aiInstance = getAI();

    // Filter and condense services to reduce token usage by ~80%
    const relevantServices = filterRelevantServices(userQuery, language);
    const context = JSON.stringify(relevantServices);
    const targetLanguage = languageNames[language];
    
    const systemInstruction = `
      You are a helpful, patient, and clear assistant for seniors living in Toronto.
      You have access to a directory of services in JSON format.
      
      Your goal is to help the user find the right service for their needs based ONLY on the provided context.
      
      Language Rule: ALWAYS reply in ${targetLanguage}.
      
      Rules:
      1. Answer in a friendly, respectful manner suitable for seniors.
      2. If a service in the context matches the user's need, provide the Name, Phone Number, and a brief explanation of why it fits.
      3. If multiple services match, list the top 2 or 3.
      4. If no service matches, kindly suggest calling 211 for general assistance.
      5. Keep answers concise and easy to read. Avoid technical jargon.
      
      Context Directory: ${context}
    `;

    const response = await aiInstance.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I'm sorry, I couldn't find an answer to that right now. Please try calling 211.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again later or call 211 for help.";
  }
};
