const { Schema, model } = require('mongoose');

const monsterSchema = new Schema({
default: {
    type: Boolean,
    required: true
},
name: {
    type: String,
},
strength: {
    type: Number,
},
health: {
    type: Number,
}
});

const Monster = model('Monster', monsterSchema); 

module.exports = Monster;