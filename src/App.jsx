import "./App.css";
import React, { useState } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import MainPage from "./components/main-page/MainPage";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState(null);
  const [user_id, setUser_id] = useState(null);

  let token = window.localStorage.getItem("token");

  return (
    <div className="App">
      <Nav setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            !token ? (
              <LandingPage
                setIsLoggedIn={setIsLoggedIn}
                message={message}
                setMessage={setMessage}
                setUser_id={setUser_id}
              />
            ) : (
              <MainPage message={message} setMessage={setMessage} user_id={user_id} />
            )
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
