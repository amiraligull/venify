/** @format */

import React from "react";
import "./Effective.css";
import box from "../../assets/box.png";
import Button from "../Button/Button";
const Effective = () => {
  return (
    <section className="effective bg-cover">
      <br />
      <div className="container mx-auto flex px-5 py-5  md:flex-row flex-col items-center">
        <div className="lg:max-w-lg flex-4 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={box}
          />
        </div>
        <div className="lg:flex-grow fkex-1 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className=" cushead title-font sm:text-4xl text-[40px] mb-4 font-[700] text-purple">
            Simple, Effective and
            <br />
            Convenient.
          </h1>
          <div className="flex justify-center">
            <Button text="Start Now!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effective;
