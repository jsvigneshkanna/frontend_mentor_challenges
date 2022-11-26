/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import productImage from "../images/product_preview_card.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductPreviewCard = () => {
  return (
    <div className="flex flex-row overflow-hidden rounded-lg gap-6 bg-slate-50 w-[480px] h-[420px]">
      {/* left image */}
      <Image src={productImage} alt="productImage" width={220} />
      {/* right side */}
      <div className="flex flex-col py-8 pr-3">
        <p className=" uppercase tracking-[0.5rem] text-slate-400 font-medium text-sm">perfume</p>
        <h2 className="text-black font-black text-4xl mt-3">Gabrielle Essence Eau De Parfum</h2>
        <p className="text-slate-400 mt-5 text-sm font-medium">
          A floral, solar and voluptuous interpretation composed by Olivier Palge, Perfumer-Creator for the House of
          CHANAL.
        </p>
        <div className="flex gap-6 mt-3 items-center">
          <p className="text-2xl text-green-700  font-serif font-extrabold">$149.99</p>
          <p className="text-sm text-green-500 font-medium line-through mt-2">$169.99</p>
        </div>
        <button
          disabled="disabled"
          className="bg-green-700 mt-5 rounded-md text-white py-2 text-center font-semibold flex justify-center items-center gap-4"
        >
          <AiOutlineShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
