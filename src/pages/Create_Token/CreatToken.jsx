/** @format */

import React from "react";
import Navbar from "../../Compnents/Navbar/Navbar";
import TrendingOne from "../../Compnents/TrendingOne/index";
import HeadSection from "../../Compnents/HeadSection/index";
import Footer from "../../Compnents/Footer/Footer";
import { intro } from "../../Compnents/LoadImages";
import GetSatarted from "../../Compnents/GetStarted/Start";
import Newsletter from "../../Compnents/Newsletter/Newsletter";
import TokenCreatBoxForm from "../../Compnents/TokenCreatBoxForm/TokenCreatBoxForm";
const CreatToken = () => {
  return (
    <div className="createtoken">
      <Navbar />
      <TrendingOne />
      <HeadSection
        text="Let’s Get Started!"
        heading="Create Token"
        image={intro}
      />
      <GetSatarted />
      <TokenCreatBoxForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CreatToken;
