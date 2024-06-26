"use client";

import { useState, useEffect } from "react";
import { Product } from "@/app/data-fetching/getProductData";
import { getSingleProduct } from "@/app/data-fetching/getProductData";
import Image from "next/image";

const HeroProduct: React.FC = () => {
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>();

  useEffect(() => {
    const fetchFeaturedProduct = async () => {
      const productData = await getSingleProduct(23);
      if (productData && productData.images) {
        const cleanedImages = productData.images.map((img) =>
          img.replace(/[\[\]"]+/g, "")
        );
        productData.images = cleanedImages;
      }
      setFeaturedProduct(productData);
    };
    fetchFeaturedProduct();
  }, []);

  console.log("featuredProduct HEROPRODUCT: ", featuredProduct);

  return (
    <div className="pt-6 pb-12 flex flex-col justify-center w-full">
      {featuredProduct &&
        featuredProduct.images &&
        featuredProduct.images.length > 0 && (
          <div key={featuredProduct.id}>
            <div className="w-full h-auto border-4 border-zinc-500">
              <Image
                priority
                src={
                  featuredProduct.images[1] ||
                  "/images/fallback/image-unavailable.png"
                }
                width={1000}
                height={1000}
                alt={featuredProduct.title}
                className="h-[48rem] object-cover"
              />
            </div>
            <div className="flex items-center gap-1 text-zinc-500 lowercase">
              <h1>Pictured: {featuredProduct.title}</h1>
              <div className="bg-zinc-400 h-[0.05rem] w-[0.5rem] mt-[0.15rem]"></div>
              <p className="text-sm mt-[0.15rem]">${featuredProduct.price}</p>
            </div>
          </div>
        )}
    </div>
  );
};

export default HeroProduct;
