/** @format */

import React from "react";

const Svg = ({ dimention }) => {
  return (
    <div>
      <svg
        className="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={dimention}
        />
      </svg>
    </div>
  );
};

export default Svg;
