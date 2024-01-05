import React, { useState } from "react";
import questions from "../questions";

export default function QuestionBox({
  number,
  handleNextQuestion,
  setCorrectAnswers,
  darkmodetoggle,darkMode
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [highlight, setHighlight] = useState(false);


  //handles the option that is clicked
  const handleOptionClick = (index) => {
    const selectedOption = questions[number].options[index];
    //while correct answer is clicked the number will be incremented
    if (selectedOption.isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    setSelectedAnswer(selectedOption.text);
    //Next qst will be loaded
    handleNextQuestion();
  };


  //handles the highlight of the question
  const handleHighlight = () => {
    setHighlight((prevHighlight) => true);
  };
  const removeHighlight = () => {
    setHighlight((prevHighlight) => false);
  };



  return (
    //Adds darkmode as the classname to give bg color as dark
    <div className={`body ${darkMode ? "darkmode" : ""}`}>
      <div className="header">
        <h1>Quiz</h1>
        <div className="dark" onClick={darkmodetoggle}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </div>
      </div>
      <div className="questions">
        <div className="main_content">
          <p>
            Question: {number + 1} out of {questions.length}
          </p>
          <hr></hr>
          <h2 className={`quest ${highlight ? "red" : ""}`}>
            {questions[number].text}
          </h2>
          <div className="options">
            {/* loads all the options and the question */}
            {questions[number].options.map((option, index) => (
              <div key={index} onClick={() => handleOptionClick(index)}>
                {/* this generates alphabets from a to d before the options */}
                <span className="optionlabel">{String.fromCharCode(97 + index)}. </span>
                {option.text}
              </div>
            ))}
          </div>
          <div className="end">
            <div className="highlight" onClick={handleHighlight}>
              Highlight
            </div>
            <div className="highlight" onClick={removeHighlight}>
              remove highlight
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



