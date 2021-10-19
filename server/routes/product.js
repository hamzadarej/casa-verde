var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");

/* for display view Products to http://localhost:5002/product/ */
router.get("/", allControllers.getAllProducts);

module.exports = router;
