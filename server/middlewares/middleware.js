const { verify } = require("jsonwebtoken");

const { User } = require("../model/casaverdeModel");
const middleware = {};
middleware.validator = async (req, res, next) => {
  //check User
  const userCheck = await User.findOne({ username: req.body.username });
  if (userCheck) {
    return res.status(400).send("This name is already been used");
  }
  //check email
  const email = req.body.email;
  var regEx = /\S+@\S+\.\S+/;
  if (!regEx.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }
  //check password
  const pass = req.body.password;
  const passConf = req.body.passwordConf;

  if (pass !== passConf) {
    return res.status(400).json({ message: "false Password!, Try Again" });
  }
  next();
};
//check authentication

middleware.checkToken = async (req, res, next) => {
  console.log(req.headers.authorization);

  // Take Bearer out
  const accessToken = req.headers.authorization.split(" ")[1];
  console.log(accessToken);
  if (accessToken == "null") {
    return res.json({ auth: false, message: "User NOT Authenticated!" });
  }
  try {
    const validToken = await verify(accessToken, process.env.TOKEN_TEXT);
    if (validToken) {
      // later as middleware
      // next();
      return res
        .status(200)
        .json({ auth: true, message: "User is Authenticated!" });
    } else {
      return res
        .status(404)
        .json({ auth: false, message: "You need to login!" });
    }
  } catch (err) {
    res.status(err.status).json({ auth: false, message: err.message });
  }
  next();
};
module.exports = middleware;
