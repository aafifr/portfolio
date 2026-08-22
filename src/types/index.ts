export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tags: string[];
  mockupType: 'ultrawide' | 'laptop' | 'desktop' | 'mobile' | 'browser-duo' | 'perspective-3d' | 'tablet' | 'imac';
  image?: string;
  mobileImage?: string;
  liveUrl: string;
  storyUrl?: string;
  githubUrl?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  year?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  logo?: string;
  companyUrl?: string;
  description: string;
  skills: string[];
  certificateUrl?: string;
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

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  period: string;
  description: string;
  skills?: string[];
  certificateUrl?: string;
  type: 'certification' | 'training';
}

export interface AwardItem {
  id: string;
  title: string;
  event: string;
  issuer: string;
  year: string;
  badge: string;
  description: string;
  skills?: string[];
  certificateUrl?: string;
  artworkUrl?: string;
  artworkButtonText?: string;
}

export interface TechItem {
  name: string;
  iconName: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Design' | 'Mobile';
}
