var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");
/* GET home page. */
<<<<<<< HEAD
router.get("/", allControllers.getAllUsers);
=======
//the home page will done soon sofar we have something in DB to get its
// http://localhost:5005
router.get("/", allControllers.getDate);
>>>>>>> 949613dcc830da22942590b8943d57589112145f

module.exports = router;
