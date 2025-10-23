import React, { useState } from "react";

export default function useEfects() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    { id: "1", label: "teste 1" },
    { id: "2", label: "teste 2" },
    { id: "3", label: "teste 3" },
    { id: "4", label: "teste 4" },
  ]);

  //dps eu vou salval no localStorage
  return (
    <div>
      <p>page todlist</p>

      <h4>novo produto</h4>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={() => {
          setList([...list, { id: String(list.length + 1), label: value }]);
          setValue("");
        }}
      >
        adicionar
      </button>

      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>
            {listItem.label}
            
            <button
              onClick={() =>
                setList([...list.filter((item) => item.id !== listItem.id)])
              }
            >
              delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
