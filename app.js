const express = require("express");

const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const date = addDays(new Date(), 100);

  response.send(
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
