const express = require('express');
const router = express.Router();

const Order = require('../models/orders.model');


router.get('/orders', async (req, res) => {
  try {
    const result = await Order.find();
    if (!result) res.status(400).json({ category: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/orders', async (req, res) => {
  try {
    console.log('serwer req', req.body);
    const orderItem = req.body.items;
    const shippingAddress = req.body.shipping;
    const payment = req.body.payment;
    const shippingPrice = req.body.shippingPrice;
    const userId = req.body.userId;
    const totalPrice = req.body.totalPrice;
    const createDate = new Date();

    req.session.login = 'Kodilla';

    req.session.cart = {
      products: [
        {id: 123, count: 3, notes: 'red shirt with black print'},
      ],
    };

    console.log(req.session.login); // Kodilla
    console.log(req.session.cart.products.id); // 123

    const newOrder = new Order({ shippingAddress, orderItem, payment, shippingPrice, userId, totalPrice, createDate });
    await newOrder.save();
    console.log('newOrder', newOrder);
    res.json(newOrder);
  }

  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/orders/:id', async (req, res) => {
  try {
    const result = await Order.findById(req.params.id);
    if (!result) res.status(400).json({ category: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/orders/user/:id', async (req, res) => {
  try {
    const result = await Order.find({ idUser: req.params.id });
    if (!result) res.status(400).json({ category: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
