import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Celebration = () => {
  const { width, height } = useWindowSize();

  const [celebrate, setCelebrate] = React.useState(false);

  const toggleCelebrate = () => {
    setCelebrate(!celebrate);
  };

  return (
    <div className="w-full text-center">
      {celebrate ? (
        <div className="fixed top-0 left-0 right-0 bottom-0">
          <Confetti width={width} height={height} />
        </div>
      ) : (
        <div
          className={`p-8 bg-yellow-400 text-black w-full text-center rounded-md shadow-xl mb-20 w-full`}
        >
          <button className="text-2xl margin-auto" onClick={toggleCelebrate}>
            Finish for the day
          </button>
        </div>
      )}
    </div>
  );
};

export default Celebration;
