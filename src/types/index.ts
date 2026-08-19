export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tags: string[];
  mockupType: 'ultrawide' | 'laptop' | 'desktop' | 'mobile';
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  skills: string[];
}

export interface OpenSourceRepo {
  id: string;
  name: string;
  stars: string;
  description: string;
  language: string;
  languageColor: string;
  url: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TechItem {
  name: string;
  iconName: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Design' | 'Mobile';
}
