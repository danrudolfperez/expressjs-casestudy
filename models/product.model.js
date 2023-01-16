const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  producttitle: {
    type: String,
    required: true,
    minlength: 3
  },
  productdescription: {
    type: String,
  },
  productprice: {
    type: Number,
    required: true,
  },
  businessid: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;