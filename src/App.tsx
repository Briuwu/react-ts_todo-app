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
  ]);

  return (
    <main className="app container">
      <Navbar />
      <InputTask />
      <Tasks todos={todos} />
    </main>
  );
}

export default App;
