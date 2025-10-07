import React from "react";
import Cards from "../../compents/simples/card.jsx";
import Menu from "../../compents/menu/menu.jsx";
import Accordion from "../../compents/acordion/acorddion.jsx";
import Tab from "../../compents/tabs/tabs.jsx"

import "./dialog.css";

export default function Dialog(props) {
  return (
    <div className="dialog">
      <div className="conteiner-dialogs">
        
          <p>dialogs</p>
        
        <div className="studcards">
          <Cards />
          <Menu />
          <Accordion/>
          <Tab/>
        </div>
      </div>
    </div>
  );
}
