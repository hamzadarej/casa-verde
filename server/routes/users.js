var express = require("express");
const allControllers = require("../controllers/controller");
var router = express.Router();

/* GET users listing. */
router.post("/", allControllers.addUser);
module.exports = router;
