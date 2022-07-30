/** @format */

import React from "react";

const TokenBox = ({ title1, title2, color1, size1, color2, size2 }) => {
  return (
    <div className="bg-lightBlue flex flex-row shadow-2lg mb-5 md:w-full  w-full rounded-[10px] overflow-hidden ">
      <span className={`flex-1 py-4 px-4   text-[${size1}]  text-${color1}`}>
        {title1}
      </span>
      <span
        className={`py-4 px-4 text-right flex-1 text-[${size2}]  text-${color2}`}
      >
        {title2}
      </span>
    </div>
  );
};

export default TokenBox;
