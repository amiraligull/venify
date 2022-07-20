/** @format */

import React from "react";
import "./Trending.css";
import chart from "../../assets/chart.png";
import chart2 from "../../assets/chart2.png";

import t1 from "../../assets/1.png";
import t2 from "../../assets/2.png";
import t3 from "../../assets/3.png";

const Trending = () => {
  return (
    <div
      id="tending"
      className=" bg-cover  mb-20  md:px-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <br />
      <br />
      <span className="text-[48px] text-black font-bold mb-10 mt-[5rem]">
        Top Trending
      </span>
      <div className="tabelContainer  bg-white2  shadow-md rounded-xl w-full p-4">
        <table className="tabel">
          <thead>
            <tr className="border-b-[1px] border-lightBlue">
              <th className="p-4">Currency</th>
              <th className="p-4">Milestone </th>
              <th className="p-4">24 HR Change</th>
              <th className="p-4">Chart</th>
              <th className="p-4">Option</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            <tr className="border-b-[1px] border-lightBlue">
              <td className="p-4 flex items-center justify-center">
                <img src={t1} alt={t1} className="scale-75" />
                <span className="text-purple font-bold flex-0.5">HOLA</span>
              </td>
              <td className="p-4">534BNB </td>
              <td className="p-4 text-green ">4.65%</td>
              <td className="p-4 text-green ">
                <img src={chart} alt={chart} />
              </td>

              <td className="p-4">
                <button className="bg-blue text-white2 p-2 text-[14px] w-32 rounded-xl md:p-3 md:text-[16px] ">
                  View Pool
                </button>
              </td>
            </tr>

            <tr className="border-b-[1px] border-lightBlue">
              <td className="p-4 flex items-center justify-center">
                <img src={t2} alt={t2} className="scale-75" />
                <span className="text-purple font-bold flex-0.5">CTR</span>
              </td>
              <td className="p-4">534BNB </td>
              <td className="p-4 text-red ">4.65%</td>
              <td className="p-4 text-green ">
                <img src={chart2} alt={chart2} />
              </td>

              <td className="p-4">
                <button className="bg-blue text-white2 p-2 text-[12px] w-32 rounded-xl md:p-3 md:text-[16px] ">
                  View Pool
                </button>
              </td>
            </tr>

            <tr className="border-b-[1px] border-lightBlue">
              <td className="p-4 flex items-center justify-center">
                <img src={t3} alt={t3} className="scale-75" />
                <span className="text-purple font-bold flex-0.5">POLA</span>
              </td>
              <td className="p-4">534BNB </td>
              <td className="p-4 text-green  ">04.65%</td>
              <td className="p-4 text-green ">
                <img src={chart} alt={chart} />
              </td>

              <td className="p-4">
                <button className="bg-blue text-white2  w-32 p-2 text-[14px] rounded-xl md:p-3 md:text-[16px] ">
                  View Pool
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trending;
