"use client";

import { useState, useEffect } from "react";
import { Product } from "@/app/data-fetching/getProductData";
import { getFeaturedProduct } from "@/app/data-fetching/getProductData";
import Image from "next/image";

const HeroProduct: React.FC = () => {
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>();

  useEffect(() => {
    const fetchFeaturedProduct = async () => {
      const productData = await getFeaturedProduct();
      setFeaturedProduct(productData);
    };
    fetchFeaturedProduct();
  }, []);

  return (
    <div className="w-full h-full py-12 px-6 flex flex-col justify-center items-center">
      {featuredProduct && (
        <div key={featuredProduct.id}>
          <h1>{featuredProduct.title}</h1>
          {featuredProduct.images && featuredProduct.images.length > 0 && (
            <Image
              priority
              src={
                featuredProduct.images[1] ||
                "/images/fallback/image-unavailable.png"
              }
              width={200}
              height={200}
              alt={featuredProduct.title}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default HeroProduct;
