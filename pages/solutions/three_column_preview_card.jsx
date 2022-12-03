import ThreeColumnPreview from "../../challenge_solutions/three_column_preview";
import Header from "../../components/Header";
import SolutionBanner from "../../components/SolutionBanner";

const three_column_preview_card = () => {
  return (
    <div>
      <div className="pb-12">
        <Header title="3 column preview card" />
        <SolutionBanner
          challengeName="product preview card component"
          challengeUrl="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-"
        />
        <div className=" mt-8 md:mt-14 flex flex-col justify-center items-center w-full">
          <ThreeColumnPreview />
        </div>
      </div>
    </div>
  );
};

export default three_column_preview_card;
