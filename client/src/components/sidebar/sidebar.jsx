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
        <p>API rest</p>
       <ul className="rotasApis">
        <li><Link to="/gets">Gets</Link></li>
        <li><Link to="/posts">Post</Link></li>
        <li><Link to="/puts">Put</Link></li>
        <li><Link to="/deletes">Deletes</Link></li>
       </ul>
      </div>


      <div className="conteiner-dialogs">
        <Link to="/dialogs">Dialogs</Link>
      </div>


      <div>
        <p>Hoks</p>
        <ul className="hooks-list">
          <li><Link to="/usestates">UseState</Link></li>
          <li><Link to="/useefects">UseEfect</Link></li>
          <li><Link to="/usecontexts">UseContext</Link></li>
        </ul>
      </div>


      <div className="conteiner-cruds">
        <Link to="/cruds">Cruds</Link>
      </div>


      <div className="conteiner-perfil">
        <div className="perfil">
          <div className="perfil-left">
            
          <div className="foto"></div>

          <div className="mid-perfil">
          <p>nome</p>
          <p>aluno full-stack</p>
          </div>
          </div>

          <p className="sair">sair</p>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Sidebar;
