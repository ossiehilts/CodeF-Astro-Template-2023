import React from "react";

const List = ({ items }) => (
  <ol className="list-decimal list-inside space-y-2">
    {items.map((item, index) => (
      <li
        key={index}
        className="text-gray-700 text-lg bg-gray-100 shadow-sm rounded-lg p-4 transform hover:translate-x-5 transition-transform duration-200 ease-in-out"
      >
        {item}
      </li>
    ))}
  </ol>
);

export default List;
