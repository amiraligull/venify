/** @format */

import React from "react";

const SearchBox = () => {
  return (
    <div className="ser-container">
      <input
        type="text"
        placeholder="Enter the token address"
        className="ser-input"
      />
      <select className="ser-select">
        <option value="">All Status</option>
      </select>
    </div>
  );
};

export default SearchBox;
