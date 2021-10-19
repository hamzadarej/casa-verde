var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");
/* GET home page. */
//the home page will done soon sofar we have something in DB to get its

router.get("/", allControllers.getDate);

module.exports = router;
