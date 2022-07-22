/** @format */

import React from "react";
import Input from "../Input/Input";
import warning from "../../assets/warning.png";
const LaunchpadForm = () => {
  return (
    <section className=" px-10 ">
      <div className="bg-lightBlue p-10 rounded">
        <div className="text-center">
          <h1 className=" cushead title-font md:text-[48px] text-[40px] mb-4 font-[700] text-purple">
            Step 1
          </h1>
          <p className="custhead mb-8 leading-relaxed text-[30px] font-medium text-blue">
            Verify Your Token
          </p>
        </div>
        <div className="container mx-auto flex px-5 py-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow fkex-1  md:w-1/2  flex flex-col md:items-center  items-center text-center">
            <form action="#" className="flex flex-col  gap-10 text-left">
              <Input
                label="Enter your token address and verify"
                type="text"
                placeholder="0x198a3e3cb0e3c761a03bdd4a8b382fc92e4b3945"
              />
              <div className="flex text-center">
                <div className="img">
                  <img src={warning} alt={warning} />
                </div>
                <span className="text-blue">
                  Make sure the token has 'Exclude transfer fee' function if it{" "}
                  has transfer fees.
                </span>
              </div>

              <button className="bg-blue text-[white] text-[16px] font-thin p-2 rounded w-[10rem]">
                Submit
              </button>
            </form>
          </div>
          <div className="lg:max-w-lg  flex-4 lg:w-full text-center md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className="flex flex-col  gap-2 items-center">
              <span className="font-bold custhead text-[14px] text-purple">
                Create a pool fee: 0.0001 BNB
              </span>
              <button className="bg-blue text-[white] text-[16px] font-thin p-2 rounded w-[10rem]">
                Create Pool
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchpadForm;
