// Initializing Dependencies
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");

// Initializing Routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// Setting up Dependencies
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// mongoDB

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

// use routes

app.use("/", indexRouter);
app.use("/register", usersRouter);

// Exporting App
module.exports = app;
