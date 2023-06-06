import React from "react";

export default function HandCounter() {
  const [counter, setCounter] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((count) => count + 1);
    }, 300);
    return () => clearInterval(interval);
  }, [setCounter]);

  return (
    <div class="flex">
      {counter}
      <div
        style={{
          width: 800 / 6,
          height: 300,
          backgroundImage: `url(/hands.webp)`,
          display: "block",
          backgroundPosition: `left ${(100 / 6) * (counter % 5)}% bottom 0`,
          backgroundRepeat: "no-repeat",
        }}
      >
        Hand
      </div>
    </div>
  );
}
