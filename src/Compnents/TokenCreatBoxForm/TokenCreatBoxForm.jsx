/** @format */

import React from "react";
import createtoken from "../../assets/createtoken.png";
import mid from "../../assets/mid.png";
import Input from "../Input/Input";
const TokenCreatBoxForm = () => {
  return (
    <section className=" px-10">
      <div className="bg-lightBlue p-10 rounded">
        <div className="container mx-auto flex px-5 py-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow fkex-1  md:w-1/2  flex flex-col md:items-center  items-center text-center">
            {/* <h1 className=" cushead title-font md:text-[48px] text-[40px] mb-4 font-[700] text-purple">
              Subscribe to our newsletter
            </h1>
            <p className="mb-8 leading-relaxed text-[16px] font-thin text-gray">
              Get notification about tips, new product and exclusive promo news
              just for you.
            </p> */}

            <form action="#" className="flex flex-col  gap-10 text-left">
              <Input
                label="Token"
                type="text"
                placeholder="Enter your token type"
              />

              <Input
                label="Name *"
                type="text"
                placeholder="Enter your token Name"
              />

              <Input
                label="Symbol*"
                type="text"
                placeholder="Enter your token Symbol"
              />

              <Input
                label="Decimals*"
                type="number"
                placeholder="Enter your token Decimals"
              />
              <Input
                label="Total Supply*"
                type="number"
                placeholder="Enter your token Total Supply"
              />
              <button className="bg-blue text-[white] text-[20px] font-thin p-2 rounded w-[10rem]">
                Create Token
              </button>
            </form>
          </div>
          <div className="lg:max-w-lg flex-4 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={createtoken}
            />
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={mid}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenCreatBoxForm;
