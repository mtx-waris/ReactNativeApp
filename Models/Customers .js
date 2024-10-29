const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street:String,
    city:String,
    postalCode:Number
  });

const CustomerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: Number,
    createdDate:String,
    address: {
      type: addressSchema
    }
  
  },
  {
    collection: "Customers",
  }
);
mongoose.model("Customers", CustomerSchema);