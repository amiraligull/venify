/** @format */

import React from "react";

const PresaleOptions = ({ image, text }) => {
  return (
    <div className="option flex  border w-[7rem] p-2 rounded-full bg-dark ">
      <img src={image} alt={image} className="object-contain scale-50" />
      <span className="text-white text-[14px] ml-1">{text}</span>
    </div>
  );
};

export default PresaleOptions;
