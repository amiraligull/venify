/** @format */

import React, { useState } from "react";
import { logo, darklogo, dark, light, bsc } from "../LoadImages";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import TopBanner from "../Advertisment/TopBanner";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import ModeChangeButton from "./ModeChangeButton";
import Svg from "./Svg";

const Navbar = () => {
  const Options = [
    { title: "Create Token", Url: "/CreateToken" },
    { title: "Create Launchpad", Url: "/Launchpad" },
    { title: "Create Fairlaunch", Url: "/FairLaunch" },
    { title: "  Presale List", Url: "/presale" },
    { title: " V-Lock", Url: "/Saving" },
  ];
  useEffect(() => {
    themeChange(false);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="main">
      <nav className="Nav-main">
        <div className="Nav-Wrap-Items">
          {/* logo */}
          <div className="Nav-logo">
            <Link to="/">
              <img src={logo} alt={logo} className=" whiteThemeLogo " />
              <img src={darklogo} alt={darklogo} className=" darkThemeLogo" />
            </Link>
          </div>
          {/* items */}
          <div className="Nav-Items">
            {Options.map((option, key) => {
              return (
                <Link to={option.Url} key={key} className="navlink">
                  {option.title}
                </Link>
              );
            })}
          </div>
          {/* theme change button */}
          <ModeChangeButton dark={dark} light={light} />
          <div className=" hidden walletbutton ">
            <img src={bsc} alt={bsc} className="scale-75" />
            <Link to="#">
              <span className="WalletText">Connect Wallet</span>
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="Nav-BarBtn"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Svg dimention="M4 6h16M4 12h16M4 18h16" />
              ) : (
                <Svg dimention="M6 18L18 6M6 6l12 12" />
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
        <div className="Nav-Mobile">
          <div className="MobileItems">
            {Options.map((option, key) => {
              return (
                <Link to={option.Url} key={key} className="MobileItemsLinks">
                  {option.title}
                </Link>
              );
            })}
          </div>
          <div className=" walletbutton  MobileWalletBtn">
            <img src={bsc} alt={bsc} className="scale-75" />
            <Link to="#">
              <span className="WalletText">Connect Wallet</span>
            </Link>
          </div>
        </div>
      </Transition>
      <TopBanner />
    </div>
  );
};

export default Navbar;
