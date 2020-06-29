const mongoose = require('mongoose');

const orderSchema = new mongoose.SchemaType({
  orederItem: { type: Array },
  shipping: { type: Object },
  payment: { type: Object },
  idUser: { type: String },
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
});

module.exports = mongoose.model('Order', orderSchema);
