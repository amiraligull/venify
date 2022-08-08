/** @format */

import React from "react";
import Navbar from "../../Compnents/Navbar/Navbar";
import TrendingOne from "../../Compnents/TrendingOne/index";
import Footer from "../../Compnents/Footer/Footer";
import Newsletter from "../../Compnents/Newsletter/Newsletter";
import Typography from "../../Compnents/Typeography/Typography";
import TimeBox from "../../Compnents/TimeBox/TimeBox";
import TokenBox from "../../Compnents/TokenBox/TokenBox";

import PoolDetaibox from "../../Compnents/PoolDetaibox/PoolDetaibox";
import Button from "../../Compnents/Button/Button";
import CircleProgressbar from "../../Compnents/CircleProgressbar/CircleProgressbar";
import Caps from "../../Compnents/Caps/Caps";
// import Graph from "../Graph/Graph";
const PoolDetails = () => {
  const toptokens = [
    {
      id: "#1",
      title1: "Presale Address",
      title2: "0x4f3a17aA8768AC656027780E3e3E56B38515dd4B",
    },
    {
      id: "#2",
      title1: "Token Name",
      title2: "Khao Manee",
    },
    {
      id: "#3",
      title1: "Token Symbol",
      title2: "Khao Manee",
    },
    {
      id: "#4",
      title1: "Decimal",
      title2: "0x4f3a17aA8768AC656027780E3e3E56B38515dd4B",
    },
    {
      id: "#5",
      title1: "Token Address",
      title2: "0x4f3a17aA8768AC656027780E3e3E56B38515dd4B",
    },
    {
      id: "#6",
      title1: "Presale Address",
      title2: "0x4f3a17aA8768AC656027780E3e3E56B38515dd4B",
    },
  ];

  const salesinfo = [
    {
      id: "#1",
      title1: "Status",
      title2: "In Progress",
    },
    {
      id: "#2",
      title1: "In Progress",
      title2: "Public",
    },
    {
      id: "#3",
      title1: "Minimum buy",
      title2: "0.0001 BNB",
    },
    {
      id: "#4",
      title1: "Maximum buy",
      title2: "20.0 BNB",
    },
    {
      id: "#5",
      title1: "Total contributors",
      title2: "27",
    },
    {
      id: "#6",
      title1: "Your Contribution",
      title2: "0 BNB",
    },
  ];

  return (
    <div className="Details">
      <Navbar />
      <TrendingOne />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="sm:text-3xl text-2xl flex flex-col justify-center items-center text-gray-900 font-medium title-font mb-2 md:w-2/5">
            <div
              className="heading text-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <Typography
                text="Sales End In"
                size="24px"
                weight="bold"
                color="purple"
                custhead="custhead"
              />
              <div className="deadline flex gap-3 mb-5">
                <TimeBox digit="19" delay="day" />
                <TimeBox digit="16" delay="hours" />
                <TimeBox digit="14" delay="mins" />
                <TimeBox digit="55" delay="sec" />
              </div>

              <TokenBox
                title1=" Min:0.0001 BNB"
                size1="16px"
                size2="16px"
                title2="Max:20.0 BNB"
              />

              <div className="text-left mt-2">
                <Typography
                  text="Amount"
                  size="16px"
                  weight="bold"
                  color="purple"
                  custhead="custhead"
                />
                <Typography
                  text="1 BNB = 1,000,000 suppercoinMoon"
                  size="16px"
                  weight="thin"
                  color="purple"
                />
              </div>
              {/* button with input */}
              <div className=" custborder flex w-auto md:justify-center justify-center items-center rounded-full p-1  overflow-hidden  shadow-lg">
                <div className="relative mr-1 lg:w-full xl:w-[100%] w-[100%]">
                  <input
                    type="number"
                    id="hero-field"
                    name="hero-field"
                    placeholder="0"
                    className="w-full bg-opacity-50 border-none  rounded-full focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
                <button className="inline-flex text-white text-[16px] font-thin bg-blue border-0 py-2 px-6 focus:outline-none  rounded-full text-lg">
                  Maximum
                </button>
              </div>
              <br />
              {/* button with input */}

              <Button text="View Pool" weight="medium" textsize="[16px]" />
            </div>
          </div>
          {/* right area */}
          <div
            className="md:w-3/5 md:p-5   createTokenformbox bg-cover border-none rounded-[30px] shadow-xl"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <PoolDetaibox />
          </div>

          <div
            className="md:w-3/5  w-full p-2  md:p-5 mt-4 overflow-hidden"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {/* <Graph /> */}
            {toptokens.map((token, key) => {
              return (
                <TokenBox
                  title1={token.title1}
                  size1="20px"
                  size2="16px"
                  color1="purple"
                  color2="blue"
                  title2={token.title2}
                />
              );
            })}
          </div>
          <div
            className="sm:text-3xl md:px-10 text-2xl  mt-9 flex flex-col justify-center items-center  mb-2 md:w-2/5  "
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Typography
              text="Pool Ended"
              size="24px"
              weight="bold"
              color="purple"
              custhead="custhead"
            />
            <CircleProgressbar
              percentage="70"
              color="green"
              size="12rem"
              textsize="[3rem]"
              height="[195px]"
              width="[195px]"
            />
            <br />
            <Typography
              text="Sales End In"
              size="40px"
              weight="bold"
              color="purple"
              custhead="custhead"
            />

            <Typography text="0:03:04:39" size="36px" color="blue" />

            <div className="softcap flex flex-wrap gap-y-5 mb-10 ">
              <Caps text="Soft Cap" heading="150.0 BNB" />
              <Caps text="Hard Cap" heading="300.0 BNB" />
              <Caps text="Liquidity %" heading="75%" />
              <Caps text="Lockup Time" heading="3650 days" />
            </div>
            {/* <div className="flex flex-col"></div> */}
            {salesinfo.map((token, key) => {
              return (
                <TokenBox
                  title1={token.title1}
                  size1="16px"
                  size2="16px"
                  color1="purple"
                  color2="blue"
                  title2={token.title2}
                />
              );
            })}

            <Typography
              text="Token metrics"
              size="40px"
              weight="bold"
              color="purple"
              custhead="custhead"
            />

            <div className="states flex items-center justify-center gap-3">
              <div className="circl flex flex-col items-center justify-center">
                <CircleProgressbar
                  percentage="70"
                  bg="blue"
                  color="white"
                  borderColor="blue"
                  size="7rem"
                  textsize="[2rem]"
                  height="[100px]"
                  width="[100px]"
                />
                <span className="text-[16px]">Burnt</span>
              </div>

              <div className="circl flex flex-col items-center justify-center">
                <CircleProgressbar
                  percentage="100"
                  bg="blue"
                  color="white"
                  borderColor="blue"
                  size="7rem"
                  textsize="[2rem]"
                  height="[100px]"
                  width="[100px]"
                />
                <span className="text-[16px]">Unlocked</span>
              </div>

              <div className="circl flex flex-col items-center justify-center">
                <CircleProgressbar
                  percentage="20"
                  bg="blue"
                  color="white"
                  borderColor="blue"
                  size="7rem"
                  textsize="[2rem]"
                  height="[100px]"
                  width="[100px]"
                />
                <span className="text-[16px]">Presale</span>
              </div>
            </div>
            <div className="circl flex flex-col items-center justify-center">
              <CircleProgressbar
                percentage="60"
                bg="blue"
                color="white"
                borderColor="blue"
                size="7rem"
                textsize="[2rem]"
                height="[100px]"
                width="[100px]"
              />
              <span className="text-[16px]">Liquidity (%)</span>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default PoolDetails;
