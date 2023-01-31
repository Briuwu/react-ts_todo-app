import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import checkIcon from "../images/icon-check.svg";
import crossIcon from "../images/icon-cross.svg";

const Tasks = () => {
  const { todos, completeTask, removeTask } = useContext(TodoContext);

  const sortedTodos = todos.sort((a, b) => b.id - a.id);

  return (
    <div className="tasks">
      {sortedTodos.map((item) => (
        <div key={item.id} className="tasks__each">
          <button
            onClick={() => completeTask(item.id)}
            className={`circle ${item.completed ? "complete" : ""}`}
          >
            {item.completed && <img src={checkIcon} alt="" />}
          </button>
          <p className={`${item.completed ? "complete" : ""}`}>{item.task}</p>
          <button onClick={() => removeTask(item.id)} className="remove btn">
            <img src={crossIcon} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
