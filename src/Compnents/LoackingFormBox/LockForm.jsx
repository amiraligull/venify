/** @format */

import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { vlock } from "../LoadImages";

const LockForm = () => {
  return (
    <div className=" w-full py-7">
      <p className="custhead text-center mb-8 leading-relaxed text-[30px] font-medium text-blue">
        Create Your Lock
      </p>

      <div className=" mx-auto flex     md:flex-row flex-col items-center justify-center ">
        <div className="lg:flex-grow fkex-1  md:w-1/2  flex flex-col md:items-center mb-5  items-center text-center">
          <form action="#" className="flex flex-col  gap-10 text-left">
            <Input
              label="Token or LP Token Address*"
              type="text"
              placeholder="0x198a3e3cb0e3c761a03bdd4a8b382fc92e4b3945"
            />
            <Input label="Amount*" type="text" placeholder="Enter amount" />
            <Input
              label="Lock until (UTC Time Zone)*"
              type="date"
              placeholder="date"
            />
            <div className="text-center flex flex-col items-center">
              <span className="text-purple font-medium text-[18px]">
                You will Pay 0 BNB
              </span>
              <Button width="[10rem]" weight="medium" text="Submit" />
            </div>
          </form>
        </div>
        <div className="lg:max-w-lg  flex-4 lg:w-full text-center md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img src={vlock} alt={vlock} />
        </div>
      </div>
    </div>
  );
};

export default LockForm;
