/** @format */

import React from "react";
import Tabsb from "../TabsButton/Tabsb";
import LockForm from "./LockForm";
import Contribute from "../PresaleOptions/Contribute";

const LoackingForm = () => {
  return (
    <section
      className="tcf-container"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="createTokenformbox herobggif ">
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
