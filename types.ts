export interface PricingTier {
  id: string;
  title: string;
  subtitle: string;
  topicCount: number;
  pricePerTopic: number;
  totalPrice: number;
  discount?: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  name: string;
  role: string; // e.g., "Student, Grade 11"
  text: string;
  rating: number;
  avatar?: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}