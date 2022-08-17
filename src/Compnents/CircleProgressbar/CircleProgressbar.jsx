/** @format */

import React from "react";

const CircleProgressbar = ({
  percentage,
  bg,
  color,
  borderColor,
  size,
  height,
  width,
  textsize,
}) => {
  // const style = { "--value": 70 };
  const style2 = {
    "--value": percentage,
    "--size": size,
    "--thickness": "1rem",
  };
  return (
    <div className="cicle mt-10">
      <div
        class={`radial-progress bg-${bg} text-${color}  border-${borderColor} text-${textsize} font-bold h-${height} w-${width} `}
        style={style2}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default CircleProgressbar;
