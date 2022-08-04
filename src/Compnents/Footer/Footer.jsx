/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  logo,
  telegram,
  facebook,
  Discord,
  Linkedin,
  twit,
  insta,
  tiktok,
  reddit,
} from "../LoadImages";
import LinkOptions from "./LinkOptions";
const links = [
  { title: "Contact Us", url: "#" },
  {
    title: "About Us",
    url: "https://venify.gitbook.io/welcome-to-venify/1I4f1mgT4zIUc2I1KAOp/",
  },
  { title: "KYC & Audit", url: "#" },
  {
    title: "Doc",
    url: "https://venify.gitbook.io/welcome-to-venify/1I4f1mgT4zIUc2I1KAOp/",
  },
];
const images = [
  { img: telegram, ImgUrl: "#" },
  {
    img: tiktok,
    ImgUrl: "https://www.tiktok.com/@venifylp",
  },

  {
    img: reddit,
    ImgUrl: "https://www.reddit.com/user/Venify_Launchpad",
  },

  {
    img: facebook,
    ImgUrl: "https://www.facebook.com/profile.php?id=100080640354496",
  },
  { img: Discord, ImgUrl: "https://discord.gg/SQgwM6eczW" },
  {
    img: Linkedin,
    ImgUrl: "https://www.linkedin.com/in/venify-launchpad-22a763239/",
  },
  { img: twit, ImgUrl: "https://twitter.com/VenifyL" },
  { img: insta, ImgUrl: "https://www.instagram.com/venifylp/" },
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
            return <LinkOptions url={link.url} title={link.title} />;
          })}
        </nav>
        {/* images */}
        <div className="img flex flex-row">
          {images.map((img) => {
            return <LinkOptions ImgUrl={img.ImgUrl} img={img.img} />;
          })}
        </div>
      </div>
    </footer>
  );
}
