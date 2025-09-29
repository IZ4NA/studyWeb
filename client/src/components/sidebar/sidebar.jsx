import React from "react";
import "./sidebar.css";

import {Link} from "react-router-dom"

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
        <li><Link to="/gets">Gets</Link></li>
        <li><Link to="/posts">Post</Link></li>
        <li><Link to="/puts">Put</Link></li>
        <li><Link to="/deletes">Deletes</Link></li>
       </ul>
      </div>


      <div>
        <Link to="dialogs">Dialogs</Link>
      </div>


      <div>
        <h2>Hoks</h2>
        <ul>
          <li><Link to="/usestates">UseState</Link></li>
          <li><Link to="/useefects">UseEfect</Link></li>
          <li><Link to="/usecontexts">UseContext</Link></li>
        </ul>
      </div>


      <div>
        <Link to="/cruds">Cruds</Link>
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
