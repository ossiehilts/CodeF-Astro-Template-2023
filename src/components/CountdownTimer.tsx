import React, { useEffect, useState } from "react";

export const TypingComponent = () => {
  const [message, setMessage] = useState("");
  const messages = [
    "&#128075; Welcome to the <span class='text-pink-500 font-extrabold'>Code F Curriculum 2023</span>, an exciting and comprehensive program designed to immerse you in the world of <span class='font-bold'>web development</span> while fostering a fun and collaborative learning environment. Over the course of four action-packed days, you'll embark on a journey <span class='font-bold'>filled with engaging lectures, interactive workshops, and hands-on coding experiences.</span>",
    "&#128197; <span class='text-pink-500 font-extrabold'>On Day 1</span>, we kick off with an introduction to web development and project planning. Explore the inner workings of the internet and gain an understanding of web development technologies. You'll participate in a project planning workshop, where you'll conceptualize and write a website project plan. Get ready to set up <a target='_blank' href='https://codesandbox.io/' class='text-blue-500 font-extrabold underline'>CodeSandbox</a>, an intuitive IDE, and start familiarizing yourself with the development environment.",
    "&#128197; <span class='text-pink-500 font-extrabold'>Day 2</span> delves deeper into web development tools and interactive learning. Master the <span class='text-pink-500 font-extrabold'>basics of HTML, CSS, and JavaScript</span> through informative lectures and interactive sessions. You'll have hands-on experience building a <span class='text-pink-500 font-extrabold'>simple webpage</span> using CodeSandbox, while also exploring the power of pair programming and collaboration. Get ready to unleash your creativity and play exciting JavaScript games!",
    "&#128197; <span class='text-pink-500 font-extrabold'>Day 3</span> takes a step back to <span class='text-pink-500 font-extrabold'>explore low-level computing concepts</span>. Expand your knowledge with exposure to <span class='text-pink-500 font-extrabold'>hardware and fundamental computing concepts.</span> In the workshop hours, you'll continue developing your website using the tools and skills you've acquired. <span class='text-pink-500 font-extrabold'>Engage in pair programming and problem-solving activities</span> to enhance your coding abilities.",
    "&#128197; <span class='text-pink-500 font-extrabold'>On Day 4</span>, it's time to finalise and host your website. Review and troubleshoot your website, preparing it for deployment. Understand the intricacies of <span class='text-pink-500 font-extrabold'>hosting and domains</span>, and discover how to make your website publicly accessible using <a target='_blank' href='https://app.netlify.com/' class='text-blue-500 font-extrabold underline'>Netlify</a>. Engage in additional site improvements and deployments, all while reflecting on your learning journey and discussing future paths in web development.",
    "T&#127881; The program culminates in the <span class='text-pink-500 font-extrabold'>Showcase</span>, where you'll have the opportunity to wrap up your projects and network with fellow participants. Share your accomplishments and celebrate your growth as a web developer.",
    "&#129299; Throughout the curriculum, our team of experienced engineers will guide you, answering your questions and providing support. So bring your laptop and get ready to dive into the exciting world of web development with Code F Curriculum 2023. Let's unlock your potential and create the future together!",
  ].map((str) => "<span class='text-gray-400'>></span> " + str + "</br></br>");
  const typingSpeed = 12; // Speed in milliseconds per character
  const deleteSpeed = 25; // Speed in milliseconds per character when deleting

  useEffect(() => {
    const typeMessage = async (message) => {
      for (let i = 0; i < message.length; i++) {
        setMessage((prevMessage) => prevMessage + message[i]);
        await sleep(Math.random() * 10 + typingSpeed);
      }
    };

    const deleteMessage = async () => {
      for (let i = message.length - 1; i >= 0; i--) {
        setMessage(
          (prevMessage) =>
            [...prevMessage.slice(0, i - 1)].join() +
            "&#219; <span>&#129302;</span>"
        );
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
    <div className="text-black">
      <p className="p-2 text-gray-800 bg-gray-300 font-mono text-xs w-lg">
        Output
      </p>
      <p
        className="p-2 bg-gray-300 font-mono text-sm rounded-b-md max-w-lg leading-6"
        dangerouslySetInnerHTML={{
          __html:
            message +
            " <span class='motion-safe:animate-bounce inline-block text-pink-400'>&#9608; </span>",
        }}
      ></p>
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
    <h2 className="text-3xl text-left w-full block m-0 p-0 md:mt-2">
      <span>is {timeLeft.days} days, </span>
      <span>{timeLeft.hours} hours, </span>
      <span>{timeLeft.minutes} minutes, </span>
      <span>{timeLeft.seconds} seconds </span>
      <span>away!</span>
    </h2>
  );
};

export default CountdownTimer;
