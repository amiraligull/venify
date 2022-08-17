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
            size="30px"
            weight="medium"
            custhead="custhead"
            color="purple"
          />
          <div>
            <Typography
              text="Subscribe and receive notifications on tips, new products and
            exclusive news just for you."
              size="14px"
              weight="thin"
            />
          </div>

          <br />

          <div className=" news-leftbox">
            <div className="effect-input">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="Enter Your Email"
                className="leftpool-input"
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
