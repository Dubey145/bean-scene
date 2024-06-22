import React from "react";

const Button = (props) => {
  return (
    <button
      className={`text-black py-2 px-4 rounded-3xl ${props.color} shadow-xl shadow-custom-yellow`}
    >
      {props.label}
    </button>
  );
};

export default Button;
