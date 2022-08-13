/** @format */

import React from "react";

const Typography = ({ weight, text, size, color, custhead }) => {
  return (
    <div className="textstyle">
      <span
        className={`${custhead} text-[${size}] font-${weight} textindark  text-${color} `}
      >
        {text}
      </span>
    </div>
  );
};

export default Typography;
