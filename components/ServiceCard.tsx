
import React from 'react';
import { Service, Language } from '../types';
import { Phone, Globe, MessageSquare, MapPin } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  language: Language;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, language }) => {
  // Helper to get localized string, fallback to 'en' if missing
  const getStr = (obj?: {[key in Language]: string}) => {
    if (!obj) return '';
    return obj[language] || obj['en'];
  };

  const name = getStr(service.name);
  const description = getStr(service.description);
  const subcategory = service.subcategory ? getStr(service.subcategory) : service.category;
  const notes = service.notes ? getStr(service.notes) : '';

  return (
    <div className="bg-white rounded-xl shadow-md border border-stone-200 p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-blue-800 uppercase bg-blue-100 rounded-full">
            {subcategory}
          </span>
          <h3 className="text-xl font-bold text-slate-900 leading-tight">{name}</h3>
        </div>
      </div>
      
      <p className="text-slate-700 mb-6 text-lg leading-relaxed flex-grow">
        {description}
      </p>

      <div className="space-y-3 mt-auto pt-4 border-t border-stone-100">
        {service.phone && (
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <Phone className="w-5 h-5 text-green-700" />
            </div>
            <a href={`tel:${service.phone.replace(/-/g, '')}`} className="text-lg font-bold text-green-800 hover:underline decoration-2 underline-offset-2">
              {service.phone}
            </a>
          </div>
        )}
        
        {service.tty && (
          <div className="flex items-center gap-3">
            <div className="bg-stone-100 p-2 rounded-full">
              <MessageSquare className="w-5 h-5 text-stone-600" />
            </div>
            <span className="text-stone-700 font-medium">TTY: {service.tty}</span>
          </div>
        )}

        {service.address && (
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded-full">
              <MapPin className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-stone-700 font-medium">{service.address}</span>
          </div>
        )}

        {service.website && (
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Globe className="w-5 h-5 text-blue-700" />
            </div>
            <a 
              href={`https://${service.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline font-medium truncate"
            >
              {service.website}
            </a>
          </div>
        )}
      </div>
      
      {notes && (
        <div className="mt-4 p-3 bg-yellow-50 text-yellow-900 text-sm rounded-lg border border-yellow-100">
          <strong>Note:</strong> {notes}
        </div>
      )}
    </div>
  );
};
