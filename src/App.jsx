import { Fragment, useState } from "react";
import AddTask from "./AddTask.jsx";
import "./App.css";
import TodoItem from "./TodoItem.jsx";

const TABS = [{ name: "todos" }, { name: "completed" }];
function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  console.log(tasks);
  function handleMarkAsComplete(indexToEdit) {
    setTasks((prevState) => {
      prevState[indexToEdit] = { ...prevState[indexToEdit], isCompleted: true };
      console.log(indexToEdit, prevState);
      return [...prevState];
    });
  }

  function handleAddTask(value) {
    setTasks((prevState) => {
      return [...prevState, { name: value, isCompleted: false }];
    });
  }
  function handleEditTask(indexToEdit, newValue) {
    setTasks((prevState) => {
      prevState[indexToEdit].name = newValue;
      return [...prevState];
    });
  }
  function handleRemoveTask(indexToRemove) {
    setTasks((prevState) =>
      prevState.filter((task, index) => index !== indexToRemove)
    );
  }
  return (
    <div className="container">
      <h1 className="header">Todo List</h1>
      <AddTask onAddTask={handleAddTask} />
      <nav>
        <ul className="tabs">
          {TABS.map((item, index) => (
            <li key={index}>
              <button
                className={`nav-button ${selectedTab === index ? "active" : ""}`}
                onClick={() => setSelectedTab(index)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {(selectedTab === 0
        ? tasks.filter((item) => !item.isCompleted).length > 0
        : tasks.filter((item) => item.isCompleted).length > 0) && (
        <div className="todo-list">
          {tasks.map((item, index) => (
            <Fragment key={index}>
              {(selectedTab === 0 ? !item.isCompleted : item.isCompleted) && (
                <TodoItem
                  item={item.name}
                  handleRemoveTask={() => handleRemoveTask(index)}
                  handleEditTask={(value) => handleEditTask(index, value)}
                  handleMarkAsComplete={() => handleMarkAsComplete(index)}
                  showTodos={selectedTab === 0}
                />
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
