const { Schema, model } = require('mongoose');

const storySchema = new Schema({
    default: {
        type: Boolean,
        required: true
    },
    tutorial: {
        type: Boolean,
        required: true,
        default: false
    },
    firstGiant: {
        type: Boolean,
        required: true,
        default: false
    },

    theKing: {
        type: Boolean,
        required: true,
        default: false
    },
    twoGiants: {
        type: Boolean,
        required: true,
        default: false
    },
    theUnicorn: {
        type: Boolean,
        required: true,
        default: false
    },
    resolution: {
        type: Boolean,
        required: true,
        default: false
    },
});



const Story = model('Story', storySchema);

module.exports = Story;