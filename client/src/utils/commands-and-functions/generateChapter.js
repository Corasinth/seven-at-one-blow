const generateChapter = (state, print, loadingIn) => {
  const save = state.player.storySave
  const chapterHeader = `Chapter ${save[0]+1}: ${state.story.chapters[save[0]].chapterName}\n------------------------------------\n`
  if (!save) {
    print('Sorry, you need to be logged in!')
    return;
  }
  if (loadingIn) {
    for (let i=0; i<save[1];i++) {
      print(chapterHeader)
      print(state.story.textMatrix[save[0]][i])
    }
  } else {
    if (save[1]===0){
      print(chapterHeader)
      print(state.story.textMatrix[save[0]][0])
    }
  }
}


export default generateChapter;
