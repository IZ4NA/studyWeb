import React from "react";
import "./sidebar.css";

import Logo from "../../assets/img/logoWhite.png"


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="conteiner-sidebar">
       <img src={Logo} alt="fail" />

       <a href="/home">Home</a>

      </div>
    </div>
  );
}

export default Sidebar;
