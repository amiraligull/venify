/** @format */

import React from "react";
import part1 from "../../assets/p.png";
import part2 from "../../assets/p2.png";
import part3 from "../../assets/p3.png";
import part4 from "../../assets/p4.png";

const Partner = () => {
  return (
    <div className="partner bg-cover">
      <div className="container px-5 py-24 mx-auto">
        <div className=" flex flex-col text-center">
          <span className="custhead text-[28px] font-[600] text-black">
            Some of our trusted partners
          </span>
          <span className="text-[20px] font-thin	 text-purple">
            We're partners with countless major organisations around the globe
          </span>
        </div>
        <div className="flex flex-wrap m-4 items-center justify-center text-center">
          <img src={part1} alt={part1} />
          <img src={part2} alt={part1} />
          <img src={part3} alt={part1} />
          <img src={part4} alt={part4} />
        </div>
      </div>
    </div>
  );
};

export default Partner;
