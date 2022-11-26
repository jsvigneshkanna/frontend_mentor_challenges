/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import productImage from "../images/product_preview_card.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductPreviewCard = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden rounded-lg gap-[1px] md:gap-1 bg-orange-50 w-4/5 md:w-[520px] md:h-[420px]">
      {/* left image */}
      <Image
        src={productImage}
        alt="productImage"
        width={220}
        className="w-full md:w-[240px] h-52 md:h-full object-fit"
      />
      {/* right side */}
      <div className="flex flex-col py-3 md:py-8 px-5 md:pr-3">
        <p className=" uppercase tracking-[0.5rem] text-slate-400 font-medium md:text-sm text-[12px]">perfume</p>
        <h2 className="text-black font-black text-2xl md:text-4xl mt-2 md:mt-3">Gabrielle Essence Eau De Parfum</h2>
        <p className="text-slate-400 mt-3 md:mt-5 text-sm font-medium">
          A floral, solar and voluptuous interpretation composed by Olivier Palge, Perfumer-Creator for the House of
          CHANAL.
        </p>
        <div className="flex gap-4 mt-3 items-center">
          <p className="text-2xl text-green-700  font-serif font-extrabold">$149.99</p>
          <p className="text-sm text-green-500 font-medium line-through mt-2">$169.99</p>
        </div>
        <button
          disabled="disabled"
          className="bg-emerald-700 mt-5 rounded-md text-white py-2 text-center font-semibold flex justify-center items-center gap-3 mb-4"
        >
          <AiOutlineShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
