function itemInteraction(initialArgs, state) {
    const story = state.story;
    const items = state.items;
    let player = state.player;
    if (player === {} || !player.inventory) {
        return ['Please log in or sign up before trying to play the game!']
    } else if (!player.storySave) {
        return ['Please start a new game or load your previous save!']
    }

    const args = initialArgs.map((arg) => arg.toLowerCase());

    const chapter = player.storySave[0]
    const stage = player.storySave[1]
    const inInventory = player.inventory.includes(args[1])
    const optionalTargetItem = args[3]
    let dialogue

    const regex = new RegExp(/GAME OVER/gm)

    for (let item of items) {
        if (item.name === args[1]) {
            dialogue = deliverScript(story, item, chapter, stage, inInventory, optionalTargetItem)
            if (dialogue) {
                if (regex.test(dialogue)) {
                    player.storySave = false;
                    return [dialogue, player];
                }
                player = playerObjUpdater(args[0], args[1], story, player)
                return [dialogue, player]
            } else {
                return [`You cannot ${args[0]} that`]
            }
        }
    }
    return [`That does not seem like something you can ${args[0]}.`]
}

function playerObjUpdater(interactParam, objName, story, player) {
    const playerArr = player.storySave
    if (interactParam === 'take') {
        player.inventory.push(objName);
    }

    if (!(objName === 'needle') || !(interactParam === 'take')) {
        player.storySave = [playerArr[0], playerArr[1] + 1]
    }

    if (player.storySave[1] === story.chapters[player.storySave[0]].numberOfStages) {
        const playerChapt = player.storySave
        player.storySave = [playerChapt[0] + 1, 0]
    }
    return player
}


function deliverScript(story, item, chapter, stage, inInventory, optionalTargetItem) {
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

function checker(matrixToCheck, chapter, stage, optionalTargetItem) {
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