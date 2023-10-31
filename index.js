const express = require("express");

const app = express(),
  prt = process.env.PORT || 3000;

app.get("/", (_request, response) => {
  response.send({ hello: "you" });
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
