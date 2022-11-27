import ThankyouIcon from "../images/thankYouIcon";
import Link from "next/link";

const InteractiveRatingThankyou = () => {
  return (
    <div className="flex justify-center items-center bg-slate-800 rounded-3xl">
      <div
        className=" bg-gradient-to-br from-slate-900/20 to-gray-900/80 flex flex-col 
      justify-center items-center w-[300px] md:w-[500px] py-10 px-5 md:px-10 rounded-3xl"
      >
        <ThankyouIcon />
        <p className="py-1 px-3 rounded-3xl bg-slate-600/50 text-orange-500 mt-6 font-semibold">
          You selected 4 out of 5
        </p>
        <p className="text-white text-2xl font-semibold tracking-wider mt-8">Thank you!</p>
        <p className=" mt-3 text-slate-300/70 font-medium text-center">
          We appreciate you taking the time to give a rating, If you ever need more support, don&apos;t hesitate to get
          in touch!
        </p>
        <Link
          href="/solutions/interactive_rating_component"
          className=" bg-orange-600/90 text-gray-200/90 font-semibold w-full mt-7 rounded-3xl text-center py-2 md:py-3 
           text-lg md:text-xl uppercase hover:bg-white hover:text-orange-600 tracking-wider"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default InteractiveRatingThankyou;

/* 
Frontend mentor style guide colors
- Orange: hsl(25, 97%, 53%)
- White: hsl(0, 0%, 100%)
- Light Grey: hsl(217, 12%, 63%)
- Medium Grey: hsl(216, 12%, 54%)
- Dark Blue: hsl(213, 19%, 18%)
- Very Dark Blue: hsl(216, 12%, 8%)
*/
