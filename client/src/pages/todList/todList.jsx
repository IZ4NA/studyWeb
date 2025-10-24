import React, { useState } from "react";
import { InputAdd } from "../../componentsUi/input";
import { TodoItem } from "../../componentsUi/todoItem";

export default function useEfects() {
  // const [value, setValue] = useState("");
  const [list, setList] = useState([
    { id: "1", label: "teste 1" , complete: false},
    { id: "2", label: "teste 2" , complete: false},
    { id: "3", label: "teste 3" , complete: false},
    { id: "4", label: "teste 4" , complete: false},
  ]);

  const handleAdd = (newItem) =>{ // funçao de add do component input passado por um prosps
    setList([...list, {id: list.length + 1, label: newItem, complete: false}])
  }

  //listitem esta vazio
  const handleRemoveItens = (listItem) =>[
    setList([...list.filter((item) =>{ item.id !== listItem.id }) ])
  ]

    const handleCompleteItem = () => {
    setList([
      ...list.map((item) => ({
        ...item,
        complete: item.id === listItem.id ? true : item.complete,
      })),
    ]);
  };

  //dps eu vou salval no localStorage
  return (
    <div>
      <p>page todlist</p>
      <h4>novo produto</h4>

      <InputAdd onAdd={handleAdd}/>


      <ol>
        <TodoItem
        key={listItem.id}
          id={listItem.id}
          label={listItem.label}
          complete={listItem.complete}

          onRemjove
        />
      </ol>
    </div>
  );
}
