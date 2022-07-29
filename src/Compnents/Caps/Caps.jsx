/** @format */

import React from "react";
import Typography from "../Typeography/Typography";
const Caps = ({ text, heading }) => {
  return (
    <div className="caps flex flex-col justify-center items-center  w-1/2">
      <Typography text={text} color="black" size="16px" weight="normal" />
      <Typography text={heading} color="purple" size="20px" weight="bold" />
    </div>
  );
};

export default Caps;
