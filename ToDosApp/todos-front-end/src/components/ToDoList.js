import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todos, onCompleteToDo, onDeleteToDo }) => {
  return (
    <div>
      {todos.map((todo) =>   {
        <ToDoListItem
          key={todo.id}
          todo={todo}
          onClickComplete={onCompleteToDo}
          onClickDelete={onDeleteToDo}
        />;
      })}
    </div>
  );
};

export default ToDoList;
