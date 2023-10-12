const express = require("express");
const uuid = require("uuid");

let fakeTodos = [
  {
    id: "123",
    text: "Go to the grocery store",
    isCompleted: false,
  },
  {
    id: "124",
    text: "Learn full stack",
    isCompleted: true,
  },
];

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  res.json(fakeTodos); //res.send(fakeTodos);
});

app.post("/todos", (req, res) => {
  const newTodoText = req.body.newTodoText;
  const newTodo = {
    id: uuid.v4(),
    text: newTodoText,
    isCompleted: false,
  };
  fakeTodos.push(newTodo);
  res.json(newTodo);
});

app.delete("/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId; // we get the todoId from url
  fakeTodos = fakeTodos.filter((todo) => todo.id !== todoId);
  res.json(fakeTodos);
});

app.put("/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const todo = fakeTodos.find((todo) => todo.id === todoId);
  todo.isCompleted = true;
  res.json(fakeTodos);
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
