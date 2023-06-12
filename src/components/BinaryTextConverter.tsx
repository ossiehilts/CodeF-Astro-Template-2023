import React from "react";
import BinaryLEDs from "./BinaryLEDs";
import InterActiveWrapper from "./InteractiveWrapper";

export default function BinaryTextConverter() {
  const [char, setChar] = React.useState<number>(0);
  return (
    <InterActiveWrapper title="Converting numbers to data">
      <div className="p-6 mt-4 text-gray-900 bg-gray-100 rounded-lg shadow-md font-mono">
        <div className="flex flex-wrap">
          {Array.from({ length: 96 }, (_, i) => i + 32).map((val, i) => (
            <span
              onMouseOver={() => setChar(val)}
              className="font-mono w-8 h-8 m-1 flex text-center content-center bg-gray-100 hover:bg-green-500 p-1 hover:cursor-pointer hover:text-white"
            >
              {String.fromCharCode(val)}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 mt-4 text-gray-900 bg-gray-100 rounded-lg shadow-md font-mono">
        <BinaryLEDs counter={char} withSum={false} />
      </div>
      <div className="p-6 mt-4 text-gray-900 bg-gray-100 rounded-lg shadow-md font-mono">
        <pre className="text-sm">
          <code>
            {char} = {`${String.fromCharCode(char)}`}
          </code>
        </pre>
      </div>
      <div className="p-6 mt-4 text-gray-900 bg-gray-100 rounded-lg shadow-md font-mono">
        <pre className="text-sm">
          <code>{`String.fromCharCode(${char})`}</code>
        </pre>
      </div>
    </InterActiveWrapper>
  );
}
