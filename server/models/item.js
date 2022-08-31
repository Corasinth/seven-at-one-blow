const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    interactions: {
        type: String,
        required: true
    }
});

const Item = model('Item', itemSchema);

module.exports (Item);