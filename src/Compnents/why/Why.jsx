/** @format */

import React from "react";
import why from "../../assets/why.png";

const Why = () => {
  return (
    <div className="Why">
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
            {/* <h1 className="title-font sm:text-4xl text-[48px] mb-4 font-medium text-purple">
              Why you need
              <br className="hidden lg:inline-block" />
              To Choos Venify
            </h1> */}
            <p className="mb-8 leading-relaxed text-[24px] font-thin	 text-purple">
            We rise above the competition with modernized and customizable smart contracts, tighter anti-scam measures, and the integration of the Pitch marketing agency into our platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
