const mongoose = require('mongoose');

const { Schema } = mongoose;

const productModle = new Schema({
  productName: { type: String },
  productCode: { type: String },
  releaseDate: { type: String },
  description: { type: String },
  price: { type: Number },
  starRating: { type: Number },
  imageUrl: { type: String },
});

const modle = mongoose.model('Product', productModle);

module.exports = modle;
