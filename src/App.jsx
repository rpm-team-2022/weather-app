import "./App.css";
import React, { useState } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import MainPage from "./components/main-page/MainPage";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Nav setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <LandingPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            ) : (
              <MainPage />
            )
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
