import React from "react";
import qrCodeImage from "../images/qrcode_image.png";
import Image from "next/image";

const QrcodeComponent = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl text-black shadow-sm shadow-gray-400 dark:shadow-slate-600 p-4 w-[270px] md:w-[320px]">
      <Image
        src={qrCodeImage}
        alt="productImage"
        width={240}
        className="w-full h-52 md:h-full object-cover rounded-xl"
      />
      <h3 className=" font-extrabold text-center text-lg mt-6 text-gray-800 dark:text-white">
        Improve your front-end skills by building projects
      </h3>
      <p className="font-medium text-sm text-gray-400 dark:text-gray-500 text-center mt-4 mb-6">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  );
};

export default QrcodeComponent;
