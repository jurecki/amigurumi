const express = require('express');
const router = express.Router();

const Cart = require('../models/cart.model');


router.post('/cart', async (req, res) => {
  try {
    console.log('serwer cart', req.body);
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;

    req.session.cart = {
      products: [
        {id: name, count: price, notes: 'red shirt with black print'},
      ],
    };

    console.log(req.session.cart);

    const newCart = new Cart({ name, price, image, qty: '1'});
    await newCart.save();
    console.log('newCart', newCart);
    res.json(newCart);
  }

  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
