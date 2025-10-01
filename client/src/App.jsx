import React from "react";
import './App.css'; 

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./components/sidebar/sidebar.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./pages/home.jsx"
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx"


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SideBar />
        <div className="main-content">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
