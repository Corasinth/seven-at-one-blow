const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    relevantStages: {
        type: [Array],
        required: true
    },
    stagesRequiredInInventory: {
        type: [Array],
        required: false
    },
    returnScript: {
        type: [Number],
        required: true
    }
});

itemSchema.methods.deliverScript = async function (chapter, stage, optionalTargetItem) {
    //Establishes variables so the checker function can access the parameters
    let chapter = chapter;
    let stage = stage;
    let optionalTargetItem = optionalTargetItem;

    let inventoryChecker = checker (this.requiresInventoryStages);
    let regularChecker = checker (this.relevantStages);
    //If either of the above functions returns true, this method returns true 
    return 
};

function checker (matrixToCheck) {
    let correctStage = false
    //Checks the incoming current chapter and stage against the item's relevantStages
    for (let i = 0; i < this.relevantStages.length; i++) {
        //If a match is found, checks if there's something this item needs to be used on, and if so makes sure that item has also been passed in 
        if (matrixToCheck[i][0] === chapter && matrixToCheck[i][1] === stage) {
            if (this.relevantStages[i][2]) {
                if (this.relevantStages[i][2] === optionalTargetItem) {
                    correctStage = true
                    break;
                } else {
                    continue;
                }
            }
            correctStage = true;
            break;
        }
    }
    if (correctStage === true) {
        //Returns true if the incoming chapter and stage are appropriate for the use of the item 
        return true;
    }
    return false 
}
const Item = model('Item', itemSchema);

module.exports = Item;