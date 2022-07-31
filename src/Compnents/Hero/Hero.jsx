/** @format */

import React from "react";
import intro from "../../assets/hero1.png";
import Typography from "../Typeography/Typography";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div id="hero herobg">
      <div className="container herobg bg-center bg-cover bg-no-repeat flex    items-center mb-20 mt-10 px-[2rem] md:px-[4rem] md:mt-10  mx-auto flex-col-reverse md:flex-row">
        {/* left */}
        <div className="flex flex-col  gap-5   mt-5 ">
          <span
            className=" 
               text-[30px]      
            md:text-[60px]  font-bold text-purple"
            id="introheading"
          >
            The Most Secure way to Launch, Invest, and Audit Blockchain Projects
          </span>
          <Typography
            text="Venify aims to be the premier IDO Launchpad for cryptocurrency
            startups across all major blockchains."
            size="24px"
            weight="thin"
            color="purple"
          />
          <Button
            text="About Us"
            weight="medium"
            width="[10rem]"
            radius="[20px]"
          />
        </div>
        <div className="flex  items-center justify-center">
          <img
            src={intro}
            alt={intro}
            className="w-[100rem] md:w-[100rem] mt-[-5rem] md:ml-[2rem] relative"
          />
        </div>
      </div>
      {/* <div className=" blue1  bg-blue shadow-2xl  hidden md:flex"></div>
      <div className=" blue2  bg-purple shadow-2xl  hidden md:flex"></div>
      <div className=" blue3  bg-orange shadow-2xl  hidden md:flex"></div>
      <div className=" blue4  bg-blue shadow-2xl  hidden md:flex"></div> */}
    </div>
  );
};

export default Hero;
