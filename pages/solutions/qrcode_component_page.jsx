import Header from "../../components/Header";
import SolutionBanner from "../../components/SolutionBanner";
import qrcode_component from "../../challenge_solutions/qrcode_component";

const qrcode_component_page = () => {
  return (
    <div className="pb-12">
      <Header title="QR code component" />
      <SolutionBanner
        challengeName="QR code component"
        challengeUrl="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
      />
      <div className=" mt-8 md:mt-14 flex flex-col justify-center items-center w-full">
        <qrcode_component />
      </div>
    </div>
  );
};

export default qrcode_component_page;
