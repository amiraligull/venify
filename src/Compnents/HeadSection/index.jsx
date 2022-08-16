/** @format */
import React from "react";
const Index = ({ text, heading, image }) => {
  return (
    <div
      className="parent"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <section className="headersection  partner">
        <br />
        <div className="hs-flexcontainer">
          <div className="hs-left">
            <span className="hs-text">{text}</span>
            <span className=" hs-title">{heading}</span>
          </div>
          <div className="hs-right">
            <img className="hs-image" alt={image} src={image} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
