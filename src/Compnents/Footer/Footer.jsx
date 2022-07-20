/** @format */

import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import telegram from "../../assets/telegram.png";
import Discord from "../../assets/Discord.png";
import Linkedin from "../../assets/Linkedin.png";
import twit from "../../assets/twit.png";
import insta from "../../assets/insta.png";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex  title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3  flex">
            <img src={logo} alt={logo} />
            <span className=" text-2xl font-bold text-blue"> Venify</span>
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Contact us</a>
          <a className="mr-5 hover:text-gray-900">About Us</a>
          <a className="mr-5 hover:text-gray-900">kYC & Audit</a>
          <a className="mr-5 hover:text-gray-900">Doc</a>
        </nav>

        <div className="img flex flex-row">
          <img src={telegram} alt={telegram} className="scale-75" />
          <img src={Linkedin} alt={Linkedin} className="scale-75" />
          <img src={Discord} alt={Discord} className="scale-75" />
          <img src={twit} alt={twit} className="scale-75" />
          <img src={insta} alt={insta} className="scale-75" />
        </div>
      </div>
    </footer>
  );
}
