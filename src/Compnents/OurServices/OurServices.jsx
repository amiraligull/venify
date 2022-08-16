/** @format */

import React from "react";
import { ser1, ser2, ser3, ser4 } from "../LoadImages";

const OurServices = () => {
  const Services = [{ img: ser1 }, { img: ser3 }, { img: ser4 }, { img: ser2 }];
  return (
    <div className="s-container">
      <span className="sr-heading">Our Services</span>
      <br />
      <br />

      <div
        className="sr-wrap"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="sr-imagesBox">
          {Services.map((service) => {
            return (
              <img src={service.img} alt={service.img} className="sr-images " />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
