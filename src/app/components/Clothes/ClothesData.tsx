"use client";

import { useState, useEffect } from "react";
import {
  getCategoryProducts,
  getSingleProduct,
  Product,
} from "@/app/data-fetching/getProductData";
import Image from "next/image";
import Modal from "./Modal";

const ClothesData = () => {
  const [clothesData, setClothesData] = useState<Product[] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleImageClick = async (productId: number) => {
    try {
      const data = await getSingleProduct(productId);
      setSelectedProduct(data);
      setModalOpen(true);
    } catch (error) {
      console.error("Failed to fetch product", error);
    }
  };

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
    <>
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
                  <div>
                    <Image
                      src={imageUrl}
                      width={500}
                      height={500}
                      alt={clothes.title}
                      className="cursor-pointer w-full h-auto border-4 border-zinc-500 hover:opacity-50 transition-opacity duration-300"
                      onClick={() => handleImageClick(clothes.id)}
                    />
                  </div>
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

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {selectedProduct && (
          <div className="flex justify-center items-center gap-12">
            <div className="w-full h-auto">
              <Image
                src={
                  selectedProduct.images.length > 0
                    ? cleanImageUrl(selectedProduct.images[0])
                    : "/images/fallback/image-unavailable.png"
                }
                width={500}
                height={500}
                alt={selectedProduct.title}
              />
            </div>
            <div className="flex flex-col space-y-8 w-4/5">
              <h3 className="mt-4 text-xl font-semibold">
                {selectedProduct.title}
              </h3>
              <p>{selectedProduct.description}</p>
              <p className="text-lg font-bold">${selectedProduct.price}</p>
              <div className="flex flex-col space-y-4">
                <div className="flex w-full h-[3.5rem] gap-6">
                  <button className="w-full bg-zinc-700 text-white hover:bg-zinc-900 transition-all duration-300 py-2 px-4 rounded-lg">
                    Add to Cart
                  </button>
                  <button className="w-full bg-rose-300 hover:bg-rose-400 transition-all duration-300 py-2 px-4 rounded-lg">
                    Add to Wishlist
                  </button>
                </div>
                <button className="w-full py-2 px-6 bg-amber-200 hover:bg-amber-300 transition-all duration-300 rounded-lg text-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ClothesData;
