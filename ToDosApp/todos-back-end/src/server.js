const express = require("express");

const fakeTodos = [
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

app.get("/todos", (req, res) => {
  res.json(fakeTodos); //res.send(fakeTodos);
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
