/** @format */
import React from "react";
import { icon1, icon2, icon3 } from "../LoadImages";
import Typography from "../Typeography/Typography";
import Options from "./Options";

const Start = () => {
  const options = [
    { img: icon1, title: "Connect wallet", url: "#" },
    { img: icon2, title: " Create Token", url: "CreateToken" },
    { img: icon3, title: "Launch", url: "Launchpad" },
  ];
  return (
    <div
      className="start-container"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="start-textbox">
        <h1 className="start-heading">Venify keeps things simple</h1>
        <Typography
          text=" We have the most complete set of tools for you to create your
            project, effortlessly, from the ground up with, or without any
            experience. "
          size="20px"
          color="purple"
          weight="thin"
        />
      </div>
      <div className="start-flexbox">
        {options.map((option, key) => {
          return (
            <Options
              key={key}
              img={option.img}
              title={option.title}
              url={option.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Start;
