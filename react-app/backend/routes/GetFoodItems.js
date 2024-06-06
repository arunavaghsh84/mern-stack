const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get(
    '/foodItems',
    async (req, res) => {
        try {
            const foodCategories = await mongoose.connection.db.collection('foodCategory');

            await foodCategories.find({}).toArray().then((data) => {
                global.foodCategories = data;
            })

            res.json({ foodItems: global.foodItems, foodCategories: global.foodCategories });
        } catch (error) {
            console.log(error);

            res.json({ success: false });
        }
    },
);

module.exports = router;
