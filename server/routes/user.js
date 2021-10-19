var express = require("express");
<<<<<<< HEAD
const allControllers = require("../controllers/controller");

const middleware = require("../middlewares/middleware");
var router = express.Router();

//user route

/* GET users listing. */
router.post("/register", middleware.validator, allControllers.addUser);
router.post("/login", allControllers.login);
router.get("/logout", allControllers.logout);

=======
var router = express.Router();
const allControllers = require("../controllers/controller");
const middleware = require("../middlewares/middleware");

//user route

// register http://localhost:5005/user/register
router.post("/register", middleware.validator, allControllers.addUser);

// login http://localhost:5005/user/login 
router.post("/login", allControllers.login);

// register http://localhost:5005/user/logout
router.get("/logout", allControllers.logout);

//the login and the logout part and checkAuth works only on the browser
router.get("/checkAuth", middleware.checkToken);

>>>>>>> 949613dcc830da22942590b8943d57589112145f
module.exports = router;
