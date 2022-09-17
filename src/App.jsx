import "./App.css";
import React from "react";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <h1>This is the parent app for all components</h1>
      <LandingPage />
    </div>
  );
}

export default App;
