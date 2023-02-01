import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import checkIcon from "../images/icon-check.svg";
import crossIcon from "../images/icon-cross.svg";

import { DragDropContext, Draggable, DragUpdate } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../StrictModeDroppable";

const Tasks = () => {
  const { todos, completeTask, removeTask, setTodos } = useContext(TodoContext);

  const handleOnDragEnd = (result: DragUpdate) => {
    if (!result?.destination) return;

    const tasks = [...todos];
    const [reorderItem] = tasks.splice(result.source.index, 1);
    tasks.splice(result.destination.index, 0, reorderItem);
    setTodos(tasks);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="tasks"
          >
            {todos.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="tasks__each"
                  >
                    <button
                      onClick={() => completeTask(item.id)}
                      className={`circle ${
                        item.completed ? "complete" : ""
                      } btn`}
                    >
                      {item.completed && <img src={checkIcon} alt="" />}
                    </button>
                    <p className={`${item.completed ? "complete" : ""}`}>
                      {item.task}
                    </p>
                    <button
                      onClick={() => removeTask(item.id)}
                      className="remove btn"
                    >
                      <img src={crossIcon} alt="" />
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Tasks;
