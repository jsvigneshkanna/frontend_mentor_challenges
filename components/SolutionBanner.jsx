import ChevronLeft from "./ChevronLeft";

const SolutionBanner = () => {
  return (
    <div
      className="bg-violet-50 dark:bg-sky-900 text-slate-900 dark:text-slate-100 w-4/5 md:w-3/5  flex
       flex-col justify-center items-center mx-auto my-6 rounded-lg shadow-md shadow-purple-300 dark:shadow-blue-700 py-8 
       gap-4 font-semibold px-4 text-center"
    >
      <h1 className="font-black text-lg text-blue-800 dark:text-orange-500">
        Vignesh Kanna&apos;s Frontend mentor challenges Solutions{" "}
      </h1>
      <h2
        className="text-center underline underline-offset-8 decoration-slate-500 md:text-xl hover:text-zinc-600
      hover:underline-offset-4 text-lg"
      >
        Product Preview Card Component
      </h2>
      <div className="mt-4">
        <p className="text-center text-lg flex justify-center items-center flex-col md:flex-row gap-2">
          Frontend mentor page -
          <a
            href="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-300 px-2 rounded-xl hover:bg-slate-300 flex justify-center items-center 
            text-black text-base md:text-lg"
          >
            Click here <ChevronLeft />
          </a>
        </p>
      </div>
    </div>
  );
};

export default SolutionBanner;
