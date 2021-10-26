var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");
const allProductControllers = require("../controllers/productsController");
/* add new Product. */
<<<<<<< HEAD
router.post("/product/:id", allProductControllers.addProduct);

// get all users
// getAll http://localhost:5000/admin/users
router.get("/users", allControllers.getAllUsers);
=======
router.post("/product/:id", allControllers.addProduct);

// get all users
// getAll http://localhost:5005/admin/users
router.get("/users", middleware.checkToken, allControllers.getAllUsers);
>>>>>>> f2f58644570059b4e1fc4aa6cc6ec8de7faeae38
// delete Product.



module.exports = router;
