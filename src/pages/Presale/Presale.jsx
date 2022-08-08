/** @format */

import React from "react";
import Navbar from "../../Compnents/Navbar/Navbar";
import TrendingOne from "../../Compnents/TrendingOne/index";
import HeadSection from "../../Compnents/HeadSection/index";
import Footer from "../../Compnents/Footer/Footer";
import { intro } from "../../Compnents/LoadImages";
import Newsletter from "../../Compnents/Newsletter/Newsletter";
import Tabs from "../../Compnents/Tabs/Tabs";
// import BG from "../../assets/bg.png";
const Presale = () => {
  return (
    <div className="preslae">
      <Navbar />
      <TrendingOne />
      <HeadSection
        text="Let’s Get Started!"
        heading="Presale List"
        image={intro}
      />
      <Tabs title1="All Tokens" title2="My Contributions" />
      <Newsletter />
      <Footer />

      {/* <img src={BG} alt={BG} className="absolute top-[50rem] w-[80%]	-z-1" /> */}
    </div>
  );
};

export default Presale;
