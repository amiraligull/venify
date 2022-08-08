/** @format */

import React from "react";
import topbanner from "../../assets/topbanner.gif";
const TopBanner = () => {
  return (
    <div className="   md:flex  mx-auto banner text-center   h-[90px] md:w-[710px] w-[90%] md:mt-[-20px] mb-5">
      <img
        src={topbanner}
        alt={topbanner}
        className="object-contain rounded shadow-lg"
      />
    </div>
  );
};

export default TopBanner;
