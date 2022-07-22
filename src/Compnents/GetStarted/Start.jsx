/** @format */

import React from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import { Link } from "react-router-dom";

import "./Start.css";
const Start = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="custhead sm:text-3xl text-[52px] font-[600] title-font text-purple mb-4">
            Venify keeps things simple
          </h1>
          <p className="text-[20px] text-purple font-thin leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ">
            The most complete suite of tools to create your project from the
            ground up with or without experience.
          </p>
        </div>
        <div className="flex flex-wrap  flex-col md:flex-row    sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-50 h-50 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={icon1} alt={icon1} />
            </div>
            <div className="flex-grow">
              <h2 className="custhead text-[1.5rem] font-bold  text-purple text-lg  mb-3">
                <Link to="#">Connect wallet</Link>
              </h2>
              {/* <p className="leading-relaxed text-[20px] font-thin text-purple">
                Sign up in website
              </p> */}
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-50 h-50 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={icon2} alt={icon2} />
            </div>
            <div className="flex-grow">
              <h2 className="custhead text-[1.5rem] font-bold  text-purple text-lg  mb-3">
                <Link to="#"> Create Token</Link>
              </h2>
              {/* <p className="leading-relaxed text-[20px] font-thin text-purple">
                Verify your identity with one <br /> of our trusted verification
                partners
              </p> */}
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-50 h-50inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={icon3} alt={icon3} />
            </div>
            <div className="flex-grow">
              <h2 className="custhead text-[1.5rem] font-bold  text-purple text-lg  mb-3">
                <Link to="#">Launch</Link>
              </h2>
              {/* <p className="leading-relaxed text-[20px] font-thin text-purple">
                Buy, sell and swap <br /> digital assets 24/7
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
