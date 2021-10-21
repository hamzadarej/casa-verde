var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");

/* to view Products to http://localhost:5000/product/ */
router.get("/", allControllers.getAllProducts);
/* to view Products from a specific user or the admin (to view the basket) http://localhost:5000/product/616e93c53e129829c56c8f17 where id is the id of the user */
router.get("/:id", allControllers.getOneByID);

module.exports = router;
