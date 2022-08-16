/** @format */
import React from "react";
import { part1, part2, part3, part4 } from "../LoadImages";
import Typography from "../Typeography/Typography";

const Partner = () => {
  const images = [
    { image: part1 },
    { image: part2 },
    { image: part4 },
    { image: part3 },
  ];
  return (
    <div
      className="partner  partnershadow"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="p-container">
        <div className="p-textbox">
          <Typography
            text="Some of our trusted partners"
            weight="medium"
            color="black"
            size="30px"
            custhead="custhead"
          />
          <Typography
            text=" We are partners with countless, major organizations around the
            block. These are some of them."
            weight="thin"
            color="purple"
            size="20px"
          />
        </div>
        <div className="p-imagesbox">
          {images.map((img, key) => {
            return (
              <img
                src={img.image}
                key={key}
                alt={img.image}
                className="partnerDark "
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partner;
