"use client";

import { useState, useEffect } from "react";
import {
  getCategoryProducts,
  Product,
} from "@/app/data-fetching/getProductData";
import Image from "next/image";
import Link from "next/link";

const ElectronicsData = () => {
  const [electronicsData, setElectronicsData] = useState<Product[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchElectronicsProducts = async () => {
      try {
        const data = await getCategoryProducts(2);
        setElectronicsData(data);
        console.log("ELECTRONICS DATA: ", data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch electronics", error);
        setError("Failed to load electronics data");
        setIsLoading(false);
      }
    };

    fetchElectronicsProducts();
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
      {electronicsData &&
        electronicsData.length > 0 &&
        electronicsData.map((electronics) => {
          let imageUrl = "/images/fallback/image-unavailable.png";
          if (electronics.images && electronics.images.length > 0) {
            imageUrl = cleanImageUrl(electronics.images[0]);
            console.log("IMAGE URL: ", imageUrl);
          }
          return (
            <div key={electronics.id} className="w-[18rem] h-[25rem] mb-4">
              {electronics.images.length > 0 && (
                <Link href="#">
                  <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt={electronics.title}
                    className="w-full h-auto border-4 border-zinc-500 hover:opacity-50 transition-opacity duration-300"
                  />
                </Link>
              )}
              <div className="flex items-center justify-between space-y-4 mb-2">
                <p className="font-semibold">{electronics.title}</p>
                <p className="text-red-800">${electronics.price}</p>
              </div>
              <p>{truncateString(electronics.description, 110)}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ElectronicsData;
