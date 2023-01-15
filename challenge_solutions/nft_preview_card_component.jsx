import Image from "next/image";
import EquilibriumImage from "../images/nft_preview/image-equilibrium.jpg";
import AvatarImage from "../images/nft_preview/image-avatar.png";

const NftPreviewCard = () => {
  return (
    <div
      className="w-[270px] md:w-[320px] bg-[#14253D] p-5 rounded-xl shadow-sm
   shadow-blue-500 dark:shadow-blue-900"
    >
      <Image
        src={EquilibriumImage}
        width={240}
        alt="equilibrium"
        className="w-full h-full object-cover rounded-xl"
      ></Image>

      {/* Title */}
      <h2 className="text-white font-bold text-lg mt-5 tracking-wide">Equilibrium #3429</h2>

      {/* Sub titile */}
      <p className="text-[#8BACDA] text-sm tracking-wider mt-3">
        Our Equilibrium collections promotes balance and calm.
      </p>

      {/* Value and days left */}
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="flex flex-row gap-1 items-center justify-start">
          {/* ethereum svg */}
          <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
              fill="#00FFF8"
            />
          </svg>
          <p className="text-[#00FFF7] font-semibold text-sm">0.041ETH</p>
        </div>

        <div className="flex flex-row gap-1 items-center justify-start">
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
              fill="#8BACD9"
            />
          </svg>
          <p className="text-[#00FFF7] font-semibold text-sm">3 days left</p>
        </div>
      </div>

      <div className="bg-[#2F415B] w-full h-[1px] mt-4"></div>

      {/* Owner details */}
      <div className="mt-4 flex flex-row gap-3 justify-start items-center">
        <Image src={AvatarImage} alt="avatar" className="w-8 h-8 border border-white rounded-full"></Image>
        <p className="text-sm text-[#8BACDA]">
          Creation of <span className="font-semibold text-white">Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};

export default NftPreviewCard;
