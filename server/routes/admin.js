var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");

/* add new Product. */
router.post("/product", allControllers.addProduct);

// get all users 
// getAll http://localhost:5005/admin/users
router.get("/users", allControllers.getAllUsers);
// delete Product. 

// update Product


module.exports = router;
