/** @format */

import React from "react";
import listnot from "../../assets/listnot.png";
import Typography from "../Typeography/Typography";
import Button from "../Button/Button";
import img from "../../assets/1.png";
import Container from "../Layout/Container";
import { Link } from "react-router-dom";

const Contribute = ({ MyLock, MyContribut }) => {
  return (
    <>
      <Container>
        {MyContribut && (
          <div className="flex flex-col gap-8  justify-center items-center  mt-10  md:mx-10 -mb-10  ">
            <img src={listnot} alt={listnot} />
            <Typography
              text="Watch our intro video to learn more about us"
              size="16px"
            />
            <Button text="Back to Home" />
          </div>
        )}

        {/* my lock section */}
        {MyLock && (
          <div className="flex flex-col gap-8   justify-center items-center  mt-10  md:mx-10 -mb-10  ">
            <p className="custhead text-center  text-[30px] font-medium text-blue">
              My Locks
            </p>
            <div class="p-3  md:w-2/3 flex md:flex-row flex-col items-center shadow-lg bg-slati  rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center  rounded-full mr-4"
                src={img}
              />
              <div class=" flex-1 left">
                <Typography text="HOLA WIN" weight="medium" color="white" />
                <Typography
                  text="0x4f3a17aA8768AC656027780E3e3E56B38515dd4B"
                  weight="thin"
                  color="white"
                  size="14px"
                />
              </div>

              <div class=" right">
                <Typography
                  text="Amount: 10.00BNB"
                  weight="medium"
                  color="white"
                />
                <Typography
                  text="Lock Until: 08/10/2023"
                  weight="thin"
                  color="white"
                />
              </div>
            </div>

            <Link to="/">
              <Button text="Back to Home" />
            </Link>
          </div>
        )}
      </Container>
    </>
  );
};

export default Contribute;
