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
    <div>
      <div className="md:flex items-center justify-center h-screen w-screen overflow-auto p-10">
        <div className="md:w-2/3 m-auto">
          <div>
            <div className="top-0 left-0 right-0 bg-red-500 absolute h-100 block"></div>
            <img src="/logo.png" alt="Logo" className="block h-16" />
            <h1
              className="block float-left w-full text-left font-light text-transparent bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text m-0 p-0"
              style={{
                WebkitTextFillColor: "transparent",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "140px",
                animation: "swirl 1s linear infinite",
                WebkitBackgroundClip: "text",
              }}
            >
              <div className="block">2023</div>
            </h1>
            <h2
              style={{ marginTop: "128px" }}
              className="text-3xl text-pink-600 text-left w-full block md:mt-10"
            >
              <span>is {timeLeft.days} days, </span>
              <span>{timeLeft.hours} hours, </span>
              <span>{timeLeft.minutes} minutes, </span>
              <span>{timeLeft.seconds} seconds </span>
              <span>away!</span>
            </h2>
          </div>
          <p className="text-white mt-20 max-w-md">
            Code F is an immersive web development program that promotes
            collaboration. It offers engaging lectures, interactive workshops,
            and hands-on coding experiences. The curriculum is comprehensive and
            covers HTML, CSS, and JavaScript. Participants will build projects,
            creating a fun and supportive learning environment.{" "}
            <a
              className="mt-10 block"
              href={"https://www.instagram.com/rvu.codef/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-pink-600">Meet our team</span>
            </a>
          </p>
          <div className="mt-10 overflow-scroll max-w-lg">
            <div className="flex items-center justify-between bg-gray-900 text-gray-700 px-2 py-1 rounded-t-md">
              <div className="font-mono text-sm text-gray-100">
                See you soon
              </div>
            </div>
            <TypingComponent />
          </div>
        </div>
        <a href="https://goo.gl/maps/AG2HtjNx2TFBkWtJA">
          <div className="md:mr-8 mt-5 mb-20">
            <span className="md:text-8xl md:rotate-12 block">🗺️</span>
            <p className="bg-pink-600 p-3 text-sm font-mono md:animate-bounce rounded">
              The Cooperage
              <br /> 5 Copper Row
              <br /> London <br /> SE1 2LH
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CountdownTimer;
