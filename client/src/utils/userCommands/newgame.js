// line 53 of useCmd.js
function chapterGenerator (story) {
    if (player.storySave[0] === story.chapters[player.storySave[0]].numberOfStages) {
    } 
}

function newGame(args, runCommand, state) {
    const newSave = state.player.storySave;
    const story = state.story;
    player.storySave = [newSave[0], newSave[0]]
    chapterGenerator(story)
}


export default newGame