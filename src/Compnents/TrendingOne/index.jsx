/** @format */

import React from "react";
import Marquee from "react-fast-marquee";
import { trending2 } from "../LoadImages";
import { Link } from "react-router-dom";
import { transparent } from "daisyui/src/colors";
const Index = () => {
  const toptokens = [
    {
      id: "#1",
      name: "HALO",
    },
    {
      id: "#2",
      name: "HALO",
    },
    {
      id: "#3",
      name: "HALO",
    },
    {
      id: "#4",
      name: "HALO",
    },
    {
      id: "#5",
      name: "HALO",
    },
    {
      id: "#6",
      name: "HALO",
    },
    {
      id: "#7",
      name: "HALO",
    },
    {
      id: "#8",
      name: "HALO",
    },
  ];
  return (
    <div className="topUpTrending ">
      <span className="py-5 md:py-0 ">
        <img src={trending2} alt={trending2} />
      </span>
      <div className="trending  flex-1">
        <Marquee gradientColor={transparent} speed={70} className=" w-full">
          {toptokens.map((token, key) => {
            return (
              <Link to="#" key={key}>
                <span className="ml-5">
                  <span className="text-dark font-medium">{token.id} </span>
                  <span className="text-blue font-medium">{token.name}</span>
                </span>
              </Link>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Index;
