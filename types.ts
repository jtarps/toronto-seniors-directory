
export enum Category {
  EMERGENCY = 'Emergency & Crisis',
  RECREATION = 'Recreation & Education',
  EMPLOYMENT = 'Employment & Money',
  TRANSPORTATION = 'Transportation',
  HOUSING = 'Housing',
  HEALTH = 'Health Care',
  MENTAL_HEALTH = 'Mental Health & Loneliness',
  CAREGIVER = 'Caregiver Supports',
  ABUSE = 'Elder Abuse & Fraud',
  LEGAL = 'Legal',
  FOOD = 'Food',
  PETS = 'Pets',
  SPECIALIZED = 'Specialized Services'
}

export type Language = 'en' | 'fr' | 'zh' | 'pa' | 'es';

export type LocalizedString = {
  [key in Language]: string;
};

export interface Service {
  id: string;
  name: LocalizedString;
  phone?: string;
  phone2?: string;
  tty?: string;
  website?: string;
  email?: string;
  description: LocalizedString;
  category: Category;
  subcategory?: LocalizedString;
  address?: string;
  notes?: LocalizedString;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
