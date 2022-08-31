const { Schema, model } = require('mongoose');

const storySchema = new Schema ({ 
   placeholderStage: {
    type: Boolean,
    required: true,
    default: false 
   } 
});

const Story = model('Story', storySchema);

module.exports = Story;