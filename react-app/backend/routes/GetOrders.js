const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/users/:id/orders', async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.id });
        res.json({ orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;
