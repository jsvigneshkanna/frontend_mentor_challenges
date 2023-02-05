import React from "react";
import Image from "next/image";
import HeaderBanner from "../images/stats preview card/header-banner.jpg";

const StatsPreviewCardComponent = () => {
  return (
    <div className=" text-white flex flex-row rounded-xl overflow-hidden">
      {/* Stats Contianer */}
      <div>
        <h1>Get insighes the help your business grow.</h1>
        <p>
          Discover the benifits of data analytics and make better decisions regarding revenue, customer experience, and
          overall efficiency.
        </p>
      </div>

      <Image src={HeaderBanner} alt="header banner"></Image>
    </div>
  );
};

export default StatsPreviewCardComponent;
