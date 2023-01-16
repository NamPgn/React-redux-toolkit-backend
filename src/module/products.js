import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;
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
    type: ObjectId,
    ref: "Category"
  },
  price: {
    type: Number
  },
  select: {
    type: false
  }
}, { collection: "products" }, { timestamps: true });

export default mongoose.model("Products", productSchema);