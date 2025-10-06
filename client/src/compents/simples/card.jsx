import React, { useState } from "react";

import "./card.css";

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      <div className="conteiner-card">
        <div>
          <h3>teste de dialog</h3>
          <p>aqui eu estou testando um dialog simples com um redenrizaçãocondicional</p>
        </div>
        <button onClick={() => setIsOpen(true)} className="buttom-dialog">Abrir</button>

        {isOpen && (
          <div className="dialogOverlay">
            <div className="dialogOpem">
              <div>
                <h3>Dialog Aberto</h3>
                <p>Deseja realmente fechar?</p>
              </div>
              <button onClick={() => setIsOpen(false)}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
