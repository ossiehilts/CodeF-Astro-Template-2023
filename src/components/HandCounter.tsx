import React from "react";

const sharedStyles = {
  width: 960 / 5,
  height: 370,
  backgroundImage: `url(/hand.png)`,
  display: "block",
  backgroundRepeat: "no-repeat",
}

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
    <div className="flex">
      {counter}
      <div
        style={{
          ...sharedStyles,
          backgroundPosition: `left ${(100 / 4) * (leftHandCounter - 1)}% top 0`,
          transform: 'scaleX(-1)'
        }}
      >
      </div>
      <div
        style={{
          ...sharedStyles,
          backgroundPosition: `left ${(100 / 4) * (rightHandCounter - 1)}% top 0`,
        }}
      >
      </div>
    </div>
  );
}
