/** @format */
import React from "react";
import intro from "../../assets/hero2.png";
import Typography from "../Typeography/Typography";
import Button from "../Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init({ duration: 200 });
const Hero = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="H-Container">
        <div className="H-Wrap">
          <h1 className="  H-heading   ">
            Venify is the most secure way for you to launch, invest and audit
            any blockchain project.
          </h1>
          <Typography
            text="Our platform aims to be the premier IDO Launchpad for any cryptocurrency startups throughout all of the major blockchains."
            size="1.5rem"
            weight="thin"
            color="purple"
          />
          <Link
            to="#"
            onClick={() =>
              window.open(
                "https://venify.gitbook.io/welcome-to-venify/1I4f1mgT4zIUc2I1KAOp/"
              )
            }
          >
            <Button
              text="About Us"
              weight="medium"
              width="10rem"
              radius="20px"
            />
          </Link>
        </div>
        <div className="h-ImageBox">
          <img className="h-Image" alt="hero" src={intro} />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Hero;
