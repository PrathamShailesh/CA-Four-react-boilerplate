import React from "react";

const Home = ({ handleNextQuestion ,darkmodetoggle,darkMode}) => {
  return (
    <div className="bll">
    <div className="home_page">
      <div className="home_dark"><div className="darkm" onClick={darkmodetoggle}>{darkMode ? "Light Mode" : "Dark Mode"}</div></div>
      <h1>React Quiz</h1>
      <button onClick={handleNextQuestion}>Start</button>
    </div>
    </div>
  );
};

export default Home;