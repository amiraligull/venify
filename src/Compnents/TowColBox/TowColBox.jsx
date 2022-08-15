/** @format */

import React from "react";
import Typography from "../Typeography/Typography";
// import intro from "../../assets/hero2.png";
import Container from "../Layout/Container";
// import { Link } from "react-router-dom";
// import Button from "../Button/Button";
// import Heading from "../Typeography/Heading";

const TowColBox = ({ Image, Text }) => {
  return (
    <div>
      <Container>
        {/* Why Section  */}

        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
            <img className="img" alt="hero" src={Image} />
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Typography
              size="1.5rem"
              weight="thin"
              color="purple"
              text={Text}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TowColBox;
