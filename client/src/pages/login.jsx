import React from "react";

import "../styles/login.css";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="login">
      <form>
        <div className="conteiner-login">
          <h3>Login</h3>

          <div className="inputs-login">
            <input type="text" placeholder="@email" />
            <input type="password" placeholder="password" />
          </div>
          <button className="button-singIn">sing-in</button>

          <Link to="/register">register</Link>
        </div>
      </form>
    </div>
  );
}
