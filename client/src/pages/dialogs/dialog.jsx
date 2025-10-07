import React from "react";
import Cards from "../../compents/simples/card.jsx";
import Menu from "../../compents/menu/menu.jsx";

import "./dialog.css";

export default function Dialog(props) {
  return (
    <div className="dialog">
      <div className="conteiner-dialogs">
        
          <p>dialogs</p>
        
        <div className="studcards">
          <Cards />
          <Menu />
        </div>
      </div>
    </div>
  );
}
