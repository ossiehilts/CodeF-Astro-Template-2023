import React, { useState, useEffect } from "react";
import InteractiveWrapper from "./InteractiveWrapper";

const QUIZ_QUESTIONS = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Text Machine Language",
      "High Text Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question:
      "What is the correct HTML for referring to an external style sheet?",
    answers: [
      "<stylesheet>mystyle.css</stylesheet>",
      '<style src="mystyle.css">',
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      '<style href="mystyle.css">',
    ],
    correctAnswer: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
  },
  // add more questions here
];

function Quiz({ questionsProp = QUIZ_QUESTIONS }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    const shuffledQuestions = [...questionsProp].sort(
      () => Math.random() - 0.5
    );
    setQuestions(shuffledQuestions);
    setCurrentQuestion(shuffledQuestions[0]);
  }, [questionsProp]);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextQuestion = questions.pop();
    if (currentQuestion.correctAnswer === selectedAnswer) {
      alert("Correct answer!");
    } else {
      alert("Sorry, wrong answer.");
    }
    setCurrentQuestion(nextQuestion);
    setSelectedAnswer("");
  };

  if (!currentQuestion) return <div className="p-10">No more questions!</div>;

  return (
    <InteractiveWrapper>
      <div className="p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl mb-10 text-black">{currentQuestion.question}</h1>
        <form onSubmit={handleSubmit}>
          {currentQuestion?.answers?.map((answer, index) => (
            <div key={index} className="mb-4 flex items-center">
              <input
                type="radio"
                id={`answer-${index}`}
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={handleAnswerChange}
                className="mr-2"
              />
              <label htmlFor={`answer-${index}`}>
                <p className="p-2 bg-gray-700 font-mono text-sm text-white rounded">
                  {answer}
                </p>
              </label>
            </div>
          ))}
          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </InteractiveWrapper>
  );
}

export default Quiz;
