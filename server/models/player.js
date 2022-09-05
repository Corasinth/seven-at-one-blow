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
    save: {
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

//Use item method
playerSchema.methods.use = async function (item, optionalItemTarget) {
    switch (item.toLowerCase()) {
        case 'needle':
            return (Placeholder.use(optionalItemTarget))

        case 'SomeItem':
            return (Placeholder.use(optionalItemTarget))

        case 'SomeItem':
            return (Placeholder.use(optionalItemTarget))

        case 'SomeItem':
            return (Placeholder.use(optionalItemTarget))

        case 'SomeItem':
            return (Placeholder.use(optionalItemTarget))

        default:
            `That can't help me here` 
            break;
    }
};

const Player = model('Player', playerSchema);

module.exports = Player;