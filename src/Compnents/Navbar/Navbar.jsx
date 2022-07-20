/** @format */

import React from "react";
import logo from "../../assets/logo.png";
import bsc from "../../assets/bsc.png";
const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="p-2 flex items-center">
          <img src={logo} alt={logo} className="w-30" />
          <span className=" text-2xl font-bold text-blue"> Venify</span>
        </div>
        {/* items */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className=" text-navblue font-semibold ">
            Create Token
          </a>
          <a href="#" className=" text-navblue font-semibold ">
            Create Launchpad
          </a>
          <a href="#" className=" text-navblue font-semibold ">
            Create Fairlaunch
          </a>
          <a href="#" className=" text-navblue  font-semibold">
            Presale List
          </a>
          <a href="#" className=" text-navblue font-semibold ">
            Venify Lock
          </a>
        </div>
        {/* button */}
        <div
          className=" flex items-center justify-center
         bg-lightBlue p-2 px-6 rounded-full  "
        >
          <img src={bsc} alt={bsc} className="scale-75" />
          <a href="#">
            <span className="font-bold text-blue">Connect Wallet</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
