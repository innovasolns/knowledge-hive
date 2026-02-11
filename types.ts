export interface Course {
  id: string;
  title: string;
  description?: string;
  instructor: string;
  instructorImage: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Expert';
  lessons: number;
  progress?: number;
  category: string;
}

export interface Plan {
  name: string;
  price: number;
  period: string;
  features: string[];
  highlight?: boolean;
  buttonText: string;
  colorClass: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}
