export type Category = 
  | 'CYBER NEWS'
  | 'PRIVACY'
  | 'ETHICAL HACKING'
  | 'AI SECURITY'
  | 'SCAMS'
  | 'TECH'
  | 'SECURITY BASICS'
  | 'CYBERSECURITY';

export interface Article {
  id: string;
  category: Category;
  title: string;
  excerpt: string;
  content: string[];
  readingTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  thumbnail: string;
  source?: string;
  featured?: boolean;
  tags: string[];
  keyTakeaways: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  platform: 'YouTube' | 'TikTok' | 'Instagram';
  thumbnail: string;
  duration: string;
  category: Category;
  views: string;
  date: string;
  summary: string;
  keyTakeaways: string[];
  chapters: { time: string; title: string }[];
}

export interface NewsItem {
  id: string;
  date: string;
  category: Category;
  headline: string;
  summary: string;
  source: string;
  sourceUrl?: string;
  isBreaking?: boolean;
  readTime: string;
  fullStory?: string[];
  impactLevel: 'CRITICAL' | 'HIGH' | 'ADVISORY' | 'INFORMATIONAL';
}

export interface TopicTrack {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  modulesCount: number;
  level: 'Beginner' | 'Intermediate' | 'All Audiences';
  icon: string;
  highlights: string[];
}

export interface AttackDefendItem {
  id: string;
  attackTitle: string;
  attackCategory: string;
  attackDesc: string;
  attackVectorDetail: string;
  defendTitle: string;
  defendCategory: string;
  defendDesc: string;
  defendProtocolDetail: string;
  realScenarioNepal: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: string;
  pronunciation?: string;
  simpleDefinition: string;
  technicalContext: string;
  realWorldExample: string;
  howToProtect: string;
}

export interface ResourceToolkitItem {
  id: string;
  title: string;
  category: string;
  description: string;
  format: 'Interactive Guide' | 'PDF Checklist' | 'Tool Directory' | 'Roadmap';
  iconName: string;
  badge: string;
  details: string[];
}

export interface RoadmapLevel {
  level: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  topics: { name: string; desc: string; icon: string }[];
  recommendedTools: string[];
  certifications: string[];
  learningOutcome: string;
}
