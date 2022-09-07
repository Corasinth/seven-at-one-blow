import tempStory from './tempStory.json'

const player = {
    storySave: [0,0],
    inventory: []
}

// line 53 of useCmd.js
function chapterGenerator () {
    if (player.storySave[0] === tempStory[0].chapters[player.storySave[0]].numberOfStages) {
    } 
}

function newGame() {
    const newSave = player.storySave
    player.storySave = [newSave[0], newSave[0]]
    chapterGenerator()
}


export default newGame