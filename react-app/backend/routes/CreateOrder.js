const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/createOrder', async (req, res) => {
    try {
        await Order.create({
            userId: req.body.userId,
            date: req.body.date,
            total: req.body.total,
            items: req.body.items,
        });

        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;
