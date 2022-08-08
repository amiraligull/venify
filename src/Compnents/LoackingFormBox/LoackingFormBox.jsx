/** @format */

import React from "react";
import Tabsb from "../TabsButton/Tabsb";
import LockForm from "./LockForm";
import Contribute from "../PresaleOptions/Contribute";

const LoackingForm = () => {
  return (
    <section
      className=" md:px-10 mb-10   "
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className=" createVlockformbox bg-cover shadow-lg border border-blue    p-10 rounded-[30px]">
        <Tabsb
          LockType="LockType"
          tabname1="Create Your Lock"
          tabname2="My Locks"
          tabOneValue={<LockForm />}
          tabTwoValue={<Contribute MyLock="MyLock" />}
        />
      </div>
    </section>
  );
};

export default LoackingForm;
