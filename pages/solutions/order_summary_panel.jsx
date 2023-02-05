import Header from "../../components/Header";
import SolutionBanner from "../../components/SolutionBanner";
import OrderSummaryComponent from "../../challenge_solutions/order_summary_component";

const interactive_rating = () => {
  return (
    <div className="pb-12">
      <Header title="Order summary component" />
      <SolutionBanner
        challengeName="Order summary component"
        challengeUrl="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
      />
      <div className=" mt-8 md:mt-14 flex flex-col justify-center items-center w-full">
        <OrderSummaryComponent />
      </div>
    </div>
  );
};

export default interactive_rating;
