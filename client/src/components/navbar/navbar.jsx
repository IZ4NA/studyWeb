import React from "react";
import "./navbar.css";

import {Link} from "react-router-dom"


function Navbar() {
  return (
    <div className="navbar">
      <div className="conteiner-navbar">
        <div>
          <input className="search" type="text" placeholder="search..." />
        </div>

        <div className="navbar-right">
          <div className="light">
            <p>L</p>
          </div>

          
          <Link className="button-login" to="/login">Login</Link>
          <Link className="button-register" to="/register">Register</Link>
         
          
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
