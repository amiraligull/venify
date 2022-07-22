/** @format */

import React from "react";

const Text = ({ fontsize, color, text }) => {
  return (
    <div className="paragraph">
      <span className={`${fontsize} font-thin ${color}`}>
        Your one stop shop. Our user-friendly interface provides a smooth and
        easy process operable by even the most novice of crypto users. All our
        functions can be implemented without writing a single line of code along
        with implementing the highest security against impostors.
      </span>
    </div>
  );
};

export default Text;
