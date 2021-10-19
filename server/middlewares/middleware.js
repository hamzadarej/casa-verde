// middleware functions come here

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
  // const pass = req.body.password;
  // const passConf = req.body.passwordConf;

  // if (pass !== passConf) {
  //   return res.status(400).json({ message: "false Password!, Try Again" });
  // }
  next();
};
module.exports = middleware;
