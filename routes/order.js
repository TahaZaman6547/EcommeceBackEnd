const express = require('express');
const router = express.Router();
const Order = require('../models/order'); 
const authenticate = require('../middleware/authenticate');


router.post('/', authenticate, async (req, res) => {
  try {
    const { userId } = req;
    const { items } = req.body;
    const order = new Order({ userId, items });
    await order.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Order placement failed' });
  }
});

router.get('/', authenticate, async (req, res) => {
  try {
    const { userId } = req;
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
