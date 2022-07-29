/** @format */

import React from "react";
import Navbar from "../../Compnents/Navbar/Navbar";
import TrendingOne from "../../Compnents/TrendingOne/index";
import HeadSection from "../../Compnents/HeadSection/index";
import Footer from "../../Compnents/Footer/Footer";
import heroimg from "../../assets/hero1.png";
import LoackingForm from "../../Compnents/LoackingForm/LoackingForm";
import Newsletter from "../../Compnents/Newsletter/Newsletter";
export default function Saving() {
  return (
    <div className="saving">
      <Navbar />
      <TrendingOne />
      <HeadSection
        text="Lets’s Get Started"
        heading="Create Vlock"
        image={heroimg}
      />
      <br /> <br />
      <LoackingForm />
      <Newsletter />
      <Footer />
    </div>
  );
}
