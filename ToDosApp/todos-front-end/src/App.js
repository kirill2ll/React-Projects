import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    const loadTodos = async () => {
      const response = await axios.get("/todos");
      setTodos(response.data);
    };

    loadTodos();
  }, []);

  const createTodo = async () => {
    if (!newTodoText) {
      return;
    }
    try {
      const response = await axios.post("/todos", { newTodoText });
      const newTodo = response.data;
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const completeTodo = async (todoId) => {
    try {
      const response = await axios.put(`/todos/${todoId}`);
      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      const response = await axios.delete(`/todos/${todoId}`);
      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>My Todos</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter a new todo..."
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={createTodo}>
                Create
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <ListGroup>
            {todos.map((todo) => (
              <ListGroup.Item key={todo._id}>
                <div>
                  <h3>{todo.text}</h3>
                  {todo.isCompleted && <p>Complete!</p>}
                  <Button
                    variant="success"
                    onClick={() => completeTodo(todo._id)}
                  >
                    Mark as Completed
                  </Button>
                  <Button variant="danger" onClick={() => deleteTodo(todo._id)}>
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
