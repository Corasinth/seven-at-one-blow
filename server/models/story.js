const { Schema, model } = require('mongoose');

const chapterSchema = new Schema({
    chapterName: {
        type: String,
        required: true,
    },
    chapterNumber: {
        type: Number,
        required: true,
    },
    numberOfStages: {
        type: Number, 
        required:true
    }
})

const storySchema = new Schema({
    chapters: [chapterSchema],
    textMatrix: {
        type: [Array],
        required: true,
    },
});

const Story = model('Story', storySchema);

module.exports = Story;