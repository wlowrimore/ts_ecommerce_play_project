import React from "react";

const CouponAd: React.FC = () => {
  return (
    <main className="flex w-full h-[21rem]  pt-1 px-2 mt-14 mb-20">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold py-4">We Offer:</h2>
        <ul className="list-disc text-xl space-y-2 ml-4">
          <li>The Latest Styles</li>
          <li>Quality Products</li>
          <li>Knowledgable Staff</li>
          <li>International Shipping</li>
          <li>Free Domestic Shipping</li>
        </ul>
      </div>
      <div className="bg-coupon-background bg-cover bg-center bg-no-repeat w-full h-[20rem] flex flex-col justify-center items-end mb-10 shadow-md shadow-zinc-600">
        <div className="bg-zinc-200/60 w-full h-full">
          <div className="flex flex-col justify-center w-full h-full px-12 space-y-4">
            <h2 className="text-3xl relative">
              Sign up for our newsletter by June 26
              <span className="text-sm font-bold absolute bottom-12">
                th
              </span>{" "}
              &nbsp; to receive exclusive offers!
            </h2>
            <p className="text-2xl pb-6">
              Earn 10% off just for signing up today.
            </p>

            <button className="bg-teal-300 border border-white rounded-lg py-1 px-4 text-lg">
              Get Your Coupon Code
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CouponAd;
