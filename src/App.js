import React, { useEffect, useState,Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



export default function App() {
  const [number,setNumber]= useState(-1)
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [darkMode, setDarkMode] = useState(false);


  //Used to move on to the next question after clicking on a option
  //also used to go from one page to another
  const handleNextQuestion = () => {
    setNumber((prevNumber) => prevNumber +1);
  };


  //resets the correct answers entered to 0 after the game is restarted
  const resetQuiz = () => {
    setNumber(-1);
    setCorrectAnswers(0);
  };

  //used to work with toggle between dark mode and light mode
  const darkmodetoggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };



  return (
    //toggles btwn darkmode and light mode
    <div className={`body ${darkMode ? "darkmode" : ""}`}>
      
    {number === -1 ? (
      //first page
      <Home handleNextQuestion={handleNextQuestion} darkmodetoggle={darkmodetoggle} darkMode={darkMode}/>
      //when clicking on start btn the number increments and the game page will be loaded
    ) : number >= 0 && number <= 4 ? (
      <QuestionBox number={number} handleNextQuestion={handleNextQuestion} setCorrectAnswers={setCorrectAnswers} darkmodetoggle={darkmodetoggle} darkMode={darkMode}/>
    ) : (
      <Result correctAnswers={correctAnswers} resetQuiz={resetQuiz} darkMode={darkMode} darkmodetoggle={darkmodetoggle} />
    )}
  </div>
  );
}