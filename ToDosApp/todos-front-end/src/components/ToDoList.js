import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todos, onCompleteToDo, onDeleteToDo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <ToDoListItem
            key={todo._id}
            todo={todo}
            onClickComplete={onCompleteToDo}
            onClickDelete={onDeleteToDo}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
