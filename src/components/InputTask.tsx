import React, { useRef, useContext } from "react";
import { TodoContext } from "../TodoContext";

const InputTask = () => {
  const { addTask } = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (typeof inputRef.current?.value === "string") {
      if (inputRef.current.value.trim() === "") return;
      addTask(inputRef.current.value);
      inputRef.current.value = "";
    }
  }
  return (
    <form className="input" onSubmit={handleSubmit}>
      <span className="circle"></span>
      <input ref={inputRef} type="text" placeholder="Create a new todo..." />
    </form>
  );
};

export default InputTask;
