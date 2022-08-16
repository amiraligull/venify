/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { box, effective } from "../LoadImages";

const Effective = () => {
  return (
    <section className="effectiveshadow ">
      <br />
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="effect-container"
      >
        <div className="effect-image">
          <img className="lightImg" alt="hero" src={box} />
          <img className="darkImage" alt="hero" src={effective} />
        </div>
        <div className="effect-titlebox">
          <h1 className=" effect-title ">
            Simple, Effective and
            <br />
            Convenient.
          </h1>
          <div className="flex justify-center">
            <Link to="Launchpad">
              <Button text="Start Now!" width="[10rem]" weight="medium" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effective;
