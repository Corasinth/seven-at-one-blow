const { Schema, model } = require('mongoose');

const chapterSchema = new Schema({
    currentChapter: {
        type: Boolean,
        required: true,
        default: true
    },
    chapterNumber: {
        type: Number,
        required: true,
    },
    stageTracker: {
        type: Number 
    }
})

const storySchema = new Schema({
    default: {
        type: Boolean,
        required: true
    },
    discoveringGreateness: chapterSchema,
    giantTrials: chapterSchema, 
    royalTrifle: chapterSchema,
    NarrowEscape: chapterSchema,
    RegalResolve: chapterSchema,
});

const Story = model('Story', storySchema);

module.exports = Story;