import React from "react";

const ToDoListItem = ({ todo, onClickComplete, onClickDelete }) => {
  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      <button onClick={() => onClickComplete(todo.id)}>
        Mark as completed
      </button>
      <button onClick={() => onClickDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default ToDoListItem;
