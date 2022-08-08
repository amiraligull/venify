/** @format */

import React from "react";
import intro from "../../assets/hero5.gif";
import Typography from "../Typeography/Typography";
import Button from "../Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init({ duration: 200 });

const Hero = () => {
  return (
    <div id="hero herobg" data-aos="fade-up" data-aos-duration="1000">
      <div
        className="container herobg bg-center bg-cover bg-no-repeat flex    
      items-center mb-20 mt-10 px-[2rem] md:px-[4rem] md:mt-10  
      mx-auto flex-col-reverse md:flex-row"
      >
        {/* left */}
        <div className="flex flex-col  gap-5   mt-5 ">
          <span
            className=" 
            custhead
               text-[30px]      
            md:text-[60px] leading-snug  font-bold text-purple"
          >
            Venify is the most secure way for you to launch, invest and audit
            any blockchain project.
          </span>
          <Typography
            text="Our platform aims to be the premier IDO Launchpad for any cryptocurrency startups throughout all of the major blockchains."
            size="20px"
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
              width="[10rem]"
              radius="[20px]"
            />
          </Link>
        </div>
        <div className="flex  items-center justify-center  ">
          <img
            src={intro}
            alt={intro}
            className=" hidden md:flex  w-[15rem] mt-[-5rem] md:w-[100rem] md:mt-[10px] md:ml-[2rem] relative"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
