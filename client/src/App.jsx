import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./components/sidebar/sidebar.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./pages/home.jsx";

import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

import Get from "./pages/apirest/get/get.jsx";
import Post from "./pages/apirest/post/post.jsx";
import Put from "./pages/apirest/put/put.jsx";
import Delete from "./pages/apirest/delete/delete.jsx";


import Efects from "./pages/hooks/useEffects/useffects.jsx"
import States from './pages/hooks/useState/useStates.jsx';
import Context from "./pages/hooks/context/context.jsx"


import Dialogs from "./pages/dialogs/dialog.jsx";

import Cruds from "./pages/crud/crud.jsx";
import Todlist from "./pages/todList/todList.jsx"

import Animation from "./pages/animation/animation.jsx";

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

            <Route path="/getPage" element={<Get />} />
            <Route path="/postPage" element={<Post />} />
            <Route path="/putPage" element={<Put />} />
            <Route path="/deletePage" element={<Delete />} />


            <Route path="/efectsPage" element={<Efects />} />
            <Route path="/statePage" element={<States />} />
            <Route path="/contextPage" element={<Context />} />



            <Route path="/dialogsPage" element={<Dialogs />} />

            <Route path="/crudsPage" element={<Cruds />} />

            <Route path="/todlist" element={<Todlist />} />


            <Route path="/animationsPage" element={<Animation />} />
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
