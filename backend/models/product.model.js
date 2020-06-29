const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  describe: { type: String },
  category: { type: String },
  image: { type: String },
  countInStock: { type: Number },
});

module.exports = mongoose.model('Product', productSchema);
