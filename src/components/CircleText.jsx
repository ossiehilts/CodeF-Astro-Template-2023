import React, { useEffect, useRef } from "react";

const CircleText = ({ children }) => {
  const circleRef = useRef(null);
  const characters = ["H", "T", "M", "L"];

  useEffect(() => {
    const circle = circleRef.current;
    const chars = circle.children;
    const radius = circle.offsetWidth / 2;
    const angleStep = 360 / chars.length;

    Array.from(chars).forEach((char, i) => {
      let angle = angleStep * i;
      char.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
    });
  }, [characters]);

  return (
    <div className="relative">
      <div
        id="circle"
        ref={circleRef}
        className="absolute w-full h-full border border-black rounded-full mx-auto"
      >
        {characters.map((char, index) => (
          <p
            className="char absolute w-5 h-5 top-1/2 left-1/2 transform-origin"
            key={index}
          >
            {char}
          </p>
        ))}
      </div>
      {children}
    </div>
  );
};

export default CircleText;
