import React from "react";

function Button({ text, style, onClick }) {
  return (
    <button
      className={`bg-[#000000] text-white mx-auto py-2 px-4 rounded-md text-[20px] ${style}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
