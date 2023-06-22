import React, { useEffect, useState } from "react";
import WindowBar from "./WindowBar";

const TypingComponent = () => {
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
      <p className="p-2 text-gray-800 bg-gray-700 font-mono text-xs">Output</p>
      <p className="p-2 bg-gray-700 font-mono text-sm">
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
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-2/3 m-auto">
        <div>
          <img src="/logo.png" alt="Logo" class="block h-16" />
          <h1 className="text-3xl text-pink-600 text-left w-full">
            <span>is {timeLeft.days} days, </span>
            <span>{timeLeft.hours} hours, </span>
            <span>{timeLeft.minutes} minutes, </span>
            <span>{timeLeft.seconds} seconds </span>
            <span>away!</span>
          </h1>
        </div>
        <div className="mt-10 w-1/3 overflow-scroll max-h-40">
          <div className="flex items-center justify-between bg-gray-900 text-gray-700 px-2 py-1 rounded-t-md">
            <div className="font-mono text-sm text-gray-100">See you soon</div>
          </div>
          <TypingComponent />
        </div>
        <a
          className="mt-10 block"
          href={"https://www.instagram.com/rvu.codef/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="white"
            width="30"
            height="30"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.5 5.5h3a1 1 0 011 1v3m0 10h-3a1 1 0 01-1-1v-3m4-7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3 7.5h3a1 1 0 001-1v-3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CountdownTimer;
