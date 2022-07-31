/** @format */

import React, { useState } from "react";
import logo from "../../assets/logo.png";
import bsc from "../../assets/bsc.png";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="main">
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
            className=" hidden md:flex items-center justify-center
         bg-lightBlue p-2 px-6 rounded-full shadow-lg  "
          >
            <img src={bsc} alt={bsc} className="scale-75" />
            <Link to="#">
              <span className="font-medium text-blue">Connect Wallet</span>
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/*  mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden  px-3 pb-4" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/CreateToken"
              className="hover:text-black   text-blue block px-3 py-2  font-medium"
            >
              Create Token
            </Link>

            <Link
              to="/Launchpad"
              className="hover:text-black   text-blue block px-3 py-2  font-medium"
            >
              Create Launchpad
            </Link>

            <Link
              to="Fairlaunch"
              className="hover:text-black   text-blue block px-3 py-2  font-medium"
            >
              Create Fairlaunch
            </Link>

            <Link
              to="/presale/"
              className="hover:text-black   text-blue block px-3 py-2  font-medium"
            >
              Presale List
            </Link>

            <Link
              to="/Saving"
              className="hover:text-black   text-blue block px-3 py-2  font-medium"
            >
              Venify Lock
            </Link>
          </div>
          <div
            className="  flex items-center justify-center
         bg-lightBlue p-2 px-6 rounded-full shadow-lg  "
          >
            <img src={bsc} alt={bsc} className="scale-75" />
            <Link to="#">
              <span className="font-medium text-blue">Connect Wallet</span>
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
