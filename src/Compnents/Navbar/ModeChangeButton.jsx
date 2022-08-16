/** @format */

import React from "react";

const ModeChangeButton = ({ dark, light }) => {
  return (
    <div className="mode">
      <button
        className="darkbtn"
        data-set-theme="dark"
        data-act-class="ACTIVECLASS"
      >
        <img
          src={dark}
          alt={dark}
          className=" w-[30px] rounded-full shadow-xl"
        />
      </button>
      <button
        className="lightbtn"
        data-set-theme="light"
        data-act-class="ACTIVECLASS"
      >
        <img
          src={light}
          alt={light}
          className=" w-[30px] rounded-full shadow-xl"
        />
      </button>
    </div>
  );
};

export default ModeChangeButton;
