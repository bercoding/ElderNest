export interface NavItem {
  name: string;
  path: string;
  isActive?: boolean;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
 
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}