// Controller functions come here
const { User, Product } = require("../model/casaverdeModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { createToken } = require("../JWT-check");

const allControllers = {};

// Add new User
allControllers.addUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await new User({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      admin: req.body.admin,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country,
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
// Add new Product
allControllers.addProduct = async (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        const product = new Product({
          _id: new mongoose.Types.ObjectId(),
          user: req.params.id, // get the _id from that author which is in my params
          category: req.body.category,
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          image: req.file.path,
          quantity: req.body.quantity,
        });
        product.save();
        user.products.push(product);
        user.save();
        res
          .status(201)
          .json({ message: "New product being added ✅", product });
      } else {
        return res.status(404).json({ message: "user NOT Found" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
//get all products
allControllers.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};
// Login
allControllers.login = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const user = await User.findOne({ username });
  if (user == null) {
    return res.status(404).json({ message: "Cannot find user" });
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      const token = createToken(user);
      res.json({
        auth: true,
        token,
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    } else {
      res.json({
        message: "Not Allowed, please check your username or password",
      });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
allControllers.logout = async (req, res) => {
  res.cookie("token-key", "", { maxAge: 1 });
  res.redirect("/");
};
<<<<<<< HEAD
=======
allControllers.getDate = async (req, res) => {
  res.status(200).json("welcome to casaVerde");
};
>>>>>>> 949613dcc830da22942590b8943d57589112145f
module.exports = allControllers;
