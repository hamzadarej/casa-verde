var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");
const middleware = require("../middlewares/middleware");

//user route
// get all products
router.get("/products", allControllers.getAllProducts);
// register http://localhost:5005/user/register
router.post("/register", middleware.validator, allControllers.addUser);

// login http://localhost:5005/user/login
router.post("/login", allControllers.login);

// register http://localhost:5005/user/logout
router.get("/logout", allControllers.logout);

//the login and the logout part and checkAuth works only on the browser
router.get("/checkAuth", middleware.checkToken);
//when the user adds to basket a product that only sven can create http://localhost:5002/user/:id where the :id is the id of the user ....
// it requres req.body.productID  => {
// "productID": "write the id of ur product"
// }
/* with get to view Products from a specific user or the admin (to view the basket) http://localhost:5000/product/616e93c53e129829c56c8f17 where id is the id of the user */
router.post("/:id", allControllers.addToBasket).get("/:id", allControllers.getOneByID);
router.patch("/checkout/:id", allControllers.getCheckout);
module.exports = router;
