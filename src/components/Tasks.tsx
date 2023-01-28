import React from "react";

interface TodoTasks {
  id: number;
  completed: boolean;
  task: string;
}

interface TasksProps {
  todos: TodoTasks[];
}
[];

const Tasks = ({ todos }: TasksProps) => {
  return (
    <div className="tasks">
      {todos.map((item) => (
        <div key={item.id} className="tasks__each">
          <span className="circle"></span>
          <p>{item.task}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
