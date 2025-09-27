import React from "react";
import "./sidebar.css";

import Logo from "../../assets/img/logoWhite.png"


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="conteiner-sidebar">

        <div className="top-logo">
       <img src={Logo} alt="fail" />
        {/* <p>IZANASTUDY</p> */}
        </div>

      <div>
        <h2>API rest</h2>
       <ul className="rotasApis">
        <li><a href="/gets">Get</a></li>
        <li><a href="/posts">Post</a></li>
        <li><a href="/puts">Put</a></li>
        <li><a href="/deletes">Deletes</a></li>
       </ul>
      </div>


      <div>
        <a href="/dialogs">Dialogs</a>
      </div>


      <div>
        <h2>Hoks</h2>
        <ul>
          <li><a href="/usestates">UseState</a></li>
          <li><a href="/useefects">UseEfect</a></li>
          <li><a href="/usecontexts">UseContext</a></li>
        </ul>
      </div>


      <div>
        <a href="/cruds">Cruds</a>
      </div>


      <div className="conteiner-perfil">
        <div className="perfil">
          <div className="foto"></div>
          <p>nome</p>
          <p>aluno full-stack</p>

          <p>sair</p>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Sidebar;
