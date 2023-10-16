import React from "react";
import { Card, Button } from "react-bootstrap";

const ToDoListItem = ({ todo, onClickComplete, onClickDelete }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{todo.text}</Card.Title>
        {todo.isCompleted && <p>Complete!</p>}
        <Button variant="success" onClick={() => onClickComplete(todo._id)}>
          Mark as Completed
        </Button>
        <Button variant="danger" onClick={() => onClickDelete(todo._id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ToDoListItem;
