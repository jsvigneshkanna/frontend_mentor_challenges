import React from "react";
import BannerImage from "../images/order summary panel/banner.png";
import Image from "next/image";

const OrderSummaryComponent = () => {
  return (
    <div className="min-h-[420px] bg-white w-[400px] rounded-2xl overflow-hidden font-redHatDisplay dark:bg-blue-900">
      {/* Banner Image */}
      <Image
        src={BannerImage}
        alt="equilibrium"
        className="w-full h-full object-cover shadow-sm shadow-blue-600/40"
      ></Image>

      <div className="px-12">
        {/* Order summary details */}
        <div className="flex flex-col justify-center items-center py-8">
          <h2 className="mb-3 font-black text-2xl">Order Summary</h2>

          {/* product description */}
          <div className="text-center font-medium text-slate-700/60 text-sm dark:text-slate-200/80">
            <p>You can now listen to millions of songs,</p>
            <p>audiobooks, and podcasts on any device</p>
            <p>anywhre you like!</p>
          </div>

          {/* pricing container */}
          <div className="mt-5 bg-[#F5F7FF] dark:bg-[#E0E8FF] rounded-2xl w-full p-5 flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                  <path
                    fill="#717FA6"
                    fill-rule="nonzero"
                    d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                  />
                </g>
              </svg>

              <div>
                <p className="font-black font-sans text-[14px] tracking-wide dark:text-black">Annual Plan</p>
                <p className="font-medium text-slate-700/60 text-sm">$59.99/year</p>
              </div>
            </div>

            <p className="text-[#3829E0] hover:underline underline-offset-1 cursor-pointer text-sm font-bold">Change</p>
          </div>

          {/* payment button */}
          <a
            href="https://github.com/jsvigneshkanna"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#3829E0] dark:bg-[#d6ddec] dark:text-black text-white text-sm flex justify-center items-center mt-8 py-3 rounded-2xl hover:bg-[#2613f3] hover:scale-105 shadow-lg shadow-blue-400/40 dark:shadow-blue-800 font-extrabold"
          >
            Proceed to Payment
          </a>

          {/* cancel order */}
          <p className="mt-8 text-[#7280A7] text-sm font-semibold cursor-pointer hover:underline">Cancel Order</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryComponent;
