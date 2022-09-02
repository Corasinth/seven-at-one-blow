const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userProfileSchema = new Schema({
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
    playerSave: {
        type: Schema.Types.ObjectId,
    }
});


// hash password
userProfileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next()
});

//Use item method
playerSchema.methods.use = async function (item, optionalItemTarget) {
    switch (item) {
        case 'SomeItem':
            Placeholder.use(optionalItemTarget)
            break;

        case 'SomeItem':
            Placeholder.use(optionalItemTarget)
            break;

        case 'SomeItem':
            Placeholder.use(optionalItemTarget)
            break;

        case 'SomeItem':
            Placeholder.use(optionalItemTarget)
            break;

        case 'SomeItem':
            Placeholder.use(optionalItemTarget)
            break;

        default:
            `That can't help me here` 
            break;
    }
};

const player = model('Player', userProfile);

module.exports = player;