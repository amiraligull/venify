/** @format */

import React from "react";
import createtoken from "../../assets/createtoken.png";
import mid from "../../assets/form2.png";
import Input from "../Input/Input";
import Button from "../Button/Button";
const TokenCreatBoxForm = () => {
  return (
    <section className="tcf-container ">
      <div className="createTokenformbox  herobggif ">
        <div className="tcf-wrap">
          <div className="tcf-flexcontainer">
            <form action="#" className="tcf-form">
              <Input
                label="Token"
                type="text"
                placeholder="Enter your token type"
              />
              <Input
                label="Name *"
                type="text"
                placeholder="Enter your token Name"
              />
              <Input
                label="Symbol*"
                type="text"
                placeholder="Enter your token Symbol"
              />
              <Input
                label="Decimals*"
                type="number"
                placeholder="Enter your token Decimals"
              />
              <Input
                label="Total Supply*"
                type="number"
                placeholder="Enter your token Total Supply"
              />

              <Button width="[10rem]" weight="medium" text="Create Token" />
            </form>
          </div>
          <div className="tcf-imagbox">
            <img className="tcf-img" alt="hero" src={createtoken} />
            <img className="tcf-img" alt="hero" src={mid} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenCreatBoxForm;
