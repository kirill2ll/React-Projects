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

  const createTodo = (todoText) => {};

  const completeTodo = (todoId) => {};

  const deleteTodo = (todoId) => {};

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
