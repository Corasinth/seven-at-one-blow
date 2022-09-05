const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const saveSchema = new Schema({})

const playerSchema = new Schema({
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
    storySave: {
        type: [Number],
        default: [0,1]
    },
    inventory: {
        type: [String]
    }
});


// hash password
playerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next()
});

const Player = model('Player', playerSchema);

module.exports = Player;