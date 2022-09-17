const generateChapter = (state, print, loadingIn) => {
  const save = state.player.storySave
  if (!save) {
    print('Sorry, you need to be logged in!')
    return;
  }
  if (loadingIn) {
    for (let i=0; i<save[1];i++) {
      print(state.story.textMatrix[save[0]][i])
    }
  } else {
    if (save[1]===0){
      print(state.story.textMatrix[save[0]][0])
    }
  }
}


export default generateChapter;
