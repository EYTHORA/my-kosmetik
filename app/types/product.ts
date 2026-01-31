export interface Review {
  name: string;
  rating: number;
  comment: string;
  image?: string;
  date?: string;
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  price: string;
  image: string;
  category: string;
  size?: string;
  description?: string;
  ingredients?: string[];
  reviews?: Review[];
}
