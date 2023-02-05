import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";

const Filter = () => {
  const { filter, filterChoices, handleFilter, filteredTodos, setTodos } =
    useContext(TodoContext);

  const handleDeleteAll = () => {
    setTodos((prev) => prev.filter((todo) => todo.completed !== true));
  };

  return (
    <div className="filter__container">
      <div className="filter">
        <span className="filter__left">
          {filteredTodos.length} {filteredTodos.length <= 1 ? "item" : "items"}{" "}
          left
        </span>
        <div className="filter__btns">
          {filterChoices.map((each, index) => (
            <button
              className={`btn ${filter === each ? "active" : ""}`}
              onClick={() => handleFilter(each)}
              key={index}
            >
              {each}
            </button>
          ))}
          <span className="tooltip">Drag and drop to reorder list</span>
        </div>
        <button onClick={handleDeleteAll} className="btn">
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Filter;
