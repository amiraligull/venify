/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { box, effective } from "../LoadImages";

const Effective = () => {
  return (
    <section
      className="effective  effectiveshadow "
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <br />
      <div className="container mx-auto flex px-5 py-5  md:flex-row flex-col items-center">
        <div className="lg:max-w-lg flex-4 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="lightImg" alt="hero" src={box} />
          <img className="darkImage" alt="hero" src={effective} />
        </div>
        <div className="lg:flex-grow fkex-1 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className=" cushead title-font sm:text-4xl text-[40px] mb-4 font-[700] textindark ">
            Simple, Effective and
            <br />
            Convenient.
          </h1>
          <div className="flex justify-center">
            <Link to="Launchpad">
              <Button text="Start Now!" width="[10rem]" weight="medium" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effective;
