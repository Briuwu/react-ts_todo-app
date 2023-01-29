import React from "react";
import checkIcon from "../images/icon-check.svg";

interface TodoTasks {
  id: number;
  completed: boolean;
  task: string;
}

interface TasksProps {
  todos: TodoTasks[];
  completeTask: (id: number) => void;
}
[];

const Tasks = ({ todos, completeTask }: TasksProps) => {
  return (
    <div className="tasks">
      {todos.map((item) => (
        <div key={item.id} className="tasks__each">
          <span
            onClick={() => completeTask(item.id)}
            className={`circle ${item.completed ? "complete" : ""}`}
          >
            {item.completed && <img src={checkIcon} alt="" />}
          </span>
          <p className={`${item.completed ? "complete" : ""}`}>{item.task}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
