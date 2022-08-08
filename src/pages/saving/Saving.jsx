/** @format */

import React from "react";
import Navbar from "../../Compnents/Navbar/Navbar";
import TrendingOne from "../../Compnents/TrendingOne/index";
import HeadSection from "../../Compnents/HeadSection/index";
import Footer from "../../Compnents/Footer/Footer";
import heroimg from "../../assets/hero2.png";
import LoackingFormBox from "../../Compnents/LoackingFormBox/LoackingFormBox";
import Newsletter from "../../Compnents/Newsletter/Newsletter";
export default function Saving() {
  return (
    <div className="saving">
      <Navbar />
      <TrendingOne />
      <HeadSection
        text="Let’s Get Started!"
        heading="Create V-Lock"
        image={heroimg}
      />
      <br /> <br />
      <LoackingFormBox />
      <Newsletter />
      <Footer />
    </div>
  );
}
