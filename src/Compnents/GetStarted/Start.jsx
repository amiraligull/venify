/** @format */

import React from "react";
import { icon1, icon2, icon3 } from "../LoadImages";
import Typography from "../Typeography/Typography";
import Options from "./Options";
import "./Start.css";
const Start = () => {
  const options = [
    { img: icon1, title: "Connect wallet", url: "#" },
    { img: icon2, title: " Create Token", url: "CreateToken" },
    { img: icon3, title: "Launch", url: "Launchpad" },
  ];
  return (
    <section
      className="text-gray-600 body-font"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20 xl:w-2/4 lg:w-3/4 mx-auto">
          <h1 className="GradientText custhead sm:text-3xl text-[52px] font-[600] title-font  mb-4">
            Venify keeps things simple
          </h1>
          <Typography
            text=" We have the most complete set of tools for you to create your
            project, effortlessly, from the ground up with, or without any
            experience. "
            size="20px"
            color="purple"
            weight="thin"
          />
        </div>
        <div className="flex flex-wrap  flex-col md:flex-row    sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {options.map((option) => {
            return (
              <Options img={option.img} title={option.title} url={option.url} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Start;
