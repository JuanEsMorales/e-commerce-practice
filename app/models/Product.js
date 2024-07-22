const { Schema, models, model } = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  picture: String,
  category: String,
})

const Product = models?.Product || model("Product", ProductSchema)

export default Product