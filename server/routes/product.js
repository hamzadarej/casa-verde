var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");

/* add new Product. */
router.post("/product", allControllers.addProduct);

module.exports = router;
