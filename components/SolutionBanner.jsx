import ChevronLeft from "./ChevronLeft";

const SolutionBanner = ({ challengeName, challengeUrl }) => {
  return (
    <div
      className="bg-violet-50 dark:bg-sky-900 text-slate-900 dark:text-slate-100 w-4/5 md:w-3/5  flex
       flex-col justify-center items-center mx-auto py-6 rounded-lg shadow-md shadow-purple-300 dark:shadow-blue-700 
       gap-4 font-semibold px-4 text-center"
    >
      <h1 className="font-black text-base md:text-lg text-blue-800 dark:text-yellow-300">
        Vignesh Kanna&apos;s Frontend mentor challenges Solutions{" "}
      </h1>
      <h2
        className="text-center underline underline-offset-4 decoration-slate-300 md:text-xl hover:text-zinc-600 dark:hover:text-zinc-300
      hover:underline-offset-4 text-lg"
      >
        {challengeName}
      </h2>
      <div className="mt-1 md:mt-3">
        <p className="text-center text-lg flex justify-center items-center flex-col md:flex-row gap-2">
          Frontend mentor page -
          <a
            href={challengeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-300 px-2 rounded-xl hover:bg-zinc-200 flex justify-center items-center 
            text-black text-sm md:text-base"
          >
            Click here <ChevronLeft />
          </a>
        </p>
      </div>
    </div>
  );
};

export default SolutionBanner;
