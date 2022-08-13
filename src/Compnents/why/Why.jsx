/** @format */

import React from "react";
import { why } from "../LoadImages";
import TowColBox from "../TowColBox/TowColBox";
const Why = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="why"
    >
      <TowColBox
        type="why"
        Text="We aim to rise abogue our competition by making modernized and customizable smart contracts. We’ll offer tighter anti-scam measures, and integration of the Pitch marketing agency will be part of our platform."
        Image={why}
      />
    </div>
  );
};

export default Why;
