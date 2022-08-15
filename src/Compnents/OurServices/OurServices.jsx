/** @format */

import React from "react";
import { ser1, ser2, ser3, ser4 } from "../LoadImages";

const Services = [{ img: ser1 }, { img: ser3 }, { img: ser4 }, { img: ser2 }];
const OurServices = () => {
  return (
    <div className=" bg-slati text-center md:py-[10rem]  pt-[8rem]  mt-[-10rem]  md:h-[95vh] ">
      <span className="text-[48px] text-white font-bold  mt-[5rem]">
        Our Services
      </span>
      <br />
      <br />

      <div
        className="   py-4 mx-auto mb-20 "
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="flex flex-wrap md:flex-row flex-col gap-3  items-center justify-center w-full  m-auto">
          {Services.map((service) => {
            return (
              <img
                src={service.img}
                alt={service.img}
                className="w-[18rem] h-[20rem] rounded-[30px] shadow-2xl object-fit "
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
