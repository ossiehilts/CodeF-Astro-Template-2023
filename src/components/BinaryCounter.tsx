import React from "react";
import BinaryLEDs from "./BinaryLEDs";
import InterActiveWrapper from "./InteractiveWrapper";

export default function BinaryCounter() {
  const [counter, setCounter] = React.useState<number>(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 255) {
        setCounter((count) => (count + 1) % 255);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [setCounter, counter]);

  return (
    <InterActiveWrapper title="Visual demonstration of counting in binary">
      <div className="p-6 mt-4 text-gray-900 bg-gray-100 rounded-lg shadow-md font-mono">
        <BinaryLEDs counter={counter % 256} withSum />
      </div>
    </InterActiveWrapper>
  );
}
