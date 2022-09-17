const generateChapter = (state, print, loadingIn) => {
  const save = state.player.storySave
  if (loadingIn) {
    for (let i=0; i<save[1];i++) {
      print(state.story.textMatrix[save[0]][i])
    }
  }
  print(state.story.textMatrix[save[0]][0])
}


export default generateChapter;
