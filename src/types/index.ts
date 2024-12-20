export interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'articles' | 'real-estate' | 'automotive';
  subcategory: string;
  images: string[];
  location: string;
  tags: string[];
  featured: boolean;
  createdAt: Date;
  userId: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  ads: Ad[];
}