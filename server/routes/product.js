var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");



/* add new Product. */
router.get("/", allControllers.getAllUsers);

module.exports = router;
