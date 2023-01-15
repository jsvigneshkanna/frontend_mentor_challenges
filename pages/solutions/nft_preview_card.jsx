import Header from "../../components/Header";
import SolutionBanner from "../../components/SolutionBanner";
import NftPreviewCard from "../../challenge_solutions/nft_preview_card_component";

const nft_preview_card = () => {
  return (
    <div className="pb-12">
      <Header title="QR code component" />
      <SolutionBanner
        challengeName="QR code component"
        challengeUrl="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
      />
      <div className=" mt-8 md:mt-14 flex flex-col justify-center items-center w-full">
        <NftPreviewCard />
      </div>
    </div>
  );
};

export default nft_preview_card;
