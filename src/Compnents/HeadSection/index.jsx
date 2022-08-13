/** @format */

import React from "react";
const Index = ({ text, heading, image }) => {
  return (
    <div
      className="parent"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <section className="bg-lightBlue  mt-5">
        <br />
        <div className="container mx-auto flex px-5   md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow fkex-1  md:w-1/2  flex flex-col md:items-center  items-center text-center">
            <span className=" text-[3rem] font-thin text-lightwhit">
              {text}
            </span>
            <span className=" cushead title-font md:text-[6rem] text-[40px] mb-4 font-[700] text-purple">
              {heading}
            </span>
          </div>
          <div className="lg:max-w-lg flex-1 lg:w-full md:w-full  ">
            <img
              className=" floatinghero object-cover object-center  w-[100%]"
              alt={image}
              src={image}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
