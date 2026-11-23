export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface PracticeArea {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  heroExcerpt: string;
  icon: string;
  imageUrl?: string;
  featured?: boolean;
  keyServices: string[];
  subServices: {
    title: string;
    description: string;
  }[];
  challengesAddressed: {
    title: string;
    description: string;
  }[];
  institutionalApproach: string;
  professionalConsiderations: string[];
  relatedServiceSlugs: string[];
  relatedArticleSlugs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ValueProposition {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  extended?: string;
  commitments?: string[];
}

export interface MethodologyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  details?: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  focusAreas: string[];
  initials: string;
  imageUrl?: string;
  isFeatured?: boolean;
  credentialsOverview: string[];
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  executiveIntro: string;
  imageUrl?: string;
  content?: string[];
  sections: ArticleSection[];
  keyTakeaways: string[];
  relatedServiceSlug: string;
  relatedArticleSlugs: string[];
  author: string;
  isFeatured?: boolean;
}

export interface FAQCategory {
  id: string;
  label: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  keyHighlight?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  preferredContact?: 'email' | 'phone';
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  urgency: string;
  preferredMethod: 'in_person' | 'video_call';
  matterSummary: string;
}

export interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
  isSubmitting: boolean;
}
