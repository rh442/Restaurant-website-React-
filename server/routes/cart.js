const express = require("express");
const Cart = require("../models/Cart.js");
const router = express.Router();

router.get("/:sessionId", async (req, res) => {
  const cart = await Cart.findOne({ sessionId: req.params.sessionId });
  res.json(cart || { items: [] });
});

router.post("/add", async (req, res) => {
  const { sessionId, item } = req.body;

  let cart = await Cart.findOne({ sessionId });

  if (!cart) {
    cart = new Cart({ sessionId, items: [item] });
  } else {
    const existing = cart.items.find(i => i.name === item.name);
    if (existing) existing.qty += item.qty;
    else cart.items.push(item);
  }

  await cart.save();
  res.json(cart);
});

router.post("/increase", async (req, res) => {
  try {
    const { sessionId, itemId } = req.body;
    const cart = await Cart.findOne({ sessionId });
    
    if (cart) {
      const item = cart.items.id(itemId);
      if (item) {
        item.qty += 1;
        await cart.save();
      }
    }
    
    res.json(cart);
  } catch (err) {
    console.error("Increase error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/decrease", async (req, res) => {
  try {
    const { sessionId, itemId } = req.body;
    const cart = await Cart.findOne({ sessionId });
    
    if (cart) {
      const item = cart.items.id(itemId);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) {
          cart.items.pull(itemId);
        }
        await cart.save();
      }
    }
    
    res.json(cart);
  } catch (err) {
    console.error("Decrease error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.delete("/clear", async (req, res) => {
  try {
    const { sessionId } = req.body;
    const cart = await Cart.findOne({ sessionId });
    
    if (cart) {
      cart.items = [];
      await cart.save();
    }
    
    res.json({ message: "Cart cleared" });
  } catch (err) {
    console.error("Clear error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;