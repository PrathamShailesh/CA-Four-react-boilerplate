import React from "react";

export default function Result({ correctAnswers, resetQuiz ,darkMode,darkmodetoggle}) {
  const bodyClass = darkMode ? "darkmode" : "";
  return (
    <div className={`bll ${bodyClass}`}>
    <div className="result">
      <div className="result_dark">
      <h1>Quiz Result</h1><div className="darkbtn" onClick={darkmodetoggle}>{darkMode ? "Light Mode" : "Dark Mode"}</div></div>
      <p>Your score: {correctAnswers} - {(correctAnswers/5)*100}%</p>
      <button onClick={resetQuiz}>Restart Quiz</button>
    </div>
    </div>
  );
}
