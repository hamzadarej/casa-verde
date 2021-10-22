var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");

/* to view Products to http://localhost:5000/product/ */
router.get("/", allControllers.getAllProducts);


module.exports = router;
