/** @format */

import React from "react";
import Input from "../Input/Input";
import mid from "../../assets/form2.png";
import Button from "../Button/Button";

const LoackingForm = () => {
  return (
    <section
      className=" md:px-10 mb-10   "
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className=" createVlockformbox bg-cover shadow-lg border border-blue   p-10 rounded-[30px]">
        <div className="text-center">
          <p className="custhead mb-8 leading-relaxed text-[30px] font-medium text-blue">
            Create Your Lock
          </p>
        </div>
        <div className="container mx-auto flex px-5 py-5  md:flex-row flex-col items-center">
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
            <img src={mid} alt={mid} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoackingForm;
