import { useState } from "react";
import Filter from "./components/Filter";
import InputTask from "./components/InputTask";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";

interface TodoTasks {
  id: number;
  completed: boolean;
  task: string;
}

function App() {
  const [todos, setTodos] = useState<TodoTasks[]>([
    { id: 1, completed: true, task: "Complete online JavaScript course" },
    { id: 2, completed: false, task: "Jog Around the park 3x" },
    { id: 3, completed: false, task: "10 minutes meditation" },
    { id: 4, completed: false, task: "Read for 1 hour" },
    { id: 5, completed: false, task: "Pick up groceries" },
    { id: 6, completed: false, task: "Complete Todo App on Frontend Mentor" },
  ]);

  function completeTask(id: number) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  }

  function addTask(task: string) {
    setTodos((prev) => [
      ...prev,
      { id: todos.length + 1, completed: false, task: task },
    ]);
  }

  function removeTask(id: number) {
    const taskToRemove = todos.filter((todo) => {
      return id !== todo.id;
    });

    setTodos(taskToRemove);
  }

  return (
    <main className="app">
      <div className="container">
        <Navbar />
        <InputTask addTask={addTask} />
        <Tasks
          todos={todos}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      </div>
    </main>
  );
}

export default App;
