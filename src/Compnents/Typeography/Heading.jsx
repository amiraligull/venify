/** @format */

import React from "react";

const Heading = ({ heading, color, custhead }) => {
  return (
    <div>
      <span
        className={`${custhead}  text-[3rem] font-thin textindark  text-${color} `}
      >
        {heading}
      </span>
    </div>
  );
};

export default Heading;
