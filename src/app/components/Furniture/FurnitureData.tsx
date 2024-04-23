"use client";

import { useState, useEffect } from "react";
import {
  getCategoryProducts,
  Product,
} from "@/app/data-fetching/getProductData";
import Image from "next/image";
import Link from "next/link";

const FurnitureData = () => {
  const [furnitureData, setFurnitureData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchFurnitureProducts = async () => {
      try {
        const data = await getCategoryProducts(3);
        setFurnitureData(data);
        console.log("FURNITURE DATA: ", data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch furniture", error);
        setError("Failed to load furniture data");
        setIsLoading(false);
      }
    };

    fetchFurnitureProducts();
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
      {furnitureData &&
        furnitureData.length > 0 &&
        furnitureData.map((furniture) => {
          let imageUrl = "/images/fallback/image-unavailable.png";
          if (furniture.images && furniture.images.length > 0) {
            imageUrl = cleanImageUrl(furniture.images[0]);
            console.log("IMAGE URL: ", imageUrl);
          }
          return (
            <div key={furniture.id} className="w-[18rem] h-[25rem] mb-4">
              {furniture.images.length > 0 && (
                <Link href="#">
                  <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt={furniture.title}
                    className="w-full h-auto border-4 border-zinc-500 hover:opacity-50 transition-opacity duration-300"
                  />
                </Link>
              )}
              <div className="flex items-center justify-between space-y-4 mb-2">
                <p className="font-semibold">{furniture.title}</p>
                <p className="text-red-800">${furniture.price}</p>
              </div>
              <p>{truncateString(furniture.description, 110)}</p>
            </div>
          );
        })}
    </div>
  );
};

export default FurnitureData;
