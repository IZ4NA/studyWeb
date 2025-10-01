import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="conteiner-navbar">
        <div>
          <input className="search" type="text" />
        </div>

        <div className="navbar-right">
          <div className="light">
            <p>L</p>
          </div>

          <div className="perfil-user-top"></div>

          <div className="info-perfil">
            <p>Nome</p>
            <p>alunos full-stack</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
