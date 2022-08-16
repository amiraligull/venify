/** @format */

import React from "react";
import { why } from "../LoadImages";
import Typography from "../Typeography/Typography";

const Why = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="why"
    >
      <div className="w-Container">
        <div className="w-imgBox">
          <img className="img" alt="hero" src={why} />
        </div>
        <div className="w-TextBox">
          <Typography
            size="xl"
            weight="thin"
            color="purple"
            text="We aim to rise abogue our competition by making modernized and customizable smart contracts. We’ll offer tighter anti-scam measures, and integration of the Pitch marketing agency will be part of our platform."
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
