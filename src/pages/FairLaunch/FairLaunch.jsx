/** @format */

import React from "react";
import Navbar from "../../Compnents/Navbar/Navbar";
import TrendingOne from "../../Compnents/TrendingOne/index";
import HeadSection from "../../Compnents/HeadSection/index";
import Footer from "../../Compnents/Footer/Footer";
import heroimg from "../../assets/hero1.png";
import FairLaunchForm from "../../Compnents/FairLaunchForm/FairLaunchForm";
import Newsletter from "../../Compnents/Newsletter/Newsletter";
import GetStarted from "../../Compnents/GetStarted/Start";
const FairLaunch = () => {
  return (
    <div className="createtoken">
      <Navbar />
      <TrendingOne />
      <HeadSection
        text="Let’s Get Started!"
        heading="Create Fairlaunch"
        image={heroimg}
      />
      <GetStarted />
      <FairLaunchForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default FairLaunch;
