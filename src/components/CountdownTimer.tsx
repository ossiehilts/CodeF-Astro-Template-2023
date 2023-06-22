import React, { useEffect, useState } from "react";

export const TypingComponent = () => {
  const [message, setMessage] = useState("");
  const messages = [
    "Welcome to Code F Curriculum 2023, an exciting and comprehensive program designed to immerse you in the world of web development while fostering a fun and collaborative learning environment. Over the course of four action-packed days, you'll embark on a journey filled with engaging lectures, interactive workshops, and hands-on coding experiences.",
    "On Day 1, we kick off with an introduction to web development and project planning. Explore the inner workings of the internet and gain an understanding of web development technologies. You'll participate in a project planning workshop, where you'll conceptualize and write a website project plan. Get ready to set up CodeSandbox, an intuitive IDE, and start familiarizing yourself with the development environment.",
    "Day 2 delves deeper into web development tools and interactive learning. Master the basics of HTML, CSS, and JavaScript through informative lectures and interactive sessions. You'll have hands-on experience building a simple webpage using CodeSandbox, while also exploring the power of pair programming and collaboration. Get ready to unleash your creativity and play exciting JavaScript games!",
  ];
  const typingSpeed = 50; // Speed in milliseconds per character
  const deleteSpeed = 25; // Speed in milliseconds per character when deleting

  useEffect(() => {
    const typeMessage = async (message) => {
      for (let i = 0; i < message.length; i++) {
        setMessage((prevMessage) => prevMessage + message[i]);
        await sleep(typingSpeed);
      }
    };

    const deleteMessage = async () => {
      for (let i = message.length - 1; i >= 0; i--) {
        setMessage((prevMessage) => [...prevMessage.slice(0, i)].join());
        await sleep(deleteSpeed);
      }
    };

    const typeAndDeleteMessages = async () => {
      for (let i = 0; i < messages.length; i++) {
        await typeMessage(messages[i]);
        await sleep(1000); // Delay before deleting the message
        await deleteMessage();
        await sleep(500); // Delay before typing the next message
      }
    };

    typeAndDeleteMessages();
  }, []); // Run once on component mount

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div>
      <p className="p-2 text-gray-800 bg-gray-700 font-mono text-xs max-w-lg">
        Output
      </p>
      <p className="p-2 bg-gray-700 font-mono text-sm rounded-b-md max-w-lg">
        {">"} {message}
      </p>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-06-26`) - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <h2 className="text-3xl text-pink-600 text-left w-full block m-0 p-0 md:mt-2">
      <span>is {timeLeft.days} days, </span>
      <span>{timeLeft.hours} hours, </span>
      <span>{timeLeft.minutes} minutes, </span>
      <span>{timeLeft.seconds} seconds </span>
      <span>away!</span>
    </h2>
  );
};

export default CountdownTimer;
