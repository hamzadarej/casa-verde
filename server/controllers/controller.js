// Controller functions come here
const { User, Product } = require("../model/casaverdeModel");
const mongoose = require("mongoose");
const allControllers = {};
// https://mongoosejs.com/docs/populate.html
allControllers.addUser = async (req, res) => {
  try {
    const userCheck = await User.findOne({ username: req.body.username });
    console.log(userCheck);
    if (userCheck) {
      return res.status(400).send("This name is already been used");
    }
    const user = await new User({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      admin: req.body.admin,
    });

    await user.save();
    res.status(201).json({ message: "New user being added ✅", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// GET all users
allControllers.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};
module.exports = allControllers;
