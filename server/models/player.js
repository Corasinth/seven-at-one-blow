const { Schema, model } = require('mongoose');

const userProfile = new Schema({
username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
},
password: {
    type: String,
    trim: true,
},
name: {
    type: String,
    trim: true,
},
playerSave: playerSaveSchema
});


const player = model('Player', userProfile);

module.export = player;