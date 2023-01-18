import Header from "../../components/Header";
import SolutionBanner from "../../components/SolutionBanner";
import ProfileCardComponent from "../../challenge_solutions/profile_card_component";

const ProfileCard = () => {
  return (
    <div className="pb-12">
      <Header title="Profile card component" />
      <SolutionBanner
        challengeName="Profile card component"
        challengeUrl="https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ/hub"
      />
      <div className=" mt-8 md:mt-14 flex flex-col justify-center items-center w-full">
        <ProfileCardComponent />
      </div>
    </div>
  );
};

export default ProfileCard;
