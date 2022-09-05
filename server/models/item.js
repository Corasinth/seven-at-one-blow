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
    requiredInInventoryStages: {
        type: [Array],
        required: false
    },
    scriptCoordinates: {
        type: [Array],
        required: true
    },
    inventoryScriptCoordinates: {
        type: [Array],
        required: false
    }
});

itemSchema.methods.deliverScript = async function (chapter, stage, inInventory, optionalTargetItem) {
    //Check the relevant stages matrix on the item object for any matches, and set the script coordinates to the returned position if there is a match 
    let regularPosition = checker (this.relevantStages, chapter, stage, optionalTargetItem);
    let coordinates = scriptCoordinates[regularPosition];

    //If the incoming chapter and stage turn up no results in the regular stages, we check the inventory stages and overwrite the result
    if (inInventory && !coordinates) {
        let inventoryPosition = checker (this.requiredInInventoryStages, chapter, stage, optionalTargetItem);
        coordinates = inventoryScriptCoordinates[inventoryPosition];
    }
    //Returns the coordinates, or if there were no matches simply returns false 
    return coordinates || false;
};

function checker (matrixToCheck, chapter, stage, optionalTargetItem) {
    let position
    //Checks the incoming current chapter and stage against the item's relevantStages
    for (let i = 0; i < matrixToCheck.length; i++) {
        //If a match is found, checks if there's something this item needs to be used on, and if so makes sure that item has also been passed in 
        if (matrixToCheck[i][0] === chapter && matrixToCheck[i][1] === stage) {
            if (this.relevantStages[i][2]) {
                if (this.relevantStages[i][2] === optionalTargetItem) {
                    position = i;
                    break;
                } else {
                    continue;
                }
            }
            position = i;
            break;
        }
    }
    return position; 
}
const Item = model('Item', itemSchema);

module.exports = Item;