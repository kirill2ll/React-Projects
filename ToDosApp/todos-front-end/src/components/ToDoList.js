import React from "react";
import ToDoListItem from "./ToDoListItem";
import { Card } from "react-bootstrap";

const ToDoList = ({ todos, onCompleteToDo, onDeleteToDo }) => {
  return (
    <Card>
      <Card.Body>
        {todos.map((todo) => (
          <ToDoListItem
            key={todo._id}
            todo={todo}
            onClickComplete={onCompleteToDo}
            onClickDelete={onDeleteToDo}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default ToDoList;
