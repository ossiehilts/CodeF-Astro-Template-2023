import React from "react";

const LaptopReminderBanner = ({ msg = "Remember to bring your laptop!" }) => {
  return (
    <div className="bg-gray-900 text-cyan-300 text-center p-8 block mb-1 rounded-lg text-2xl font-light shadow-xl">
      <p>{msg}</p>
    </div>
  );
};

export default LaptopReminderBanner;
