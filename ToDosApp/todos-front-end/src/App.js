import logo from "./logo.svg";
import "./App.css";
import NewToDoForm from "./components/NewToDoForm";
import ToDoList from "./components/ToDoList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const response = await axios.get("/todos");
      setTodos(response.data);
    };

    loadTodos();
  }, []);

  const createTodo = async (todoText) => {
    const response = await axios.post("/todos", { newTodoText: todoText });
    const newTodo = response.data;
    setTodos([...todos, newTodo]);
  };

  const completeTodo = async (todoId) => {
    const response = await axios.put(`/todos/${todoId}`);
    setTodos(response.data);
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
    <>
      <h1>My Todos</h1>
      <NewToDoForm onClickCreate={createTodo}></NewToDoForm>
      <ToDoList
        todos={todos}
        onCompleteToDo={completeTodo}
        onDeleteToDo={deleteTodo}
      ></ToDoList>
    </>
  );
}

export default App;
