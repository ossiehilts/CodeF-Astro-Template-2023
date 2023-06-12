import React from "react";

const binaryLeds = [128, 64, 32, 16, 8, 4, 2, 1];

export default function BinaryLEDsBinaryLEDs({
  counter,
  withSum,
}: {
  counter: number;
  withSum: boolean;
}) {
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
  }, [counter]); // We only need to list 'counter' as a dependency here

  return (
    <div className="font-mono">
      <div className="flex">
        {binaryLeds.map((value, index) => (
          <div className="flex flex-col items-center mr-2 mb-4" key={index}>
            <div
              className={`font-semibold text-green-${
                counter & value ? "500" : "900"
              }`}
            >
              {value}
            </div>
            <div
              className={`w-8 h-8 mt-2 rounded-full shadow-xl ${
                counter & value ? "bg-green-500" : "bg-green-900"
              }`}
            ></div>
          </div>
        ))}
      </div>
      {withSum && (
        <React.Fragment>
          <div className="mb-4">As a sum . . .</div>
          <div className="flex">
            <span>
              {binaryLeds
                .filter((_, index) => !!currentLights[index])
                .join(" + ")}{" "}
            </span>
            <span className="font-semibold">
              <span className="ml-2">=</span>{" "}
              <span className="p-2 rounded shadow-xl bg-green-500 text-white">
                {counter}
              </span>
            </span>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
