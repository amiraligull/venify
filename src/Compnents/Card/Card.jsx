/** @format */

import React from "react";
// import img from "../../assets/1.png";
import { t1 } from "../LoadImages";
import circle from "../../assets/circle.png";
import PresaleOptions from "../PresaleOptions/PresaleOptions";
import warning from "../../assets/warning.png";
import CircleProgressbar from "../CircleProgressbar/CircleProgressbar";
import Typography from "../Typeography/Typography";
import Caps from "../Caps/Caps";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="maincard">
      <div className="Cardbg herobggif  cardrounds ">
        <div className="cardtop">
          <div className="card-left ">
            <Typography
              text="Khao Manee"
              size="28px"
              weight="bold"
              color="purple"
            />
            <div className="cardoptions ">
              <PresaleOptions image={circle} text="Sale Live" />
              <PresaleOptions image={warning} text="No Audit" />
            </div>
          </div>
          <div className="right ">
            <img src={t1} alt={t1} className="scale-105" />
          </div>
        </div>
        <div className="card-circle">
          <CircleProgressbar
            percentage="70"
            color="green"
            size="12rem"
            textsize="[3rem]"
            height="[195px]"
            width="[195px]"
          />
          <Typography
            text="Sales End In"
            size="2rem"
            weight="bold"
            color="purple"
            custhead="custhead"
          />
          <Typography text="0:03:04:39" size="20px" weight="" color="blue" />
        </div>
        <div className="text-center ">
          <div className="cardsoftcap  ">
            <Caps text="Soft Cap" heading="150.0 BNB" />
            <Caps text="Hard Cap" heading="300.0 BNB" />
            <Caps text="Liquidity %" heading="75%" />
            <Caps text="Lockup Time" heading="3650 days" />
          </div>
          <Link to="Viewpool">
            <Button text="View Pool" weight="medium" width="full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
