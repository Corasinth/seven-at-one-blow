const { Schema, model } = require('mongoose');

const monsterAttributes = new Schema({
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

const monsters = model('Monsters', monsterAttributes); 

module.export = monsters;