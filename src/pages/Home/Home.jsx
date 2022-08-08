/** @format */

import React from "react";
import Navbar from "../../Compnents/Navbar/Navbar";
import Hero from "../../Compnents/Hero/Hero";
import Trending from "../../Compnents/TopTrending/Trending";
import Why from "../../Compnents/why/Why";
import Features from "../../Compnents/Features/Features";
import Partner from "../../Compnents/Partners/Partner";
import Start from "../../Compnents/GetStarted/Start";
import Effective from "../../Compnents/Effective/Effective";
import Newsletter from "../../Compnents/Newsletter/Newsletter";
import Footer from "../../Compnents/Footer/Footer";
import TrendingOne from "../../Compnents/TrendingOne/index";
import OurServices from "../../Compnents/OurServices/OurServices";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <TrendingOne />
      <Hero />
      <Why />
      <Features />
      <Trending />
      <OurServices />
      <Partner />
      <Start />
      <Effective />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
