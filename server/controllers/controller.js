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
      _id: mongoose.Types.ObjectId(),
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
      avatar: req.file.path,
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
// Add new Product from admin
allControllers.addProduct = async (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user && user.admin && user.username == "sven") {
        const product = new Product({
          _id: new mongoose.Types.ObjectId(),
          user: req.params.id, // get the _id from that user which is in my params
          category: req.body.category,
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          // image: req.file.path,
          quantity: req.body.quantity,
        });
        product.save();
        console.log(user.basket);
        user.basket.push(product);
        console.log(user.basket);
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
// Add new Product from users
//616ec638b7d4def05aa683c5 bs for product id
//
allControllers.addToBasket = async (req, res) => {
  try {
  
//             Tareq's version 
//
//
    // it requres a {
    // "productId": "write the id of ur product"
    // "purchasedQuantity" : number (min 1)
    // }
    // basket: [
    //{productId:"ergest", purchasedQuantity: 2},
    // {productId:"45g5g4", purchasedQuantity: 4}]

    // if (user && product) {
    //   if (user.basket.some((item) => item.productId == req.body.productId)) {
    //     let existingProduct = user.basket.filter(
    //       (item) => item.productId == req.body.productId
    //     )[0];
    //     // = [... user.basket, ]
    //     existingProduct.purchasedQuantity =
    //       existingProduct.purchasedQuantity + req.body.purchasedQuantity;
    //     user.basket = user.basket
    //       .filter((item) => item.productId !== req.body.productId)
    //       .push(existingProduct);

    //     await user.save();
    //   } else {
    //     user.basket.push({
    //       productId: req.body.productId,
    //       purchasedQuantity: req.body.purchasedQuantity,
    //     });

    //     await user.save();
    //     console.log("hey");
    //   }

    //   console.log(user.basket.length);
    //   console.log(user.basket);
    //   res.status(201).json({ message: "Product added to basket ✅" });
    // } else {
    //   res.status(404).json({ message: "User or product not found" });
    // }// it requres a {
    // "productID": "write the id of ur product"
    // }
    const user = await User.findById(req.params.id);
    const product = await Product.findById(req.body.productId);
    if (user && product) {
      user.basket.push(product);
      user.save();
      res.status(201).json({ message: "Product added to basket ✅" });
    } else {
      res.status(404).json({ message: "User or product not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
allControllers.getCheckout = async (req, res) => {
  //we will get it from front end as obj  once the payment is done
  const placedOrder = true;
  try {
    const user = await User.findById(req.params.id);
    
    const product = await Product.find({
      _id: {
        $in: user.basket,
      },
    });
    //empty the basket
    // const basketupdater = await User.findByIdAndUpdate(req.params.id, {
    //   $set: {
    //     basket: [],
    //   },
    // });

    //console.log(user.basket);
      const quantityCounter ={}
      user.basket.forEach(function(item){
        quantityCounter[item._id] = quantityCounter[item._id] ? quantityCounter[item._id]+1 : 1;
      })
      
product.forEach((item) => {

  item.quantity = item.quantity + quantityCounter[item._id];
 // console.log(quantityCounter[item._id])
 
});
// const updatedProduct = await Product.findByIdAndUpdate(
//   {
//   $in: product,
// }, {
//   $set: {
//     quantity:  666,
   
//   },
// })
const updatedProduct= product.map((el)=> 

   async function(){
   
    await Product.findByIdAndUpdate(
      {
      $in: el._id,
    }, {
      $set: {
        quantity:  el.quantity,
       
      },
    }) });
   

    console.log(quantityCounter);
    console.log(product.map((el)=> `${el._id} only ${el.quantity} left`));
   
// update the db
 res.status(200).json({
      message:
        "inventory updated, thank u for ur purchase we hope to see u again ",updatedProduct
    });
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
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
// get all products from a user(sven) upon the id

allControllers.getOneByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("basket");
    // res.status(200).json(user);
    res.status(200).json({
      message: `${user.username} has ${user.basket.length} stuff in his basket`,
      basket: user.basket
        .map((item) => ` ${item.name} from ${item.category} `)
        .join(", "),
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
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
      const token = createToken(user);
      req.session.user = user;
      await res.json({
        auth: true,
        token,
        user: {
          password: user.password,
          username: user.username,
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
  res.cookie("token", "", { maxAge: 1 });
  res.redirect("/user/login");
};
allControllers.getDate = async (req, res) => {
  res.status(200).json("welcome to casaVerde");
};
module.exports = allControllers;
