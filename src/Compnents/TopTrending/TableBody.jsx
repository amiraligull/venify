/** @format */
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const TableBody = ({ img, name, mileston, change, chart, url }) => {
  return (
    <tr className="t-trStyleing">
      <td className="t-img-name">
        <img src={img} alt={img} className="scale-75" />
        <span className="t-token-name">{name}</span>
      </td>
      <td className="p-4">{mileston}</td>
      <td className="p-4 text-green ">{change}</td>
      <td className="p-4 text-green ">
        <img src={chart} alt={chart} />
      </td>
      <td className="p-4">
        <Link to={url}>
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
