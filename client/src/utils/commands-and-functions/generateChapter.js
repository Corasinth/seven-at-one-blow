const generateChapter = (state, print, loadingIn) => {
  const save = state.player.storySave
  if (!save) {
    print('Please start a new game or load your previous save!')
    return;
  }
  try {
    const chapterHeader = `Chapter ${save[0] + 1}: ${state.story.chapters[save[0]].chapterName}\n------------------------------------\n`
    if (loadingIn) {
      print(chapterHeader)
      for (let i = 0; i < save[1] + 1; i++) {
        print(state.story.textMatrix[save[0]][i])
      }
    } else if (save[1] === 0 && !(save[0] === 0)) {
      print(chapterHeader)
      print(state.story.textMatrix[save[0]][0])
    }
  } catch (err) {
    return;
  }
}


export default generateChapter;
