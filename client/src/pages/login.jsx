import React, { useState } from "react";

import "../styles/login.css";
import { Link } from "react-router";
import { useAuth } from "../context/context";

export default function Login() {
  const { login } = useAuth(); // pega o método login do contexto
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  const handleLogin = (e) => {
    e.preventDefault();

    const fakeToken = "fsdfsd4523fcds"

    login(email, fakeToken)
    console.log("login realizado", email)
  };


  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <div className="conteiner-login">
          <h3>Login</h3>

          <div className="inputs-login">
            <input value={email} onChange={(e) =>setEmail(e.target.value)} type="text" placeholder="@email" />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />
          </div>
          <button type="submit" className="button-singIn">sing-in</button>

          <Link to="/register">register</Link>
        </div>
      </form>
    </div>
  );
}
