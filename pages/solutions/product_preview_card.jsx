import ProductPreviewCard from "../../challenge_solutions/product_preview_card_component";

const product_preview_card = () => {
  return (
    <div className="bg-orange-50 text-zinc-800 font-sans min-h-screen">
      <h1
        className="text-center underline underline-offset-4 decoration-slate-500 py-12 
        text-xl hover:bg-slate-200 hover:text-zinc-600 bg-sky-200"
      >
        Product Preview Card Component
      </h1>
      <p className="text-center py-4 text-lg">
        Frontend mentor URL-
        <a
          href="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-200 px-2 rounded-xl hover:bg-slate-300"
        >
          Click here
        </a>
      </p>
      <ProductPreviewCard />
    </div>
  );
};

export default product_preview_card;
