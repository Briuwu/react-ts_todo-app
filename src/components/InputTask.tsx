import React, { useRef } from "react";

interface InputTaskProps {
  addTask: (task: string) => void;
}

const InputTask = ({ addTask }: InputTaskProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (typeof inputRef.current?.value === "string") {
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
