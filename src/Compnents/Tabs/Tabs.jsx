/** @format */
import React from "react";
import Card from "../Card/Card";
import SearchBox from "../SearchBox/SearchBox";
import Tabsb from "../TabsButton/Tabsb";
import img from "../../assets/1.png";
import Container from "../Layout/Container";
import Contribute from "../PresaleOptions/Contribute";

const pools = [
  {
    title: "Khao Manee",
    img: img,
    percentage: "70",
    softCap: "150.0 BNB",
    hardCap: "300.0 BNB",
    Liquidity: "75%",
  },

  {
    title: "Lhao Menee",
    img: img,
    percentage: "70",
    softCap: "150.0 BNB",
    hardCap: "300.0 BNB",
    Liquidity: "75%",
  },
];

const Tabs = () => {
  return (
    <>
      <div
        className="flex flex-wrap"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <Container>
          <br />
          <SearchBox />
          <br />
          <Tabsb
            PresaleTyple="PresaleTyple"
            tabname1="All Tokens"
            tabOneValue={pools.map((pool) => {
              return <Card />;
            })}
            tabname2="My Contributions"
            tabTwoValue={<Contribute MyContribut="MyContribut" />}
          />
        </Container>
      </div>
    </>
  );
};

export default Tabs;
