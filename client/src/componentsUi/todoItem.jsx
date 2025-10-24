import { useState } from "react";

export const TodoItem = ({ id, label, complete }) => {
  const handleRemoveItem = () => {
    onRemove();
    setList([
      ...list.filter((item) => {
        item.id !== listItem.id;
      }),
    ]);
  };



  return (
    <div>
      {list.map((listItem) => (
        <li key={id}>
          {label}
          {complete ? "concluido" : ""}

          <button onClick={handleCompleteItem}>concluir</button>

          <button onClick={handleRemoveItem}>delete</button>
        </li>
      ))}
    </div>
  );
};
