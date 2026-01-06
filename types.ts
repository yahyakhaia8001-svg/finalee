export interface Package {
  id: string;
  title: string;
  destination: string;
  price: number;
  currency: string;
  duration: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export enum DestinationCategory {
  ALL = 'Tous',
  TURKEY = 'Turquie',
  DUBAI = 'Dubai',
  EUROPE = 'Europe',
  UMRAH = 'Omra',
  ASIA = 'Asie'
}