/** @format */

import React from "react";

const Button = ({ text, radius, width, textsize, weight }) => {
  return (
    <div className="button">
      <button
        className={` btn
         text-[${textsize}]
           rounded-[${radius}] font-${weight} w-[${width}] text-md`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
