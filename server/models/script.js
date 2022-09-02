const { Schema, model } = require('mongoose');

const scriptSchema = new Schema({
    placeholder: {
        type: String,
        required: true
    },
});


const Script = model('Script', scriptSchema);

module.exports = Script;