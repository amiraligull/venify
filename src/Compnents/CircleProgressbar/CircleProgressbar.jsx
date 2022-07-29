/** @format */

import React from "react";

const CircleProgressbar = () => {
  // const style = { "--value": 70 };
  const style2 = { "--value": 70, "--size": "12rem", "--thickness": "1rem" };
  return (
    <div className="cicle mt-10">
      <div
        class="radial-progress text-green  text-[3rem] font-bold  h-[195px] w-[195px]"
        style={style2}
      >
        70%
      </div>

      {/* <div
            class="radial-progress text-green  text-[3rem] font-bold md:h-[15rem] md:w-[15rem] w-[10rem] h-[10rem] "
            style={style}
          >
            70%
          </div> */}
    </div>
  );
};

export default CircleProgressbar;
