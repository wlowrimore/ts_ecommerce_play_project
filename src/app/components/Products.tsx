"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Product } from "../data-fetching/getProductData";
import getAllProducts from "../data-fetching/getProductData";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await getAllProducts();
      setProducts(productData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full h-full py-12 px-6 flex flex-col justify-center items-center">
      {products?.map((product) => (
        <div
          key={product.id}
          className="w-1/2 flex flex-col justify-center items-center"
        >
          <h1>{product.title}</h1>
          {product.images.length > 0 && (
            <Image
              src={
                product.images[1] || "/images/fallback/image-unavailable.png"
              }
              width={200}
              height={200}
              alt={product.title}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
