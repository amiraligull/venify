/** @format */

import React from "react";
import "./Effective.css";
import box from "../../assets/box.png";
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
          <p className="mb-8 leading-relaxed text-[16px] font-thin text-gray">
            Buy and sell 100+ cryptocurrencies with 20+ fiat currencies using
            bank transfers or your credit/debit card. Enjoy up to 8% back on all
            spending with your sleek, pure metal card.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Start Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effective;
