const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post(
    '/login',
    async (req, res) => {
        try {
            const user = await User.findOne(
                { email: req.body.email });

            if (!user) {
                return res.json({ success: false });
            }

            const isMatch = await bcrypt.compare(req.body.password, user.password);

            if (!isMatch) {
                return res.json({ success: false });
            }

            const data = {
                id: user.id,
                name: user.name,
                email: user.email,
            };

            const token = jwt.sign(data, process.env.JWT_SECRET);

            res.json({ success: true, token });
        } catch (error) {
            console.log(error);

            res.json({ success: false });
        }
    },
);

module.exports = router;
