import express from "express";
import { MongoClient, ObjectId } from "mongodb";

// const express = require("express");
// const uuid = require("uuid");

const start = async () => {
  const client = await MongoClient.connect(
    "mongodb://127.0.0.1:27017/fullstack-todos",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = client.db("fullstack-todos");

  const app = express();
  app.use(express.json());

  app.get("/todos", async (req, res) => {
    const todos = await db.collection("todos").find({}).toArray();
    res.json(todos);
  });

  app.post("/todos", async (req, res) => {
    const newTodoText = req.body.newTodoText;
    const newTodo = {
      text: newTodoText,
      isCompleted: false,
    };
    const result = await db.collection("todos").insertOne(newTodo);
    // const todo = await db.collection("todos").findOne({ _id: result.insertedId });
    res.json({
      ...newTodo,
      _id: result.insertedId,
    });
  });

  app.delete("/todos/:todoId", async (req, res) => {
    const todoId = req.params.todoId; // we get the todoId from url
    await db.collection("todos").deleteOne({ _id: new ObjectId(todoId) });
    const todos = await db.collection("todos").find({}).toArray();
    res.json(todos);
  });

  app.put("/todos/:todoId", async (req, res) => {
    const todoId = req.params.todoId;
    await db
      .collection("todos")
      .updateOne(
        { _id: new ObjectId(todoId) },
        { $set: { isCompleted: true } }
      );
    const todos = await db.collection("todos").find({}).toArray();
    res.json(todos);
  });

  app.listen(8080, () => {
    console.log("server is listening on port 8080");
  });
};

start();
