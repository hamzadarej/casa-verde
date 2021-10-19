// Initializing Dependencies
<<<<<<< HEAD
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var bodyParser = require("body-parser");

// Initializing Routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/user");
var ProductRouter = require("./routes/product");
=======
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// Initializing Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var ProductRouter = require('./routes/product');
>>>>>>> 949613dcc830da22942590b8943d57589112145f

var app = express();
// Initialize && Use Cors
const cors = require('cors');

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
// Setting up Dependencies
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// mongoDB

<<<<<<< HEAD
const mongoose = require("mongoose");
=======
const mongoose = require('mongoose');
>>>>>>> 949613dcc830da22942590b8943d57589112145f
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
<<<<<<< HEAD
  .then(console.log("DB is connected 😎"))
=======
  .then(console.log('DB is connected 😎'))
>>>>>>> 949613dcc830da22942590b8943d57589112145f
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

// Alow uploads
<<<<<<< HEAD
app.use("/uploads", express.static("uploads"));
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
=======
app.use('/uploads', express.static('uploads'));
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
>>>>>>> 949613dcc830da22942590b8943d57589112145f
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: function (req, file, cb) {
    if (
<<<<<<< HEAD
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg .gif .png files are OK"), false);
    }
  },
});
// use routes

app.use("/users", indexRouter);
app.use("/user", usersRouter);
app.use("/product", upload.single("image"), ProductRouter);
=======
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/gif'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Only .jpg .gif .png files are OK'), false);
    }
  },
});
// Initializing Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
// use routes

app.use('/users', indexRouter);
app.use('/user', usersRouter);
app.use('/product', upload.single('image'), ProductRouter);
>>>>>>> 949613dcc830da22942590b8943d57589112145f

// Exporting App
module.exports = app;
