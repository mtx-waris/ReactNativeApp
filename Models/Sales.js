const mongoose = require("mongoose");

// Item schema for item details in the booking
const itemSchema = new mongoose.Schema({
    productId: {type: String },
    quantity: { type: Number},
    unitPrice:Number,
    totalPrice:Number
  });
const saleSchema = new mongoose.Schema(
  {
    customerId: String,
    saleDate: String,
    totalAmount: Number,
    paymentMethod: String,
    status:String,
    itemDetail: {
      type: itemSchema,
      required: true,
    }
  
  },
  {
    collection: "Sales",
  }
);
mongoose.model("Sales", saleSchema);