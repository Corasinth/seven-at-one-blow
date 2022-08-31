const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userProfile = new Schema({
default: {
    type: Boolean,
    required: true
},
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


// hash password
userProfile.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next()
});





const player = model('Player', userProfile);

module.export = player;