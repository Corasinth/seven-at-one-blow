const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    interactions: {
        type: [String],
        required: true
    },
    relevantStages: {
        type: [Array],
        required: true
    }
});

itemSchema.methods.deliverScript = async function (chapter, stage) {
    for (let i = 0; i < this.relevantStages.length; i++) {
        if(this.relevantStages[i][0]=== chapter && this.relevantStages[i][1] === stage) {
            return script.textMatrix[chapter][stage]
        }
    }
    return `${this.name} can't be used here.`
};

const Item = model('Item', itemSchema);

module.exports = Item;