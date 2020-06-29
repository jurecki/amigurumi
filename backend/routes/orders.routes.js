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

module.exports = router;
