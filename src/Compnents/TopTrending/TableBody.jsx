/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const TableBody = ({ img, name, mileston, change, chart, url }) => {
  return (
    <tr className="border-b-[1px] border-lightBlue">
      <td className="p-4 flex items-center justify-center">
        <img src={img} alt={img} className="scale-75" />
        <span className="text-purple font-bold flex-0.5">{name}</span>
      </td>
      <td className="p-4">{mileston}</td>
      <td className="p-4 text-green ">{change}</td>
      <td className="p-4 text-green ">
        <img src={chart} alt={chart} />
      </td>
      <td className="p-4">
        <Link to={url}>
          {/* <button className="bg-blue text-white2 p-2 text-[14px] w-32 rounded-xl md:p-3 md:text-[16px] ">
            View Pool
          </button> */}
          <Button
            text="View Pool"
            width="[10rem]"
            weight="bold"
            radius="[30px]"
          />
        </Link>
      </td>
    </tr>
  );
};

export default TableBody;
