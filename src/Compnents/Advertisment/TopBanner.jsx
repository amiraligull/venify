/** @format */

import React from "react";
import topbanner from "../../assets/topbanner.gif";
const TopBanner = () => {
  return (
    <div className="Ad-TopBanner ">
      <img
        src={topbanner}
        alt={topbanner}
        className="object-contain rounded shadow-lg"
      />
    </div>
  );
};

export default TopBanner;
