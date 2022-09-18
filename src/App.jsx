import "./App.css";
import React, { useState } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import MainPage from "./components/main-page/MainPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <h1>This is the parent app for all components</h1>
      {!isLoggedIn ? <LandingPage setIsLoggedIn={setIsLoggedIn} /> : <MainPage />}
    </div>
  );
}

export default App;
