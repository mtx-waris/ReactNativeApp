const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: String,
    stockQuantity: Number,
    category:String,
    createdDate:String
  
  },
  {
    collection: "Products",
  }
);
mongoose.model("Products", ProductSchema);