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

// get featured product for hero
export async function getFeaturedProduct(): Promise<Product> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products/16");
  const featuredData: Product = await response.json();
  console.log("FEATURED DATA: ", featuredData);
  return featuredData;
}

// get all categories
export async function getCategories(): Promise<Category[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data: Category[] = await response.json();
  console.log("CATEGORY DATA: ", data);
  return data;
}

// get single category
export async function getSingleCategory(id: number): Promise<Category> {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );
  const data: Category = await response.json();
  console.log("SINGLE CATEGORY DATA: ", data);
  return data;
}

export async function getCategoryProducts(
  categoryId: number
): Promise<Product[]> {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}&offset=1&limit=15`
  );
  const data: Product[] = await response.json();
  console.log("CATEGORY PRODUCTS DATA: ", data);
  return data;
}
