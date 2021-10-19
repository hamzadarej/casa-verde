var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");

/* add new Product. */
// to addd only from http://localhost:5000/admin/product/616e93c53e129829c56c8f17 where 616e93c53e129829c56c8f17 is the id of sven
router.post("/product/:id", allControllers.addProduct);

// get all users
// getAll http://localhost:5000/admin/users
router.get("/users", allControllers.getAllUsers);
// delete Product.

// update Product

module.exports = router;
