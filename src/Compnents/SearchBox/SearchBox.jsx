/** @format */

import React from "react";

const SearchBox = () => {
  return (
    <div className="card flex flex-row justify-center items-center">
      <input
        type="text"
        placeholder="Enter the token address"
        className="p-3 border border-blue rounded-full w-[50%]"
      />
      <select className="border border-blue rounded-full p-3  ml-1">
        <option value="">All Status</option>
      </select>
    </div>
  );
};

export default SearchBox;
