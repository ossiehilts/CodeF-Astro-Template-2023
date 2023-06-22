import React, { useState, useEffect } from "react";

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

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // shuffle the array of questions and set the current question
  useEffect(() => {
    const shuffledQuestions = [...QUIZ_QUESTIONS].sort(
      () => Math.random() - 0.5
    );
    setQuestions(shuffledQuestions);
    setCurrentQuestion(shuffledQuestions[0]);
  }, []);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentQuestion.correctAnswer === selectedAnswer) {
      alert("Correct answer!");
    } else {
      alert("Sorry, wrong answer.");
    }
    // go to next question
    const nextQuestion = questions.pop();
    setCurrentQuestion(nextQuestion);
    setSelectedAnswer("");
  };

  if (!currentQuestion) return <div>No more questions!</div>;

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-6">{currentQuestion.question}</h1>
      <form onSubmit={handleSubmit}>
        {currentQuestion?.answers?.map((answer, index) => (
          <div key={index} className="mb-4">
            <input
              type="radio"
              id={`answer-${index}`}
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleAnswerChange}
              className="mr-2"
            />
            <label htmlFor={`answer-${index}`} className="text-xl">
              {answer}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Quiz;
