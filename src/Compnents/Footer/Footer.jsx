/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  logo,
  darklogo,
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
  { img: telegram, ImgUrl: "https://t.me/VenifyLP" },
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
    <footer className="footer-flexcontainer">
      <Link to="/">
        <span className="ml-3  flex">
          <img src={logo} alt={logo} className=" whiteThemeLogo " />
          <img
            src={darklogo}
            alt={darklogo}
            className=" darkThemeLogo w-[180px]"
          />
        </span>
      </Link>
      <nav className="footer-links">
        {links.map((link, key) => {
          return <LinkOptions key={key} url={link.url} title={link.title} />;
        })}
      </nav>
      {/* images */}
      <div className="img flex flex-row">
        {images.map((img, key) => {
          return <LinkOptions key={key} ImgUrl={img.ImgUrl} img={img.img} />;
        })}
      </div>
    </footer>
  );
}
