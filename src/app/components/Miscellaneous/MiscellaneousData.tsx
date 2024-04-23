"use client";

import { useState, useEffect } from "react";
import {
  getCategoryProducts,
  Product,
} from "@/app/data-fetching/getProductData";
import Image from "next/image";
import Link from "next/link";

const MiscellaneousData = () => {
  const [miscellaneousData, setMiscellaneousData] = useState<Product[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchMiscellaneousProducts = async () => {
      try {
        const data = await getCategoryProducts(5);
        setMiscellaneousData(data);
        console.log("MISCELLANEOUS DATA: ", data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch miscellaneous", error);
        setError("Failed to load miscellaneous data");
        setIsLoading(false);
      }
    };

    fetchMiscellaneousProducts();
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
      {miscellaneousData &&
        miscellaneousData.length > 0 &&
        miscellaneousData.map((miscellaneous) => {
          let imageUrl = "/images/fallback/image-unavailable.png";
          if (miscellaneous.images && miscellaneous.images.length > 0) {
            imageUrl = cleanImageUrl(miscellaneous.images[0]);
            console.log("IMAGE URL: ", imageUrl);
          }
          return (
            <div key={miscellaneous.id} className="w-[18rem] h-[25rem] mb-4">
              {miscellaneous.images.length > 0 && (
                <Link href="#">
                  <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt={miscellaneous.title}
                    className="w-full h-auto border-4 border-zinc-500 hover:opacity-50 transition-opacity duration-300"
                  />
                </Link>
              )}
              <div className="flex items-center justify-between space-y-4 mb-2">
                <p className="font-semibold">{miscellaneous.title}</p>
                <p className="text-red-800">${miscellaneous.price}</p>
              </div>
              <p>{truncateString(miscellaneous.description, 110)}</p>
            </div>
          );
        })}
    </div>
  );
};

export default MiscellaneousData;
