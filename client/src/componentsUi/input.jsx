import { useRef, useState } from "react";

export const InputAdd = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const countRef = useRef(null);

  const handleClickAdd = () => {
    onAdd(value);
    setValue("");
    countRef.current.focus();
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        ref={countRef}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={handleClickAdd}>adicionar</button>
    </div>
  );
};
