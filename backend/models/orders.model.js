const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderItem: { type: Array },
  shippingAddress: { type: Object },
  payment: { type: Object },
  idUser: { type: String },
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
  id: { type: String },
  createDate: { type: Date },
});

module.exports = mongoose.model('Order', orderSchema);
