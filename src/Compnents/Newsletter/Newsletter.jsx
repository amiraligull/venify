/** @format */

import React from "react";
import { Newsimg } from "../LoadImages";
import Typography from "../Typeography/Typography";
const Effective = () => {
  return (
    <section className="newsletterbg">
      <br />
      <div
        className="news-container"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="news-flexcontainer">
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

          <div className=" news-leftbox">
            <div className="effect-input">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="Enter Your Email"
                className="w-full bg-opacity-50 border-none  rounded-full focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              />
            </div>
            <button className="subscribeBtn">Subscribe</button>
          </div>
          <br />
        </div>
        <div className="news-rightbox ">
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
