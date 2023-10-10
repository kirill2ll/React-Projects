const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
