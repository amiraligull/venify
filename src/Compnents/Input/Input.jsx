/** @format */

import React from "react";

const Input = ({ type, placeholder, label, name }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-[20px] text-purple font-medium">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="md:w-[30rem]  w-[25rem] 
                p-2 rounded bg-inputcolor
                border-none 
                "
        name={name}
      />
    </div>
  );
};

export default Input;
