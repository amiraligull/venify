/** @format */

import React from "react";
import { why } from "../LoadImages";
import Typography from "../Typeography/Typography";
const Why = () => {
  return (
    <div
      className="Why herobg bg-no-repeat bg-center bg-contain "
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={why}
            />
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Typography
              size="20px"
              weight="thin"
              color="purple"
              text=" We aim to rise abogue our competition by making modernized and customizable smart contracts. We’ll offer tighter anti-scam measures, and integration of the Pitch marketing agency will be part of our platform."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
