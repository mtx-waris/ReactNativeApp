const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    productId: String,
    price: String,
    quantityInStock: Number,
    lastUpdated:String
  
  },
  {
    collection: "Inventory",
  }
);
mongoose.model("Inventory", InventorySchema);