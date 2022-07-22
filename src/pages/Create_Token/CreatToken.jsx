/** @format */

import React from "react";
import Navbar from "../../Compnents/Navbar/Navbar";
import TrendingOne from "../../Compnents/TrendingOne/index";
import HeadSection from "../../Compnents/HeadSection/index";
import Footer from "../../Compnents/Footer/Footer";
import heroimg from "../../assets/hero1.png";
import GetSatarted from "../../Compnents/GetStarted/Start";
import Newsletter from "../../Compnents/Newsletter/Newsletter";
import FromBox from "../../Compnents/FromBox/FromBox";
const CreatToken = () => {
  return (
    <div className="createtoken">
      <Navbar />
      <TrendingOne />
      <HeadSection
        text="Lets’s Get Started"
        heading="Create Token"
        image={heroimg}
      />
      <GetSatarted />
      <FromBox />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CreatToken;
