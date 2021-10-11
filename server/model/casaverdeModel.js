//  population and ref
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  userName: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
    unique: true,
  },
  admin: Boolean,
  // the role ADMIN will have always a full basket with all the products
  password: { type: String, required: true },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  phone: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  country: { type: String },
  basket: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const productSchema = Schema({
  User: { type: Schema.Types.ObjectId, ref: "User" },
  category: {
    type: String,
    required: true,
    enum: [
      "Bouquet of flowers",
      "Flower and plants pots",
      "Gift baskets",
      "Italian Products",
    ],
  },

  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: false },
});

const Product = mongoose.model("Product", productSchema);

const User = mongoose.model("User", userSchema);

module.exports = { User, Product };
