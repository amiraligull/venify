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
import { graph } from "../../Compnents/LoadImages";
import { PieChart } from "react-minimal-pie-chart";

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
  const data = [
    { title: "Liquadity 30 %", value: 30, color: "#0066FF" },
    { title: "Burnt 20%", value: 20, color: "#2128BD" },
    { title: "Unlocked 25%", value: 25, color: "#130F49" },
    { title: `Presale  25%`, value: 25, color: "#242A44" },
  ];
  return (
    <div className="poolDetails">
      <Navbar />
      <TrendingOne />
      <div className="pool-container">
        <div className="pool-left">
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
            <div className="deadline">
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

            <div className="pool-left-text ">
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
            <div className=" news-leftbox">
              <div className="effect-input">
                <input
                  type="number"
                  id="hero-field"
                  name="hero-field"
                  placeholder="0"
                  className="leftpool-input"
                />
              </div>
              <Button
                text="Maximum"
                weight="medium"
                textsize="[16px]"
                radius="30px"
              />
            </div>
            <br />
            {/* button with input */}
            <Button text="View Pool" weight="medium" textsize="[16px]" />
          </div>
        </div>
        {/* right area */}
        <div
          className="pool-rightbox createTokenformbox"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <PoolDetaibox />
        </div>
        <div
          className="poolbottomleft"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <img src={graph} alt={graph} className="pool-bottomimg" />
          {toptokens.map((token, key) => {
            return (
              <TokenBox
                key={key}
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
          className="pool-bottomright "
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
          <div className="cardsoftcap ">
            <Caps text="Soft Cap" heading="150.0 BNB" />
            <Caps text="Hard Cap" heading="300.0 BNB" />
            <Caps text="Liquidity %" heading="75%" />
            <Caps text="Lockup Time" heading="3650 days" />
          </div>
          {salesinfo.map((token, key) => {
            return (
              <TokenBox
                key={key}
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
          <div className=" pool-pie ">
            <PieChart
              data={data}
              label={({ dataEntry }) => dataEntry.title}
              radius={50}
              startAngle={180}
            />
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default PoolDetails;
