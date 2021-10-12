var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");
/* GET home page. */
router.get("/", allControllers.getAllUsers);

module.exports = router;
