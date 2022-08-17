/** @format */

import React from "react";
import Typography from "../Typeography/Typography";
export default function FeaturesBox({ image, title, text }) {
  return (
    <div className="f-boxContainer">
      {/* <div className="flex-grow"> */}
      <div className="f-boxItems text-xl">
        <img src={image} alt={image} className="mr-2" />
        <Typography
          text={title}
          color="purple"
          size="30px"
          custhead="custhead"
          weight="bold"
        />
      </div>
      <Typography text={text} color="purple" size="1rem" weight="thin" />
    </div>
    // </div>
  );
}
