import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  descriptions: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: Number
  }
}, { collection: "products" }, { timestamps: true });

export default mongoose.model("Products", productSchema);