/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ShowcaseCard = ({ name, image, href, brief }) => {
  return (
    <div
      className=" bg-slate-100 dark:bg-gray-800 border-[1px] border-gray-500 m-3 flex flex-col 
    w-[80%] md:w-[43%] lg:w-[35%] rounded-lg overflow-hidden hover:scale-105"
    >
      <img src={image} alt={name} className="h-52 md:h-64 w-full" />
      <div className="flex justify-between items-center gap-2 md:gap-2 px-4 flex-col md:flex-row md:h-16 ">
        <h2 className=" font-black text-zinc-800 dark:text-blue-400 my-4 break-words text-center md:text-left w-full md:w-[60%]">
          {name}
        </h2>
        <Link
          href={href}
          className="bg-slate-600 text-white dark:bg-sky-100 dark:text-slate-900 
        px-2 py-1 rounded-full hover:scale-105 active:scale-90 mb-5 md:mb-0"
        >
          See More
        </Link>
      </div>
      <p className="px-3 text-center py-3 md:py-0 md:h-24 flex justify-center items-center text-sm md:text-base text-black dark:text-white">
        {brief}
      </p>
    </div>
  );
};

export default ShowcaseCard;
