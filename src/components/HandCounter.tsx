import React from "react";
import InterActiveWrapper from "./InteractiveWrapper";

const sharedStyles = {
  width: 960 / 5,
  height: 370,
  backgroundImage: `url(/hand.png)`,
  display: "block",
  backgroundRepeat: "no-repeat",
};

export default function HandCounter() {
  const [counter, setCounter] = React.useState<number>(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((count) => (count % 10) + 1);
    }, 600);
    return () => clearInterval(interval);
  }, [setCounter]);

  const leftHandCounter = counter <= 5 ? counter : 5;
  const rightHandCounter = counter > 5 ? counter - 5 : 0;

  return (
    <InterActiveWrapper title="Counting in base 10">
      <div className="mx-auto w-full">
        <div className="p-6 mt-4 text-gray-900 bg-gray-100 rounded-lg shadow-md font-mono">
          {counter}
        </div>
        <div className="flex">
          <div
            style={{
              ...sharedStyles,
              backgroundPosition: `left ${
                (100 / 4) * (leftHandCounter - 1)
              }% top 0`,
              transform: "scaleX(-1)",
            }}
          ></div>
          <div
            style={{
              ...sharedStyles,
              backgroundPosition: `left ${
                (100 / 4) * (rightHandCounter - 1)
              }% top 0`,
            }}
          ></div>
        </div>
      </div>
    </InterActiveWrapper>
  );
}
