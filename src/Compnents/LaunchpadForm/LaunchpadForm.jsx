/** @format */

import React from "react";
import Input from "../Input/Input";
import warning from "../../assets/warning.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Typography from "../Typeography/Typography";

const LaunchpadForm = () => {
  return (
    <section
      className="tcf-container"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="createTokenformbox herobggif  ">
        <div className="text-center">
          <h1 className="lpf-heading">Step 1</h1>
          <p className="lpf-subheading">Verify Your Token</p>
        </div>
        <div className="tcf-wrap">
          <div className="tcf-flexcontainer">
            <form action="#" className="tcf-form ">
              <Input
                label="Enter your token address and verify"
                type="text"
                placeholder="0x198a3e3cb0e3c761a03bdd4a8b382fc92e4b3945"
              />
              <div className="flex text-center">
                <div className="img">
                  <img src={warning} alt={warning} />
                </div>
                <Typography
                  text="Make sure the token has 'Exclude transfer fee' function if it
                  has transfer fees."
                  color="blue"
                />
              </div>
              <Button text="Submit" width="[10rem]" weight="medium" />
            </form>
          </div>
          <div className="tcf-imagbox">
            <div className="lpf-right">
              <Typography
                text=" Create a pool fee: 0.0001 BNB"
                color="purple"
                custhead="custhead"
              />
              <Link to="../CreateToken">
                <Button width="[10rem]" weight="medium" text="Create Token" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchpadForm;
