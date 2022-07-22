/** @format */

import React from "react";
import hero from "../../assets/hero1.png";
const Index = () => {
  return (
    <section className="bg-lightBlue mt-5">
      <br />
      <div className="container mx-auto flex px-5   md:flex-row flex-col items-center">
        <div className="lg:flex-grow fkex-1  md:w-1/2  flex flex-col md:items-center  items-center text-center">
          <span className=" text-[3rem] font-thin text-lightwhit">
            Lets’s Get Started
          </span>
          <span className=" cushead title-font md:text-[6rem] text-[40px] mb-4 font-[700] text-purple">
            Create Token
          </span>

          <br />
        </div>
        <div className="lg:max-w-lg flex-1 lg:w-full md:w-full  ">
          <img
            className="object-cover object-center  w-[400px]"
            alt="hero"
            src={hero}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
