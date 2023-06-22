import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="flex justify-between w-full py-4 px-4 text-sm font-medium text-left text-blue-500 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
            <span className={isOpen ? "transform rotate-180" : ""}>
              <svg
                className="w-5 h-5 fill-current rotate-90"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707 1.707L7.414 8l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4A1 1 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </h2>
        {isOpen && (
          <div className="accordion-content text-sm text-gray-500">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
