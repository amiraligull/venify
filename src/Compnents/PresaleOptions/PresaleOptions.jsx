/** @format */

import React from "react";

const PresaleOptions = ({ image, text }) => {
  return (
    <div className="presalmenu">
      <img src={image} alt={image} className="object-contain scale-50" />
      <span className=" text-[14px] ml-1 textindark ">{text}</span>
    </div>
  );
};

export default PresaleOptions;
