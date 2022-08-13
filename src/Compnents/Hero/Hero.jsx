/** @format */

import React from "react";
import intro from "../../assets/hero2.png";
import Typography from "../Typeography/Typography";
import Button from "../Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { themeChange } from "theme-change";

AOS.init({ duration: 200 });

const Hero = () => {
  // useEffect(() => {
  //   themeChange(false);
  //   console.log(themeChange);
  //   // 👆 false parameter is required for react project
  // }, []);
  return (
    <div
      id="hero herobg"
      className="bg-center bg-cover bg-no-repeat "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto flex px-5 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow  md:w-1/2 gap-5  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb- md:mb-0 items-center text-center">
          <h1 className=" custhead md:text-[3rem] text-[1.5rem] mb-4 font-thin text-purple  textindark ">
            Venify is the most secure way for you to launch, invest and audit
            any blockchain project.
          </h1>
          {/* <Typography
            text=" "
            size="3rem"
            weight="thin"
            color="purple"
            custhead="custhead"
          /> */}

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
              width="10rem"
              radius="20px"
            />
          </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-fit floatinghero" alt="hero" src={intro} />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* <div
        className="container herobg bg-center bg-cover bg-no-repeat flex    
      items-center mb-20 mt-10 px-[2rem] md:px-[4rem] md:mt-10  
      mx-auto flex-col-reverse md:flex-row"
      >
        
        <div className="flex flex-col  gap-5   mt-5 ">
          <span className="heroHeading custhead ">
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
              width="10rem"
              radius="20px"
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
      </div> */}
    </div>
  );
};

export default Hero;
