import React, { useState } from "react";

const Quiz = ({ data }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = data[currentQuestionIndex];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextAnswer = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex + 1 < data.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const restart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  return (
    <section>
      <h1>Quiz App</h1>

      {showResults ? (
        <div className="result">
          <h2>Quiz Results</h2>
          <p>
            Score: {score}/{data.length}
          </p>
          <button onClick={restart}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="questions">
            <h2 id="question">{currentQuestion.question}</h2>
            <span>Answer and get points</span>
          </div>

          <div className="steps">
            <p className="step" id="step">
              Step {currentQuestionIndex + 1} <span>of {data.length}</span>
            </p>
            <div className="stepLine" id="stepline"></div>
          </div>

          <div className="option_container">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={`button ${
                  selectedAnswer
                    ? option === currentQuestion.answer
                      ? "correct"
                      : "wrong"
                    : ""
                }`}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            className="none__Button"
            id="next"
            onClick={handleNextAnswer}
            disabled={!selectedAnswer}
          >
            {currentQuestionIndex + 1 === data.length ? "Submit" : "Next"}
          </button>
        </>
      )}
    </section>
  );
};

export default Quiz;
