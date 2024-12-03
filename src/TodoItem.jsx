import { useState } from "react";
import PropTypes from "prop-types";

export default function TodoItem({
  item,
  handleRemoveTask,
  handleEditTask,
  handleMarkAsComplete,
  showTodos,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(item);

  function handleSaveClick() {
    setIsEditing(false);
    handleEditTask(editingTask);
  }
  function handleCancelClick() {
    setIsEditing(false);
    setEditingTask(item);
  }
  return (
    <div className="tasks">
      {!isEditing && (
        <>
          <h4 className="todo" onClick={() => handleMarkAsComplete()}>
            {item}
          </h4>
          <div>
            {showTodos && (
              <button
                className="delete-btn fa-solid fa-trash"
                onClick={handleRemoveTask}
              ></button>
            )}
            {showTodos && (
              <button
                className="edit-btn fa-solid fa-pen-to-square"
                onClick={() => setIsEditing(true)}
              ></button>
            )}
          </div>
        </>
      )}
      {isEditing && (
        <>
          <input
            value={editingTask}
            onChange={(e) => setEditingTask(e.target.value)}
            className="edit-todo-box"
          />
          <div>
            <button
              className="cancel-btn fa-solid fa-xmark"
              onClick={handleCancelClick}
            ></button>
            <button
              className="save-btn fa-solid fa-check"
              onClick={handleSaveClick}
            ></button>
          </div>
        </>
      )}
    </div>
  );
}
TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
  handleMarkAsComplete: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  showTodos: PropTypes.bool.isRequired,
};
