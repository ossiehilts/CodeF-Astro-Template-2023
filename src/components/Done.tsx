import React from "react";
import Confetti from "react-confetti";

const Celebration = () => {
  const [celebrate, setCelebrate] = React.useState(false);

  const toggleCelebrate = () => {
    setCelebrate(!celebrate);
  };

  return (
    <div className="p-5 bg-blue-500 text-white w-full text-center rounded shadow-lg">
      {celebrate && <Confetti />}
      <button className="animate-bounce text-2xl" onClick={toggleCelebrate}>
        🎉 Finish for the day
      </button>
    </div>
  );
};

export default Celebration;
