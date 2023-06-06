import React from "react";
import BinaryLEDs from "./BinaryLEDs";

export default function BinaryCounter() {
  const [counter, setCounter] = React.useState<number>(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 255) {
        setCounter((count) => count + 1); 
      }
    }, 500);
    return () => clearInterval(interval);
  }, [setCounter, counter]);

  return (
    <div>
      <div>
      </div>
      <BinaryLEDs counter={counter % 256} />
    </div>
  );
}
