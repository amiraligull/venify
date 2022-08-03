/** @format */

import React from "react";
import { Newsimg } from "../LoadImages";
import Typography from "../Typeography/Typography";
const Effective = () => {
  return (
    <section className="newsletter bg-cover">
      <br />
      <div
        className="container mx-auto flex px-5 py-5  md:flex-row flex-col items-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="lg:flex-grow   md:w-1/2  flex flex-col md:items-center  items-center text-center">
          <Typography
            text="Subscribe to our newsletter"
            size="48px"
            weight="medium"
            custhead="custhead"
            color="purple"
          />
          <Typography
            text="Subscribe and receive notifications on tips, new products and
            exclusive news just for you."
            size="16px"
            weight="thin"
          />
          <br />

          <div className="  flex  bg-white2  shadow-lg w-auto md:justify-center justify-center items-center rounded-full p-1  overflow-hidden ">
            <div className="relative mr-1 lg:w-full xl:w-[100%] w-[100%]">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="Enter Your Email"
                className="w-full bg-opacity-50 border-none  rounded-full focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              />
            </div>
            <button className="inline-flex text-white text-[16px] font-medium bg-blue border-0 py-2 px-6 focus:outline-none  rounded-full text-lg">
              Subscribe
            </button>
          </div>
          <br />
        </div>
        <div className="lg:max-w-lg flex-4 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
          <img
            className="object-cover object-center "
            alt="hero"
            src={Newsimg}
          />
        </div>
      </div>
    </section>
  );
};

export default Effective;
