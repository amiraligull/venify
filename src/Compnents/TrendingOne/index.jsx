/** @format */

import React from "react";
import Marquee from "react-fast-marquee";
import trending2 from "../../assets/trending2.png";
import { Link } from "react-router-dom";

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
    <div className="top container  overflow-hidden  flex  items-center  rounded   mx-auto flex-col-reverse md:flex-row bg-lightBlue p-2">
      <span className="py-5 md:py-0 ">
        <img src={trending2} alt={trending2} />
      </span>
      <div className="trending  flex-1">
        <Marquee gradientColor={[235, 245, 255]} speed={70} className=" w-full">
          {toptokens.map((token, key) => {
            return (
              <Link to="#" key={key}>
                <span className="ml-5 font-thin text-[16px]">
                  {token.id} {token.name}
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
