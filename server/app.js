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
// Mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });
app.use("/", indexRouter);
app.use("/users", usersRouter);
//
// get all users and add new user (only for experimenting)

// Exporting App
module.exports = app;
