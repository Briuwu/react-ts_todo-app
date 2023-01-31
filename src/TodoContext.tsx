import React, { createContext, ReactElement, useState } from "react";

interface TodoTasks {
  id: number;
  completed: boolean;
  task: string;
}

const initialState = [
  { id: 1, completed: true, task: "Complete online JavaScript course" },
  { id: 2, completed: false, task: "Jog Around the park 3x" },
  { id: 3, completed: false, task: "10 minutes meditation" },
  { id: 4, completed: false, task: "Read for 1 hour" },
  { id: 5, completed: false, task: "Pick up groceries" },
  { id: 6, completed: false, task: "Complete Todo App on Frontend Mentor" },
];

type TodoContextProviderType = {
  children?: ReactElement | undefined;
};

interface TodoContextType {
  todos: TodoTasks[];
  completeTask: (id: number) => void;
  addTask: (task: string) => void;
  removeTask: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: initialState,
  completeTask: () => {},
  addTask: () => {},
  removeTask: () => {},
});

export const TodoContextProvider = ({ children }: TodoContextProviderType) => {
  const [todos, setTodos] = useState<TodoTasks[]>(initialState);

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
    <TodoContext.Provider value={{ todos, completeTask, addTask, removeTask }}>
      {children}
    </TodoContext.Provider>
  );
};
