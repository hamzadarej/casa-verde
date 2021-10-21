var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");
const middleware = require("../middlewares/middleware");
/* add new Product. */
router.post("/product/:id", allControllers.addProduct);

// get all users
// getAll http://localhost:5000/admin/users
router.get("/users", allControllers.getAllUsers);
// delete Product.

// delete Product.

module.exports = router;
