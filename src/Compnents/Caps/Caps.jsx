/** @format */

import React from "react";
import Typography from "../Typeography/Typography";
const Caps = ({ text, heading }) => {
  return (
    <div className="caps flex flex-col justify-center items-center  w-1/2">
      <Typography text={text} color="black" size="1.5rem" weight="thin" />
      <Typography text={heading} color="purple" size="2rem" weight="bold" />
    </div>
  );
};

export default Caps;
