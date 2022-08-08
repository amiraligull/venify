/** @format */

import React from "react";
import Navbar from "../../Compnents/Navbar/Navbar";
import TrendingOne from "../../Compnents/TrendingOne/index";
import HeadSection from "../../Compnents/HeadSection/index";
import Footer from "../../Compnents/Footer/Footer";
import { intro } from "../../Compnents/LoadImages";

import LaunchpadForm from "../../Compnents/LaunchpadForm/LaunchpadForm";
import Newsletter from "../../Compnents/Newsletter/Newsletter";

import GetStarted from "../../Compnents/GetStarted/Start";
const Launchpad = () => {
  return (
    <div className="createtoken">
      <Navbar />
      <TrendingOne />
      <HeadSection
        text="Let’s Get Started!"
        heading="Create Pool"
        image={intro}
      />
      <GetStarted />
      <LaunchpadForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Launchpad;
