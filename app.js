const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Node App - NGINX</h1>");
});

app.listen(5005, () => {
  console.log("App listening on port 5005!");
});
