const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/get_item", async (req, res, next) => {
  try {
    let products = await Product.find({});
    res.json({
      status: "200",
      message: "OK",
      data: products,
    });
  } catch (error) {
    res.json(error);
  }
});

router.get("/get_item_by_id/:id", async (req, res, next) => {
  try {
    let products = await Product.findById(req.params.id);
    res.json({
      status: "200",
      message: "OK",
      data: products,
    });
  } catch (error) {
    res.json(error);
  }
});

router.post("/insert_item", async (req, res, next) => {
  try {
    const { name, price, quantity, description } = req.body;
    let products = await Product.create({
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    });
    res.json({
      status: "200",
      message: "OK",
    });
  } catch (error) {
    res.json(error);
  }
});

router.post("/update_item/:id", async (req, res, next) => {
  try {
    const { id, name, price, quantity, description } = req.body;
    let products = await Product.updateOne(
      { _id: id },
      { name: name, price: price, quantity: quantity, description: description }
    );
    res.json({
      status: "200",
      message: "OK",
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
