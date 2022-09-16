 function itemInteraction(initialArgs, state) {
    const story = state.story;
    const items = state.items; 
    let player = state.player;
    
    if (!player.storySave) {
        return ['Please log in or sign up before trying to play the game!']
    }

    const args = initialArgs.map((arg)=>arg.toLowerCase());

    const chapter = player.storySave[0]
    const stage = player.storySave[1]
    const inInventory = player.inventory.includes(args[1])
    const optionalTargetItem = args[3]
    let dialogue

    for (let item of items){
        if (item.name === args[1]) {
            dialogue = deliverScript(story, item, chapter, stage, inInventory, optionalTargetItem)
            console.log('What dialogue returns: ', dialogue)
            if (dialogue){
                console.log('We are calling player updater now', player)
                player = playerObjUpdater(args[0], args[1], story, player)
                console.log('and after the player looks like this', player)
                return [dialogue, player]
             } else {
                return ['You cannot use that here.']
             }
        }
     }     
     return [`That does not seem like something you can ${args[0]}.`]
}

 function playerObjUpdater(interactParam, objName, story, player){
    const playerArr = player.storySave
    console.log ('at start', player)
    if (interactParam === 'take') {
        player.inventory.push(objName);
    }
    
    if (!(objName === 'needle') || !(interactParam === 'take')) {
        console.log('arr before', playerArr)
        player.storySave = [playerArr[0], playerArr[1] + 1]    
        console.log('arr after', playerArr)
    }
    
    if (player.storySave[1] === story.chapters[player.storySave[0]].numberOfStages) {
        const playerChapt = player.storySave
        player.storySave = [playerChapt[0] + 1, 0]
        // add a function to deploy a new chapter
    }
    console.log ('at end', player)
    return player 
 }


function deliverScript (story, item, chapter, stage, inInventory, optionalTargetItem) {
    //Check the relevant stages matrix on the item object for any matches, and set the script coordinates to the returned position if there is a match 
    let regularPosition = checker(item.relevantStages, chapter, stage, optionalTargetItem);
    let coordinates = item.scriptCoordinates[regularPosition];
    let finalString
    //If the incoming chapter and stage turn up no results in the regular stages, we check the inventory stages and overwrite the result
    if (inInventory && !coordinates) {
        let inventoryPosition = checker(item.requiredInInventoryStages, chapter, stage, optionalTargetItem);
        coordinates = item.inventoryScriptCoordinates[inventoryPosition];
    }
 
    if (coordinates) {
        finalString = story.textMatrix[parseInt(coordinates[0])][parseInt(coordinates[1])]
    } 
    return finalString || false;
};

function checker (matrixToCheck, chapter, stage, optionalTargetItem) {
    let position
    //Checks the incoming current chapter and stage against the item's relevantStages
    for (let i = 0; i < matrixToCheck.length; i++) {
        //If a match is found, checks if there's something this item needs to be used on, and if so makes sure that item has also been passed in 
        if (matrixToCheck[i][0] == chapter && matrixToCheck[i][1] == stage) {
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

export default itemInteraction;