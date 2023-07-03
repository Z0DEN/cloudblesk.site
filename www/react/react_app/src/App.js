import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import About from "./About";
import Register from "./Register";
import Login from "./Login";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link">О проекте</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Регистрация</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Вход</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Navigation;
