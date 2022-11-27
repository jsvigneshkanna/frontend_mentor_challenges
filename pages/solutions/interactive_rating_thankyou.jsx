import InteractiveRatingThankyou from "../../challenge_solutions/interactive_rating_thankyou";
import Header from "../../components/Header";
import SolutionBanner from "../../components/SolutionBanner";

const interactive_rating = () => {
  return (
    <div className="pb-12">
      <Header title="Interactive Rating Component Thank you" />
      <SolutionBanner
        challengeName="Interactive Rating Component Thank you"
        challengeUrl="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
      />
      <div className=" mt-8 md:mt-14 flex flex-col justify-center items-center w-full">
        <InteractiveRatingThankyou />
      </div>
    </div>
  );
};

export default interactive_rating;
