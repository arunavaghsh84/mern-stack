const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    total: {
        type: Number,
        required: true,
    },
    items: [
        {
            _id: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            size: {
                type: String,
                required: true,
            },
            amount: {
                type: Number,
                required: true,
            },
        },
    ],
});

module.exports = mongoose.model('Order', orderSchema);
