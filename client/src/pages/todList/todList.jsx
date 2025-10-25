import React, { useState } from "react";
import { InputAdd } from "../../componentsUi/input";
import { TodoItem } from "../../componentsUi/todoItem";

export default function useEfects() {
  const [list, setList] = useState([
    { id: "1", label: "teste 1", complete: false },
    { id: "2", label: "teste 2", complete: false },
    { id: "3", label: "teste 3", complete: false },
    { id: "4", label: "teste 4", complete: false },
  ]);

  // funçao de add do component input passado por um prosps
  const handleAdd = (newItem) => {
    setList([
      ...list,
      { id: list.length + 1, label: newItem, complete: false },
    ]);
  };

  //listitem esta vazio
  const handleRemoveItems = (id) => {
  setList([
    ...list.filter((item) => item.id !== id)
  ] );
};

  const handleCompleteItem = (id) => {
    setList([
      ...list.map((item) => ({
        ...item,
        complete: item.id === id ? true : item.complete,
      })),
    ]);
  };

  //dps eu vou salval no localStorage
  return (
    <div>
      <p>page todlist</p>
      <h4>novo produto</h4>

      <InputAdd onAdd={handleAdd} />

      <ol>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}

            onRemove={() => handleRemoveItems(listItem.id)}
            onCompleteItem={() => handleCompleteItem(listItem.id)}
          />
        ))}
      </ol>
    </div>
  );
}
