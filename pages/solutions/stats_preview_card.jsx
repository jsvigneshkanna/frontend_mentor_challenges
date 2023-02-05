import Header from "../../components/Header";
import StatsPreviewCardComponent from "../../challenge_solutions/stats_preview_card_component";
import SolutionBanner from "../../components/SolutionBanner";

const StatsPreviewCard = () => {
  return (
    <div className="pb-12">
      <Header title="Stats preview card" />
      <SolutionBanner
        challengeName="Stats preview card"
        challengeUrl="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62"
      />
      <div className=" mt-8 md:mt-14 flex flex-col justify-center items-center w-full">
        <StatsPreviewCardComponent />
      </div>
    </div>
  );
};

export default StatsPreviewCard;
