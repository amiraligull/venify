/** @format */

import React from "react";

const TimeBox = ({ delay, digit }) => {
  return (
    <div className="timer   bg-lightBlue p-1 w-[5rem] flex flex-col items-center justify-center rounded-[20px]">
      <p className="text-[16px] font-thin">{digit}</p>
      <p className="text-[16px] ">{delay}</p>
    </div>
  );
};

export default TimeBox;
