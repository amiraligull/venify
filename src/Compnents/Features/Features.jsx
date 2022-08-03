/** @format */

import React from "react";
import FeaturesBox from "./FeaturesBox";
import { mid, statimg, earnImg, lockImg } from "../LoadImages";
import "./Features.css";
const Features = () => {
  const features = [
    {
      image: statimg,
      title: "Everything you’ll need",
      text: "Venify is your one-stop shop! Our user friendly interface provides a smooth and easy process that’s operable by even the newest of crypto users. All of our functions can be implemented without writing a single line of coding. This will also be used with the us guaranteeing the highest security against impostors and scamming.",
    },
    {
      image: lockImg,
      title: "Guaranteed",
      text: "At Venify, we have many anti-scam features. These are located in our Launchpad in order for this to be made a safe and friendly environment. We are here to provide a layer of security for all of our investors. We will not accept contracts from outside developers unless these are audited by our trusted partners.",
    },
    {
      image: earnImg,
      title: "Always a low fee for you",
      text: "Our team is against keeping a percentage of the token’s supply that belong to a project. We believe that the tokens belong to the project and its investors, bout our wallets. In other words, your profit will be our priority.",
    },
  ];

  return (
    <div className="features">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center  w-full"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              src={mid}
            />
          </div>
          <div
            className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center "
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {features.map((feature) => {
              return (
                <FeaturesBox
                  image={feature.image}
                  title={feature.title}
                  text={feature.text}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
