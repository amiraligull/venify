/** @format */

import React from "react";

const Button = ({ text, radius, width }) => {
  return (
    <div className="button">
      <button
        className={` text-white bg-blue border-0 py-2 px-6 focus:outline-none  text-center  rounded rounded-${radius} w-${width} text-md`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
