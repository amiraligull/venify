/** @format */

import React from "react";
import Typography from "../Typeography/Typography";
import circle from "../../assets/circle.png";
import img from "../../assets/1.png";
import PresaleOptions from "../../Compnents/PresaleOptions/PresaleOptions";
import warning from "../../assets/warning.png";

const PoolDetaibox = () => {
  return (
    <div className="details">
      <div className=" flex md:flex-row  flex-col justify-center items-center ">
        <div className="left flex flex-1 items-center">
          <img src={img} alt={img} className="scale-75" />
          <Typography
            text="Khao Manee"
            size="28px"
            weight="bold"
            color="purple"
            custhead="custhead"
          />
        </div>
        <div className="right flex flex-1  gap-2 justify-center items-center">
          <PresaleOptions image={circle} text="Sale Live" />
          <PresaleOptions image={circle} text="Fair Launch" />
          <PresaleOptions image={warning} text="No Audit" />
        </div>
      </div>
      <div className="pl-5 md:py-0 py-5">
        <Typography
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          size="16px"
          weight="thin"
          color="black"
        />
      </div>
    </div>
  );
};

export default PoolDetaibox;
