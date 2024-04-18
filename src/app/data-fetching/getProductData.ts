export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  description: string;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

// get all products
export default async function getAllProducts(): Promise<Product[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const data: Product[] = await response.json();
  console.log("DATA: ", data);
  return data;
}

// random featured product for hero
export async function getFeaturedProduct(): Promise<Product> {
  // const randomId = Math.floor(Math.random() * 20) + 1;
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/16`);
  const featuredData: Product = await response.json();
  console.log("FEATURED DATA: ", featuredData);
  return featuredData;
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data: Category[] = await response.json();
  console.log("CATEGORY DATA: ", data);
  return data;
}
