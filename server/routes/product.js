var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");
const allProductControllers = require("../controllers/productsController");
/* to view Products to http://localhost:5000/product/ */
router.get("/", allProductControllers.getAllProducts);

<<<<<<< HEAD
=======
/* to view Products to http://localhost:5000/product/ */
router.get("/", allControllers.getAllProducts);
/* to view Products from a specific user or the admin (to view the basket) http://localhost:5000/product/616e93c53e129829c56c8f17 where id is the id of the user */
router.get("/:id", allControllers.getOneByID);
>>>>>>> f2f58644570059b4e1fc4aa6cc6ec8de7faeae38

module.exports = router;
