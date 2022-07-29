/** @format */

import React from "react";
import "./Newsletter.css";
import Newsimg from "../../assets/footer.png";
const Effective = () => {
  return (
    <section className="newsletter bg-cover">
      <br />
      <div className="container mx-auto flex px-5 py-5  md:flex-row flex-col items-center">
        <div className="lg:flex-grow fkex-1  md:w-1/2  flex flex-col md:items-center  items-center text-center">
          <h1 className=" cushead title-font md:text-[48px] text-[40px] mb-4 font-[700] text-purple">
            Subscribe to our newsletter
          </h1>
          <p className="mb-8 leading-relaxed text-[16px] font-thin text-gray">
            Get notification about tips, new product and exclusive promo news
            just for you.
          </p>

          <div className=" custborder flex w-auto md:justify-center justify-center items-center rounded-full p-1  overflow-hidden ">
            <div className="relative mr-1 lg:w-full xl:w-[100%] w-[100%]">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-opacity-50 border-none  rounded-full focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              />
            </div>
            <button className="inline-flex text-white text-[16px] font-thin bg-blue border-0 py-2 px-6 focus:outline-none  rounded-full text-lg">
              Subscribe
            </button>
          </div>
          <br />
        </div>
        <div className="lg:max-w-lg flex-4 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Newsimg}
          />
        </div>
      </div>
    </section>
  );
};

export default Effective;
