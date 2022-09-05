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

 //Then the object the client has that's just our cloth Item runs its use method
 
//  function itemUse (optionalItemTarget) {
    //Checks the story object to see what chapter we're in

    //Checks to see if there's an optionalItemTarget, and if so if that target is one of the valid interactions stored on the item object
    
    // Returns a string/calls a function that prints the appropriate text to the console
 
    //If the function is called and we're in the wrong area or using the object on the wrong target, return a string/call a function that prints an error message to the terminal like 'those objects can't be used together'
//  }

function itemInteraction(args) {
    console.log(args)}

    module.exports = itemInteraction
// // TEMP STUFF
// itemSchema.methods.deliverScript = async function (chapter, stage, inInventory, optionalTargetItem) {
//     //Check the relevant stages matrix on the item object for any matches, and set the script coordinates to the returned position if there is a match 
//     let regularPosition = checker (this.relevantStages, chapter, stage, optionalTargetItem);
//     let coordinates = scriptCoordinates[regularPosition];

//     //If the incoming chapter and stage turn up no results in the regular stages, we check the inventory stages and overwrite the result
//     if (inInventory && !coordinates) {
//         let inventoryPosition = checker (this.requiredInInventoryStages, chapter, stage, optionalTargetItem);
//         coordinates = inventoryScriptCoordinates[inventoryPosition];
//     }
//     //Returns the coordinates, or if there were no matches simply returns false 
//     return coordinates || false;
// };

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

