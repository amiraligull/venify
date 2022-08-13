/** @format */

import React from "react";
import { chart, chart2, t1, t2, t3 } from "../LoadImages";
import TableBody from "./TableBody";
const values = [
  {
    img: t1,
    name: "HOLA",
    mileston: "534BNB",
    change: "4.65%",
    graph: chart,
    url: "#",
  },
  {
    img: t2,
    name: "CTR",
    mileston: "534BNB",
    change: "4.65%",
    graph: chart,
    url: "#",
  },
  {
    img: t3,
    name: "POLA",
    mileston: "534BNB",
    change: "4.65%",
    graph: chart2,
    url: "#",
  },
];
const Trending = () => {
  return (
    <div
      className=" tendingbg  trendingParent "
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <br />
      <br />
      <span className="text-[48px] text-black font-bold mb-10 mt-[5rem]">
        Top Trending
      </span>
      <div className="tabelContainer ">
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
            {values.map((value) => {
              return (
                <TableBody
                  img={value.img}
                  name={value.name}
                  mileston={value.mileston}
                  change={value.change}
                  chart={value.graph}
                  url={value.url}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trending;
