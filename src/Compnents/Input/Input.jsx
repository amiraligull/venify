/** @format */

import React from "react";

const Input = ({ type, placeholder, label, name }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="LabelStyle">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="InputStyle"
        name={name}
      />
    </div>
  );
};

export default Input;
