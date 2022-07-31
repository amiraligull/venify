/** @format */

import React from "react";

const Button = ({ text, radius, width, textsize, weight }) => {
  return (
    <div className="button">
      <button
        className={` text-white shadow-xl bg-blue border-0
         py-3 px-6 focus:outline-none  text-center
         font-thin
         text-${textsize}
          rounded rounded-${radius} font-${weight} w-${width} text-md`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
