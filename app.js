const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRouter = require("./routes/user.route");
app.use("/api/user", userRouter);

require("./config/db");

app.get("/", (req, res) => {
  res.send(`<h1>Default Home Page! </h1>`);
});

app.use((req, res, next) => {
  res.status(404);
  res.send(`<h1>Page Not Found</h1>`);
});

app.use((err, req, res, next) => {
  res.status(500);
  res.send(err);
});

const cors = require("cors");
app.use(cors);

module.exports = app;
