/** @format */

import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { vlock } from "../LoadImages";
import Typography from "../Typeography/Typography";

const LockForm = () => {
  return (
    <div className=" w-full py-7">
      <p className="lpf-subheading">Create Your Lock</p>

      <div className=" tcf-wrap">
        <div className="tcf-flexcontainer">
          <form action="#" className="tcf-form">
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
              <Typography
                text="  You will Pay 0 BNB"
                color="purple"
                custhead="custhead"
              />
              <Button width="[10rem]" weight="medium" text="Submit" />
            </div>
          </form>
        </div>
        <div className="tcf-imagbox">
          <img src={vlock} alt={vlock} />
        </div>
      </div>
    </div>
  );
};

export default LockForm;
