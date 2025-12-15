const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
  img: String
});

const CartSchema = new mongoose.Schema({
  sessionId: String,
  items: [CartItemSchema]
});

module.exports = mongoose.model("Cart", CartSchema);
