import tempData from './tempItem.json'
import tempStory from './tempStory.json'


const keyObj = {};

function populateKeyObj (itemArray) {
    for (let item of itemArray) {
        keyObj[item.name] = item
    }
}
populateKeyObj(tempData)
console.log(keyObj)


const player = {
    storySave: [0,0],
    inventory: []
}


 function itemInteraction(args) {
    const chapter = player.storySave[0]
    const stage = player.storySave[1]
    const inInventory = player.inventory.includes(args[1])
    const optionalTargetItem = args[3]
    let dialogue
    console.log(typeof player.storySave[0])


    for (let key in keyObj) {
        if (key === args[1]) {
            dialogue = deliverScript(keyObj[key], chapter, stage, inInventory, optionalTargetItem)
            if (dialogue){
                playerObjUpdater(args[0], args[1])
                return dialogue
             } else {
                return 'You cannot use that here!'
             }
        }
     }     
}

 function playerObjUpdater(interactParam, objName){
    const playerArr = player.storySave
    player.storySave = [playerArr[0], playerArr[1] + 1]    
    //change temp story to story.chapters
    console.log(tempStory[0])
    if (player.storySave[1] === tempStory[0].chapters[player.storySave[0]].numberOfStages) {
        const playerChapt = player.storySave
        player.storySave = [playerChapt[0] + 1, 0]
        // function to deploy a new chapter
        // function chapterGenerator () {
        //     if (player.storySave[0] === tempStory[0].chapters[player.storySave[0]].numberOfStages) {
        //     } 
        // }
    }

    if (interactParam === 'take') {
        player.inventory.push
    }
 }


function deliverScript (item, chapter, stage, inInventory, optionalTargetItem) {
    //Check the relevant stages matrix on the item object for any matches, and set the script coordinates to the returned position if there is a match 
    let regularPosition = checker (item.relevantStages, chapter, stage, optionalTargetItem);
    let coordinates = item.scriptCoordinates[regularPosition];
    let finalString
    //If the incoming chapter and stage turn up no results in the regular stages, we check the inventory stages and overwrite the result
    if (inInventory && !coordinates) {
        let inventoryPosition = checker (item.requiredInInventoryStages, chapter, stage, optionalTargetItem);
        coordinates = item.inventoryScriptCoordinates[inventoryPosition];
    }
 
    if (coordinates) {
        finalString = tempStory[0].textMatrix [coordinates[0]][coordinates[1]]
    } 
    return finalString || false;
};

function checker (matrixToCheck, chapter, stage, optionalTargetItem) {
    let position
    //Checks the incoming current chapter and stage against the item's relevantStages
    for (let i = 0; i < matrixToCheck.length; i++) {
        //If a match is found, checks if there's something this item needs to be used on, and if so makes sure that item has also been passed in 
        if (matrixToCheck[i][0] === chapter && matrixToCheck[i][1] === stage) {
            if (matrixToCheck[i][2]) {
                if (matrixToCheck[i][2] === optionalTargetItem) {
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

export default itemInteraction