import ProductPreviewCard from "../../challenge_solutions/product_preview_card_component";
import Header from "../../components/Header";
import SolutionBanner from "../../components/SolutionBanner";

const product_preview_card = () => {
  return (
    <div className="pb-12">
      <Header title="product preview card" />
      <SolutionBanner
        challengeName="product preview card component"
        challengeUrl="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa"
      />
      <div className=" mt-8 md:mt-14 flex flex-col justify-center items-center w-full">
        <ProductPreviewCard />
      </div>
    </div>
  );
};

export default product_preview_card;
