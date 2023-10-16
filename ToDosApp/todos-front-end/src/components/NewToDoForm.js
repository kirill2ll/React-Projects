import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const NewToDoForm = ({ onClickCreate }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          value={inputValue}
          placeholder="Enter a new todo..."
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={() => {
          onClickCreate(inputValue);
          setInputValue("");
        }}
      >
        Create
      </Button>
    </Form>
  );
};

export default NewToDoForm;
