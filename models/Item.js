const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    material: {
        type: String
    }
})

module.exports = mongoose.model('Items', ItemSchema);