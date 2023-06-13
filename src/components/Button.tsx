import React, { useState } from "react";

const Button = ({ disabled }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
      <button
        id="advance"
        className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 px-8 rounded-full inline-flex items-center transition-colors ${
          !disabled ? "" : "bg-gradient-to-r from-purple-300 to-blue-100"
        }`}
      >
        <span>Let's go!</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 ml-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
  );
};

export default Button;
