import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register.jsx";
import Login from "./components/login.jsx";
import Game from "./components/game.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;

