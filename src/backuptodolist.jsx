import { useState } from "react";
import PropTypes from "prop-types";

export default function TodoItem({ item, handleRemoveTask }) {
  const [isEditing, setIsEditing] = useState(false);
  // const [isEditedOnce, setIsEditedOnce] = useState(0)
  const [editingTask, setEditingTask] = useState(item);
  const [prevEdit, setPrevEdit] = useState(item);
  function handleSaveClick() {
    setIsEditing(false);
    // setIsEditedOnce(1)
    setPrevEdit(editingTask);
  }
  function handleCancelClick() {
    setEditingTask(prevEdit);
    setIsEditing(false);
  }
  return (
    <div className="tasks">
      {!isEditing && (
        <>
          <h4>{item}</h4>
          <button className="delete-btn" onClick={handleRemoveTask}>
            x
          </button>
          <button
            className="edit-btn"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            edit
          </button>
        </>
      )}
      {isEditing && (
        <input
          value={editingTask}
          onChange={(e) => setEditingTask(e.target.value)}
        />
      )}
      {isEditing && <button onClick={handleSaveClick}>save</button>}
      {isEditing && <button onClick={handleCancelClick}>cancel</button>}
    </div>
  );
}
TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
};
