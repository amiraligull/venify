/** @format */

import React, { useState } from "react";
import styled from "styled-components";
export default function TabBarWithRender({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TabContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            <Title active={activeTab === index}>{tab.title}</Title>
            <Indicator active={activeTab === index} />
          </TabButton>
        ))}
      </TabContainer>
      {tabs[activeTab].render()}
    </>
  );
}

const TabContainer = styled.section`
  display: flex;
  flex-direction: row;
  // row-gap: 10px;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 60px;
  border: 1px solid #0066ff;
  border-radius: 100px;
  padding: 10px;
  margin: auto;
  background: #ebf5ff;
  @media only screen and (max-width: 600px) {
    /*Big smartphones [426px -> 600px]*/
    width: 100%;
    padding: 5px;
  }
`;
const TabButton = styled.button`
  width: 200px;
  height: 100%;
  padding: 10px;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.6s;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.65);
  background: ${(props) => (props.active ? "#0066FF" : "#171717")};
  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    /*Big smartphones [426px -> 600px]*/
    width: 100%;
  }
`;

const Title = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  text-transform: uppercase;
  font-size: 16px;

  @media only screen and (max-width: 600px) {
    /*Big smartphones [426px -> 600px]*/
    font-size: 12px;
    font-weight: bold;
  }

  color: ${(props) => (props.active ? "white" : "white")};
  transition: 0.6s;
`;
const Indicator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // border-bottom-width: 2px;
  // border-bottom-style: solid;

  border-bottom-color: ${(props) => (props.active ? "#3e5b5b" : "#f1f1f1")};
  transition: 0.6s;
`;
