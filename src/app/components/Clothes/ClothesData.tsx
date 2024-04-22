"use client";

import { useState, useEffect } from "react";
import {
  getCategoryProducts,
  Product,
} from "@/app/data-fetching/getProductData";
import Image from "next/image";
import Link from "next/link";

const ClothesData = () => {
  const [clothesData, setClothesData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchClothingProducts = async () => {
      try {
        const data = await getCategoryProducts(1);
        setClothesData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch clothes", error);
        setError("Failed to load clothes data");
        setIsLoading(false);
      }
    };

    fetchClothingProducts();
  }, []);

  function truncateString(str: string, maxLenghth: number): string {
    if (str.length > maxLenghth) {
      return str.slice(0, maxLenghth - 3) + "...";
    }
    return str;
  }

  const cleanImageUrl = (url: string): string => {
    return url.replace(/^["'\[\]]+|["'\[\]]+$/g, "");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {clothesData &&
        clothesData.length > 0 &&
        clothesData.map((clothes) => {
          let imageUrl = "/images/fallback/image-unavailable.png";
          if (clothes.images && clothes.images.length > 0) {
            imageUrl = cleanImageUrl(clothes.images[0]);
            console.log("IMAGE URL: ", imageUrl);
          }
          return (
            <div key={clothes.id} className="w-[18rem] h-[25rem] mb-4">
              {clothes.images.length > 0 && (
                <Link href="#">
                  <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt={clothes.title}
                    className="w-full h-auto border-4 border-zinc-500 hover:opacity-50 transition-opacity duration-300"
                  />
                </Link>
              )}
              <div className="flex items-center justify-between space-y-4 mb-2">
                <p className="font-semibold">{clothes.title}</p>
                <p className="text-red-800">${clothes.price}</p>
              </div>
              <p>{truncateString(clothes.description, 110)}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ClothesData;
