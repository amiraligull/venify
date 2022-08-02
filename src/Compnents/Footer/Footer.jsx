/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { logo, telegram, Discord, Linkedin, twit, insta } from "../LoadImages";
const links = [
  { title: "Contact Us", url: "#" },
  { title: "About Us", url: "#" },
  { title: "KYC & Audit", url: "#" },
  { title: "Doc", url: "#" },
];
const images = [
  { img: telegram, url: "#" },
  { img: Discord, url: "#" },
  { img: Linkedin, url: "#" },
  { img: twit, url: "#" },
  { img: insta, url: "#" },
];
export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex  title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3  flex">
            <img src={logo} alt={logo} />
            <span className=" text-2xl font-bold text-blue"> Venify</span>
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {links.map((link) => {
            return (
              <Link to={link.url} className="mr-5 hover:text-gray-900">
                {link.title}
              </Link>
            );
          })}
        </nav>

        <div className="img flex flex-row">
          {images.map((img) => {
            return (
              <Link to={img.url}>
                <img src={img.img} alt={img.img} className="scale-75 " />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
