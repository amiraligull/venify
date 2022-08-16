/** @format */

import React from "react";
import createtoken from "../../assets/createtoken.png";
import mid from "../../assets/form2.png";
import Input from "../Input/Input";
import Button from "../Button/Button";
const TokenCreatBoxForm = () => {
  return (
    <section className=" md:px-10 mb-9">
      <div className="createTokenformbox  herobggif ">
        <div className="container mx-auto flex px-5 py-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow fkex-1  md:w-1/2  flex flex-col md:items-center  items-center text-center">
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

              <Button width="[10rem]" weight="medium" text="Create Token" />
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
