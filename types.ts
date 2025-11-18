export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  WORK = 'work',
  CONTACT = 'contact'
}