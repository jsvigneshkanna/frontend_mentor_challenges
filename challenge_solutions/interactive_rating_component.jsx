import React from "react";
import IconStar from "../images/IconStar";
import Link from "next/link";

const InteractiveRatingComponent = () => {
  return (
    <div className="flex justify-center items-center bg-slate-800 rounded-3xl">
      <div
        className=" bg-gradient-to-br from-slate-900/20 to-gray-900/80 flex flex-col 
      justify-center items-start w-[300px] md:w-[500px] py-6 px-5 md:px-10 rounded-3xl"
      >
        <div className=" bg-slate-700/60 p-3 rounded-full">
          <IconStar />
        </div>
        <p className="mt-8 font-sans font-semibold text-2xl md:text-3xl text-white">How did we do?</p>
        <p className=" text-gray-300/60 mt-2 font-medium tracking-wider leading-7 text-sm md:text-base">
          Please let us know how did with your support request. All feedback is appreciated to help us improve our
          offering!
        </p>
        <div className="flex gap-3 md:gap-8 mt-5 md:mt-8">
          <p
            className="bg-slate-700/50 rounded-full w-10 md:w-14 h-10 md:h-14 p-2 md:p-3 flex justify-center items-center
           text-gray-300/60 font-bold text-lg hover:bg-orange-600/90 hover:text-white cursor-pointer"
          >
            1
          </p>
          <p
            className="bg-slate-700/50 rounded-full w-10 md:w-14 h-10 md:h-14 p-2 md:p-3 flex justify-center items-center
           text-gray-300/60 font-bold text-lg hover:bg-orange-600/90 hover:text-white cursor-pointer"
          >
            2
          </p>
          <p
            className="bg-slate-700/50 rounded-full w-10 md:w-14 h-10 md:h-14 p-2 md:p-3 flex justify-center items-center
           text-gray-300/60 font-bold text-lg hover:bg-orange-600/90 hover:text-white cursor-pointer"
          >
            3
          </p>
          <p
            className="bg-slate-700/40 rounded-full w-10 md:w-14 h-10 md:h-14 p-2 md:p-3 flex justify-center items-center
           text-gray-300/60 font-bold text-lg hover:bg-orange-600/90 hover:text-white cursor-pointer"
          >
            4
          </p>
          <p
            className="bg-slate-700/40 rounded-full w-10 md:w-14 h-10 md:h-14 p-2 md:p-3 flex justify-center items-center
           text-gray-300/60 font-bold text-lg hover:bg-orange-600/90 hover:text-white cursor-pointer"
          >
            5
          </p>
        </div>
        <Link
          href="/solutions/interactive_rating_thankyou"
          className=" bg-orange-600/90 text-gray-200/90 font-semibold w-full mt-7 rounded-3xl text-center py-2 md:py-3 
           text-lg md:text-xl uppercase hover:bg-white hover:text-orange-600 tracking-wider"
        >
          submit
        </Link>
      </div>
    </div>
  );
};

export default InteractiveRatingComponent;

/* 
Frontend mentor style guide colors
- Orange: hsl(25, 97%, 53%)
- White: hsl(0, 0%, 100%)
- Light Grey: hsl(217, 12%, 63%)
- Medium Grey: hsl(216, 12%, 54%)
- Dark Blue: hsl(213, 19%, 18%)
- Very Dark Blue: hsl(216, 12%, 8%)
*/
