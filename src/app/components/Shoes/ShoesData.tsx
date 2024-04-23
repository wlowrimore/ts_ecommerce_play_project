"use client";

import { useState, useEffect } from "react";
import {
  getCategoryProducts,
  Product,
} from "@/app/data-fetching/getProductData";
import Image from "next/image";
import Link from "next/link";

const ShoesData = () => {
  const [shoesData, setShoesData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchShoesProducts = async () => {
      try {
        const data = await getCategoryProducts(4);
        setShoesData(data);
        console.log("SHOES DATA: ", data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch shoes", error);
        setError("Failed to load shoes data");
        setIsLoading(false);
      }
    };

    fetchShoesProducts();
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
      {shoesData &&
        shoesData.length > 0 &&
        shoesData.map((shoes) => {
          let imageUrl = "/images/fallback/image-unavailable.png";
          if (shoes.images && shoes.images.length > 0) {
            imageUrl = cleanImageUrl(shoes.images[0]);
            console.log("IMAGE URL: ", imageUrl);
          }
          return (
            <div key={shoes.id} className="w-[18rem] h-[25rem] mb-4">
              {shoes.images.length > 0 && (
                <Link href="#">
                  <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt={shoes.title}
                    className="w-full h-auto border-4 border-zinc-500 hover:opacity-50 transition-opacity duration-300"
                  />
                </Link>
              )}
              <div className="flex items-center justify-between space-y-4 mb-2">
                <p className="font-semibold">{shoes.title}</p>
                <p className="text-red-800">${shoes.price}</p>
              </div>
              <p>{truncateString(shoes.description, 110)}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ShoesData;
