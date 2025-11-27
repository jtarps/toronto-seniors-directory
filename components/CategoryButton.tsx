
import React from 'react';
import { Category } from '../types';
import { Ambulance, Heart, Home, Bus, Utensils, DollarSign, Users, Star, HeartHandshake, ShieldAlert, Scale, Dog, Smile } from 'lucide-react';

interface CategoryButtonProps {
  category: Category;
  label: string;
  onClick: (category: Category) => void;
  isSelected?: boolean;
}

const iconMap: Record<Category, React.ReactNode> = {
  [Category.EMERGENCY]: <Ambulance className="w-8 h-8" />,
  [Category.HEALTH]: <Heart className="w-8 h-8" />,
  [Category.HOUSING]: <Home className="w-8 h-8" />,
  [Category.TRANSPORTATION]: <Bus className="w-8 h-8" />,
  [Category.FOOD]: <Utensils className="w-8 h-8" />,
  [Category.EMPLOYMENT]: <DollarSign className="w-8 h-8" />,
  [Category.RECREATION]: <Users className="w-8 h-8" />,
  [Category.SPECIALIZED]: <Star className="w-8 h-8" />,
  [Category.CAREGIVER]: <HeartHandshake className="w-8 h-8" />,
  [Category.ABUSE]: <ShieldAlert className="w-8 h-8" />,
  [Category.LEGAL]: <Scale className="w-8 h-8" />,
  [Category.PETS]: <Dog className="w-8 h-8" />,
  [Category.MENTAL_HEALTH]: <Smile className="w-8 h-8" />,
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({ category, label, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(category)}
      className={`
        flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 w-full h-32 md:h-40
        ${isSelected 
          ? 'bg-blue-800 border-blue-800 text-white shadow-inner' 
          : 'bg-white border-stone-200 text-slate-700 hover:border-blue-400 hover:shadow-md hover:-translate-y-1'
        }
      `}
      aria-label={`Filter by ${label}`}
      aria-pressed={isSelected}
    >
      <div className={`mb-2 md:mb-3 ${isSelected ? 'text-white' : 'text-blue-700'}`}>
        {iconMap[category]}
      </div>
      <span className="text-center font-bold text-sm md:text-lg leading-tight">{label}</span>
    </button>
  );
};