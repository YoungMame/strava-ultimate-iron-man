const express = require("express");
const app = express();
var log = require("loglevel");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  log.info(`listenning ${port}!`);
});
