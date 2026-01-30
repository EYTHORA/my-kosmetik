export interface Review {
  name: string;
  rating: number;
  comment: string;
  image?: string;
  date?: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  price: string;
  image: string;
  category: string;        // ✅ TAMBAH
  size?: string;
  description?: string;
  ingredients?: string[];
  reviews?: Review[];
}
