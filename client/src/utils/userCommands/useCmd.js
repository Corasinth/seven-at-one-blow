//User inputs a command 'use cloth on flies'

//terminal package runs function 

function onUse (arg1, arg2, arg3) {
    arg1 = needle
    arg2 = on
    arg3 = cloth
 
    let coordinates 

    for (name in [1]) {
         if (name === arg1) {
             coordinates = keyObj[name].deliverScript(arg3)
         }
     }
     if (coordinates === false){
        return 'error'
     }
 }

 export default onUse
//Some kind of query returns an array of item objects, a player object, and our one story object (see models)

const keyObj = {};

function populateKeyObj (itemArray) {
    for (let item of itemArray) {
        keyObj[item.name] = item
    }
}

// keyObj = {
//     needle: {
//         "name":"needle",
//         "relevantStages":[
//             [0, 1],
//             [0, 3]
//         ],
//         "scriptCoordinates":[
//             [0, 4]
//         ],
//         "requiredInInventoryStages":[
//             [4, 0]
//         ],
//         "inventoryScriptCoordinates":[
//             [4, 1]
//         ]
//     },
//     jam: {
//         "name":"jam",
//         "relevantStages":[
//             [0, 0]
//         ],
//         "scriptCoordinates":[
//             [0, 1]
//         ],
//         "requiredInInventoryStages":[],
//         "inventoryScriptCoordinates":[]
//     }
//     //add others
// }

// const player = playerData
// const story = storyData 

// function itemInteraction(args){
//     let currentStoryCoordinates = player.storySave 
//     let inInventory = player.inventory.includes(args[1]) //where args[1] is 'needle' or whatever the object is 
// }




// function itemInteraction(args) {
//     for (name in keyObj) {
//         if (name === arg1) {
//             coordinates = keyObj[name].deliverScript(arg3)
//         }
//     }
//     if (coordinates === false){
//        return 'error with use cmd'
//     }
// }

// module.exports = itemInteraction


// // TEMP STUFF
async function deliverScript (chapter, stage, inInventory, optionalTargetItem) {
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

// function checker (matrixToCheck, chapter, stage, optionalTargetItem) {
//     let position
//     //Checks the incoming current chapter and stage against the item's relevantStages
//     for (let i = 0; i < matrixToCheck.length; i++) {
//         //If a match is found, checks if there's something this item needs to be used on, and if so makes sure that item has also been passed in 
//         if (matrixToCheck[i][0] === chapter && matrixToCheck[i][1] === stage) {
//             if (this.relevantStages[i][2]) {
//                 if (this.relevantStages[i][2] === optionalTargetItem) {
//                     position = i;
//                     break;
//                 } else {
//                     continue;
//                 }
//             }
//             position = i;
//             break;
//         }
//     }
//     return position; 
// }

