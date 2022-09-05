const { Schema, model } = require('mongoose');

const scriptSchema = new Schema({
    textMatrix: {
        type: [Array],
        required: true,
    },
})

const Script = model('Script', scriptSchema);

module.exports = Script;