const express = require('express');
const router = express.Router();

const Product = require('../models/product.model');

router.get('/products', async (req, res) => {

  try {

    req.session.login = 'Kodilla';

    req.session.cart = {
      products: [
        {id: 123, count: 3, notes: 'red shirt with black print'},
      ],
    };

    console.log(req.session); // Kodilla
    console.log(req.session.cart.products[0].id); // 123




    const result = await Product.find();
    if (!result) res.status(400).json({ product: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
