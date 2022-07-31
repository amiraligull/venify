/** @format */

import React from "react";
import intro from "../../assets/hero1.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container flex   items-center mb-20 mt-10 px-[2rem] md:px-[4rem] md:mt-10  mx-auto flex-col-reverse md:flex-row">
        {/* left */}
        <div className="flex flex-col  gap-8   mt-5 ">
          <span
            className=" 
               text-[30px]      
            md:text-[60px]  font-bold text-purple"
            id="introheading"
          >
            <span className="">Th</span>e Most Secure way to Launch, Invest, and
            Audit Blockchain Projects
          </span>
          <span id="ptext" className="text-[24px]  font-thin	 text-purple">
            Venify aims to be the premier IDO Launchpad for cryptocurrency
            startups across all major blockchains.
          </span>

          <button className="  bg-blue text-white font-bold  p-4 w-[12rem] rounded-2xl   ">
            About Us
          </button>
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
