
export const TodoItem = ({ id, label, complete, onRemove, onCompleteItem }) => {
  return (
    <div>
      <li key={id}>
        {label}
        {complete ? "concluido" : ""}

        <button onClick={onCompleteItem}>concluir</button>

        <button onClick={onRemove}>delete</button>
      </li>
    </div>
  );
};
