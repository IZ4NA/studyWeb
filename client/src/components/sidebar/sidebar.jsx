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

        <div className="conteiner-dialogs">
        <Link to="/">Home</Link>
      </div>

      <div>
        <p>API rest</p>
       <ul className="rotasApis">
        <li><Link to="/getPage">Gets</Link></li>
        <li><Link to="/postPage">Post</Link></li>
        <li><Link to="/putPage">Put</Link></li>
        <li><Link to="/deletePage">Deletes</Link></li>
       </ul>
      </div>


      <div className="conteiner-dialogs">
        <Link to="/dialogsPage">Dialogs</Link>
      </div>


      <div>
        <p>Hoks</p>
        <ul className="hooks-list">
          <li><Link to="/statePage">UseState</Link></li>
          <li><Link to="/efectsPage">UseEfect</Link></li>
        </ul>
      </div>


      <div className="conteiner-cruds">
        <Link to="/crudsPage">Cruds</Link>
      </div>

       <div className="conteiner-cruds">
        <Link to="/todlist">TodList</Link>
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
