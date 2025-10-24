import { useState } from "react";

export const InputAdd = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleClickAdd = () => {
    onAdd(value);
    setValue("");
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={handleClickAdd}>adicionar</button>
    </div>
  );
};
