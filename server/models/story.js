const { Schema, model } = require('mongoose');

const chapterSchema = new Schema({
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
    discoveringGreateness: chapterSchema,
    giantTrials: chapterSchema,
    royalTrifle: chapterSchema,
    NarrowEscape: chapterSchema,
    RegalResolve: chapterSchema,
    textMatrix: {
        type: [Array],
        required: true,
    },
});

const Story = model('Story', storySchema);

module.exports = Story;