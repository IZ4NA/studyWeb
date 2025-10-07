import React, { useState } from "react";

import "./menu.css";

export default function Card() {
  const [isOpenMneu, setIsOpenMenu] = useState(false);

  return (
    <div className="menu">
      <button className="button-option" onClick={() => setIsOpenMenu(!isOpenMneu)}> 
        opitions ⌄
      </button>

      {isOpenMneu && (
        <div className="drop-menu">
          <button className="button-drop-mmenu">✏️ Edit</button>
          <button className="button-drop-mmenu">📄 Duplicate</button>
          <button className="button-drop-mmenu">🗂️ Archive</button>
          <button className="button-drop-mmenu">🗑️ Delete </button>
        </div>
      )}
    </div>
  );
}
