const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    quantity: Number,
    description: String,
  },
  { collection: "item_data" }
);

module.exports = mongoose.model("Product", ProductSchema, "item_data");
