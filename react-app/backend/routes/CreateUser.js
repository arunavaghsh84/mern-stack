const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post(
    '/createUser',
    body('email', 'Please enter a valid email')
        // ...mark the field as optional
        .optional()
        // ...and when it's present, trim its value, then validate it as an email address
        .trim()
        .isEmail(),

    body('password', 'Please enter a valid password').trim().isLength({ min: 6 }),
    body('name', 'Please enter a valid name').trim().isLength({ min: 3 }),
    body('location', 'Please enter a valid location').trim().isLength({ min: 3 }),
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            console.log(result.array());
            return res.status(400).json({ errors: result.array() });
        }

        try {
            await User.create(req.body);

            res.json({ success: true });
        } catch (error) {
            console.log(error);

            res.json({ success: false });
        }
    },
);

module.exports = router;
