/** @format */

import React from "react";

import Card from "../Card/Card";
import SearchBox from "../SearchBox/SearchBox";
// import Container from "../Layout/Container";
import listnot from "../../assets/listnot.png";
import Typography from "../Typeography/Typography";
import Button from "../Button/Button";

const Tabs = ({ title1, title2 }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div
        className="flex flex-wrap"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="w-full">
          <div className="flex md:flex-row bg-lightBlue mt-10 border border-blue md:w-[20rem] mx-auto p-3 rounded-full justify-center items-center mb-[5rem]">
            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full  block leading-normal " +
                (openTab === 1
                  ? "text-white bg-blue"
                  : "text-blue  bg-lightBlue")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              {title1}
            </button>

            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full  block leading-normal " +
                (openTab === 2
                  ? "text-white bg-blue"
                  : "text-blue  bg-lightBlue")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              {title2}
            </button>
          </div>

          <SearchBox />

          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="container md:px-14 py-15 mx-auto">
                    <div className="flex  flex-wrap md:mx-10 -mb-10  ">
                      <Card />
                      <Card />
                      <Card />
                      <Card />
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="container md:px-14 py-15 mx-auto mb-20">
                    <div className="flex flex-col gap-8  justify-center items-center   md:mx-10 -mb-10  ">
                      <img src={listnot} alt={listnot} />
                      <Typography
                        text="Watch our intro video to learn more about us"
                        size="16px"
                      />
                      <Button text="Back to Home" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
