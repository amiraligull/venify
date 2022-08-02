/** @format */

import React from "react";
import Typography from "../Typeography/Typography";
export default function FeaturesBox({ image, title, text }) {
  return (
    <div className="flex flex-col mb-10 lg:items-start items-center">
      <div className="flex-grow">
        <span className="flex  items-center mb-3">
          <img src={image} alt={image} className="mr-2" />
          <Typography
            text={title}
            color="purple"
            size="24px"
            custhead="custhead"
          />
        </span>
        <Typography text={text} color="purple" size="20px" weight="thin" />
      </div>
    </div>
  );
}
