var express = require("express");
const allControllers = require("../controllers/controller");

const middleware = require("../middlewares/middleware");
var router = express.Router();

//user route

/* GET users listing. */
router.post("/register", middleware.validator, allControllers.addUser);
router.post("/login", allControllers.login);
router.get("/logout", allControllers.logout);

module.exports = router;
