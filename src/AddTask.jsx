import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function AddTask({ onAddTask }) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddTask(value);
        setValue("");
      }}
      className="form"
    >
      <input
        placeholder="get groceries, go for a walk, etc.."
        className="input-box"
        required
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="add-btn fa-solid fa-plus"></button>
    </form>
  );
}
