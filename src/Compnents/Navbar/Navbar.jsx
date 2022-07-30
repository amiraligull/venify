/** @format */

import React from "react";
import logo from "../../assets/logo.png";
import bsc from "../../assets/bsc.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="p-2 flex items-center">
          <img src={logo} alt={logo} className="w-30" />
          <Link to="/">
            <span className=" text-2xl font-bold text-blue"> Venify</span>
          </Link>
        </div>
        {/* items */}
        <div className="hidden md:flex space-x-6">
          <Link to="/CreateToken" className=" text-navblue font-semibold ">
            Create Token
          </Link>
          <Link to="/Launchpad" className=" text-navblue font-semibold ">
            Create Launchpad
          </Link>
          <Link to="/CreateToken" className=" text-navblue font-semibold ">
            Create Fairlaunch
          </Link>
          <Link to="/presale/" className=" text-navblue  font-semibold">
            Presale List
          </Link>
          <Link to="/Saving" className=" text-navblue font-semibold ">
            Venify Lock
          </Link>
        </div>
        {/* button */}
        <div
          className=" flex items-center justify-center
         bg-lightBlue p-2 px-6 rounded-full shadow-lg  "
        >
          <img src={bsc} alt={bsc} className="scale-75" />
          <Link to="#">
            <span className="font-medium text-blue">Connect Wallet</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
