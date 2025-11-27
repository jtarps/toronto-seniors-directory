
import { Category, Language } from './types';

type TranslationDictionary = {
  [key in Language]: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    heroTitle: string;
    needHelp: string;
    callText: string;
    showAll: string;
    searchResults: string;
    allServices: string;
    noResults: string;
    clearFilters: string;
    emergencyBtn: string;
    aiButton: string;
    aiTitle: string;
    aiPlaceholder: string;
    aiIntro: string;
    aiIntroSub: string;
    categories: Record<Category, string>;
  };
};

export const translations: TranslationDictionary = {
  en: {
    title: 'Directory of Services',
    subtitle: 'for Seniors and Caregivers in Toronto',
    searchPlaceholder: "Search by name, topic, or keyword...",
    heroTitle: "What service are you looking for today?",
    needHelp: "Need Help?",
    callText: "Call 2-1-1",
    showAll: "Show All",
    searchResults: "Search Results",
    allServices: "All Services",
    noResults: "No services found matching your criteria.",
    clearFilters: "Clear filters and show all",
    emergencyBtn: "Call 911",
    aiButton: "Ask the AI Helper",
    aiTitle: "Directory Assistant",
    aiPlaceholder: "Type your question here...",
    aiIntro: "Hi! I can help you find services.",
    aiIntroSub: "Try asking: \"I need a ride to the doctor\" or \"Where can I get food?\"",
    categories: {
      [Category.EMERGENCY]: 'Emergency & Numbers',
      [Category.RECREATION]: 'Recreation & Education',
      [Category.EMPLOYMENT]: 'Employment & Money',
      [Category.TRANSPORTATION]: 'Transportation',
      [Category.HOUSING]: 'Housing',
      [Category.HEALTH]: 'Health & Home Care',
      [Category.MENTAL_HEALTH]: 'Mental Health & Loneliness',
      [Category.CAREGIVER]: 'Caregiver Supports',
      [Category.ABUSE]: 'Elder Abuse & Fraud',
      [Category.LEGAL]: 'Legal',
      [Category.FOOD]: 'Food',
      [Category.PETS]: 'Pets',
      [Category.SPECIALIZED]: 'Specialized Services',
    }
  },
  fr: {
    title: 'Répertoire des services',
    subtitle: 'pour les aînés et les aidants à Toronto',
    searchPlaceholder: "Rechercher par nom, sujet ou mot-clé...",
    heroTitle: "Quel service recherchez-vous aujourd'hui ?",
    needHelp: "Besoin d'aide ?",
    callText: "Appelez le 2-1-1",
    showAll: "Tout afficher",
    searchResults: "Résultats de recherche",
    allServices: "Tous les services",
    noResults: "Aucun service trouvé correspondant à vos critères.",
    clearFilters: "Effacer les filtres",
    emergencyBtn: "Appelez le 911",
    aiButton: "Assistant IA",
    aiTitle: "Assistant du répertoire",
    aiPlaceholder: "Posez votre question ici...",
    aiIntro: "Bonjour ! Je peux vous aider à trouver des services.",
    aiIntroSub: "Essayez : \"J'ai besoin d'un transport pour le médecin\" ou \"Où trouver de la nourriture ?\"",
    categories: {
      [Category.EMERGENCY]: 'Urgences & Numéros',
      [Category.RECREATION]: 'Loisirs & Éducation',
      [Category.EMPLOYMENT]: 'Emploi & Argent',
      [Category.TRANSPORTATION]: 'Transport',
      [Category.HOUSING]: 'Logement',
      [Category.HEALTH]: 'Santé & Soins à domicile',
      [Category.MENTAL_HEALTH]: 'Santé mentale & Solitude',
      [Category.CAREGIVER]: 'Soutien aux aidants',
      [Category.ABUSE]: 'Maltraitance & Fraude',
      [Category.LEGAL]: 'Juridique',
      [Category.FOOD]: 'Alimentation',
      [Category.PETS]: 'Animaux de compagnie',
      [Category.SPECIALIZED]: 'Services spécialisés',
    }
  },
  zh: {
    title: '服务目录',
    subtitle: '面向多伦多老年人和护理员',
    searchPlaceholder: "按名称、主题或关键字搜索...",
    heroTitle: "您今天在寻找什么服务？",
    needHelp: "需要帮助？",
    callText: "致电 2-1-1",
    showAll: "显示全部",
    searchResults: "搜索结果",
    allServices: "所有服务",
    noResults: "未找到符合您条件的服务。",
    clearFilters: "清除筛选并显示全部",
    emergencyBtn: "致电 911",
    aiButton: "询问 AI 助手",
    aiTitle: "目录助手",
    aiPlaceholder: "在此输入您的问题...",
    aiIntro: "您好！我可以帮您查找服务。",
    aiIntroSub: "尝试询问：“我需要搭车去看医生”或“哪里可以领到食物？”",
    categories: {
      [Category.EMERGENCY]: '紧急与电话号码',
      [Category.RECREATION]: '娱乐与教育',
      [Category.EMPLOYMENT]: '就业与金钱',
      [Category.TRANSPORTATION]: '交通',
      [Category.HOUSING]: '住房',
      [Category.HEALTH]: '健康与家庭护理',
      [Category.MENTAL_HEALTH]: '心理健康与孤独',
      [Category.CAREGIVER]: '护理员支持',
      [Category.ABUSE]: '虐待老人与欺诈',
      [Category.LEGAL]: '法律',
      [Category.FOOD]: '食物',
      [Category.PETS]: '宠物',
      [Category.SPECIALIZED]: '专业服务',
    }
  },
  pa: {
    title: 'ਸੇਵਾਵਾਂ ਦੀ ਡਾਇਰੈਕਟਰੀ',
    subtitle: 'ਟੋਰਾਂਟੋ ਵਿੱਚ ਸੀਨੀਅਰਜ਼ ਅਤੇ ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਲਈ',
    searchPlaceholder: "ਨਾਮ, ਵਿਸ਼ੇ ਜਾਂ ਕੀਵਰਡ ਦੁਆਰਾ ਖੋਜੋ...",
    heroTitle: "ਤੁਸੀਂ ਅੱਜ ਕਿਹੜੀ ਸੇਵਾ ਲੱਭ ਰਹੇ ਹੋ?",
    needHelp: "ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
    callText: "2-1-1 'ਤੇ ਕਾਲ ਕਰੋ",
    showAll: "ਸਭ ਦਿਖਾਓ",
    searchResults: "ਖੋਜ ਨਤੀਜੇ",
    allServices: "ਸਾਰੀਆਂ ਸੇਵਾਵਾਂ",
    noResults: "ਤੁਹਾਡੇ ਮਾਪਦੰਡ ਨਾਲ ਮੇਲ ਖਾਂਦੀ ਕੋਈ ਸੇਵਾ ਨਹੀਂ ਲੱਭੀ।",
    clearFilters: "ਫਿਲਟਰ ਸਾਫ਼ ਕਰੋ",
    emergencyBtn: "911 'ਤੇ ਕਾਲ ਕਰੋ",
    aiButton: "AI ਸਹਾਇਕ ਨੂੰ ਪੁੱਛੋ",
    aiTitle: "ਡਾਇਰੈਕਟਰੀ ਸਹਾਇਕ",
    aiPlaceholder: "ਆਪਣਾ ਸਵਾਲ ਇੱਥੇ ਲਿਖੋ...",
    aiIntro: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਸੇਵਾਵਾਂ ਲੱਭਣ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ।",
    aiIntroSub: "ਪੁੱਛਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ: \"ਮੈਨੂੰ ਡਾਕਟਰ ਕੋਲ ਜਾਣ ਲਈ ਸਵਾਰੀ ਚਾਹੀਦੀ ਹੈ\" ਜਿਵੇਂ ਕਿ",
    categories: {
      [Category.EMERGENCY]: 'ਐਮਰਜੈਂਸੀ ਅਤੇ ਨੰਬਰ',
      [Category.RECREATION]: 'ਮਨੋਰੰਜਨ ਅਤੇ ਸਿੱਖਿਆ',
      [Category.EMPLOYMENT]: 'ਰੁਜ਼ਗਾਰ ਅਤੇ ਪੈਸਾ',
      [Category.TRANSPORTATION]: 'ਆਵਾਜਾਈ',
      [Category.HOUSING]: 'ਰਿਹਾਇਸ਼',
      [Category.HEALTH]: 'ਸਿਹਤ ਅਤੇ ਘਰੇਲੂ ਦੇਖਭਾਲ',
      [Category.MENTAL_HEALTH]: 'ਮਾਨਸਿਕ ਸਿਹਤ ਅਤੇ ਇਕੱਲਤਾ',
      [Category.CAREGIVER]: 'ਦੇਖਭਾਲ ਕਰਨ ਵਾਲੇ ਲਈ ਸਹਾਇਤਾ',
      [Category.ABUSE]: 'ਬਜ਼ੁਰਗਾਂ ਨਾਲ ਦੁਰਵਿਵਹਾਰ ਅਤੇ ਧੋਖਾਧੜੀ',
      [Category.LEGAL]: 'ਕਾਨੂੰਨੀ',
      [Category.FOOD]: 'ਭੋਜਨ',
      [Category.PETS]: 'ਪਾਲਤੂ ਜਾਨਵਰ',
      [Category.SPECIALIZED]: 'ਵਿਸ਼ੇਸ਼ ਸੇਵਾਵਾਂ',
    }
  },
  es: {
    title: 'Directorio de Servicios',
    subtitle: 'para Personas Mayores y Cuidadores en Toronto',
    searchPlaceholder: "Buscar por nombre, tema o palabra clave...",
    heroTitle: "¿Qué servicio está buscando hoy?",
    needHelp: "¿Necesita ayuda?",
    callText: "Llame al 2-1-1",
    showAll: "Mostrar todo",
    searchResults: "Resultados de búsqueda",
    allServices: "Todos los servicios",
    noResults: "No se encontraron servicios que coincidan con sus criterios.",
    clearFilters: "Borrar filtros y mostrar todo",
    emergencyBtn: "Llame al 911",
    aiButton: "Preguntar al Asistente IA",
    aiTitle: "Asistente del Directorio",
    aiPlaceholder: "Escriba su pregunta aquí...",
    aiIntro: "¡Hola! Puedo ayudarle a encontrar servicios.",
    aiIntroSub: "Intente preguntar: \"Necesito transporte al médico\" o \"¿Dónde puedo conseguir comida?\"",
    categories: {
      [Category.EMERGENCY]: 'Emergencia y Números',
      [Category.RECREATION]: 'Recreación y Educación',
      [Category.EMPLOYMENT]: 'Empleo y Dinero',
      [Category.TRANSPORTATION]: 'Transporte',
      [Category.HOUSING]: 'Vivienda',
      [Category.HEALTH]: 'Salud y Cuidado en el Hogar',
      [Category.MENTAL_HEALTH]: 'Salud Mental y Soledad',
      [Category.CAREGIVER]: 'Apoyo para Cuidadores',
      [Category.ABUSE]: 'Abuso de Ancianos y Fraude',
      [Category.LEGAL]: 'Legal',
      [Category.FOOD]: 'Alimentación',
      [Category.PETS]: 'Mascotas',
      [Category.SPECIALIZED]: 'Servicios Especializados',
    }
  }
};
