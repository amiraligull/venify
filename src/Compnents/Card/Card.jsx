/** @format */

import React from "react";
import img from "../../assets/1.png";
import circle from "../../assets/circle.png";
import PresaleOptions from "../PresaleOptions/PresaleOptions";
import warning from "../../assets/warning.png";
import CircleProgressbar from "../CircleProgressbar/CircleProgressbar";
import Typography from "../Typeography/Typography";
import Caps from "../Caps/Caps";
import Button from "../Button/Button";

const Card = () => {
  return (
    <div className="md:w-1/2 w-full mb-10     p-3">
      <div className="Cardbg  p-5  bg-cover py-5   border-none rounded-[30px] shadow-lg ">
        <div className="cardtop flex justify-center items-center  ">
          <div className="left flex-1 ">
            <Typography
              text="Khao Manee"
              size="28px"
              weight="bold"
              color="purple"
            />
            <div className="options   flex flex-row gap-2">
              <PresaleOptions image={circle} text="Sale Live" />
              <PresaleOptions image={warning} text="No Audit" />
            </div>
          </div>
          <div className="right ">
            <img src={img} alt={img} className="scale-105" />
          </div>
        </div>
        <div className="circle text-center flex flex-col gap-5">
          <CircleProgressbar />
          <Typography
            text="Sales End In"
            size="24px"
            weight="bold"
            color="purple"
          />
          <Typography text="0:03:04:39" size="20px" weight="" color="blue" />
        </div>
        <div className="bottom  text-center ">
          <div className="softcap flex flex-wrap gap-y-5 mb-10 ">
            <Caps text="Soft Cap" heading="150.0 BNB" />
            <Caps text="Hard Cap" heading="300.0 BNB" />
            <Caps text="Liquidity %" heading="75%" />
            <Caps text="Lockup Time" heading="3650 days" />
          </div>
          <Button text="View Pool" width="full" />
        </div>
      </div>
    </div>
  );
};

export default Card;
