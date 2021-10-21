var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");
const middleware = require("../middlewares/middleware");
/* add new Product. */
router.post("/product", allControllers.addProduct);
// get all products
router.get("products", allControllers.getAllProducts);
// get all users
// getAll http://localhost:5005/admin/users
router.get("/users", allControllers.getAllUsers);
// delete Product.

// delete Product.

module.exports = router;
