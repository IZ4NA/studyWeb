import React from "react";
import { Link } from "react-router";

import "../styles/register.css"

export default function register() {
  return (
    <div>
        <form >
      <div className="register">
        <div className="conteiner-register">
          <h3>register</h3>

          <div className="inputs-register">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="@email" />
            <input type="password" placeholder="password" />
          </div>
          <button className="button-registers">register</button>

          <Link to="/login">login</Link>
        </div>
      </div>
      </form>
    </div>
  );
}
