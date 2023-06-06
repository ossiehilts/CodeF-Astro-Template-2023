import React from "react";

// let currentNumber = 100;
const binaryLeds = [128, 64, 32, 16, 8, 4, 2, 1];

// let currentLights = new Array(8).fill(false);
// binaryLeds.reduce((total, current, index) => {
//   if (total >= current) {
//     currentLights[index] = true;
//     return total - current;
//   } else {
//     return total;
//   }
// }, currentNumber);

export default function BinaryCounter() {
  const [currentLights, setCurrentLights] = React.useState<boolean>(
    new Array(8).fill(false)
  );

  React.useEffect(() => {
    const newLights = new Array(8).fill(false); // copy the array to a new one

    binaryLeds.reduce((total, current, index) => {
      if (total >= current) {
        newLights[index] = true;
        return (total -= current);
      } else {
        newLights[index] = false;
        return total;
      }
    }, counter);

    setCurrentLights(newLights); // set state once after all updates
  }, [counter, currentLights]); // We only need to list 'counter' as a dependency here

  return (
    <div>
      <div>{counter % 255}</div>
      <div>
        <div onClick={() => increase()}>Increase</div>
      </div>
      <div className="flex">
        {binaryLeds.map((value, index) => (
          <div class="flex flex-col items-center mr-2" key={index}>
            <div
              class={`font-semibold text-green-${
                counter & value ? "500" : "900"
              }`}
            >
              {value}
            </div>
            <div
              class={`w-8 h-8 mt-2 rounded-full shadow-xl ${
                counter & value ? "bg-green-500" : "bg-green-900"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
