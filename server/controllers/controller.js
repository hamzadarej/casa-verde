// Controller functions come here
const { User, Product } = require("../model/casaverdeModel");
const mongoose = require("mongoose");
const allControllers = {};
// https://mongoosejs.com/docs/populate.html
allControllers.addUser = async (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    userName: req.body.username,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    admin: req.body.admin,
  });
  try {
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
