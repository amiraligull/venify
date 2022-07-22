/** @format */

import React from "react";
import Navbar from "../../Compnents/Navbar/Navbar";
import TrendingOne from "../../Compnents/TrendingOne/index";
import HeadSection from "../../Compnents/HeadSection/index";
import Footer from "../../Compnents/Footer/Footer";
import heroimg from "../../assets/hero1.png";
import LaunchpadForm from "../../Compnents/LaunchpadForm/LaunchpadForm";
import Newsletter from "../../Compnents/Newsletter/Newsletter";

import GetStarted from "../../Compnents/GetStarted/Start";
const Launchpad = () => {
  return (
    <div className="createtoken">
      <Navbar />
      <TrendingOne />
      <HeadSection
        text="Lets’s Get Started"
        heading="Create Pool"
        image={heroimg}
      />
      <GetStarted />
      <LaunchpadForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Launchpad;
