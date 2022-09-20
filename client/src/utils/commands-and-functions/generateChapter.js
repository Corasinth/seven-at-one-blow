const generateChapter = (state, print, loadingIn) => {
  const save = state.player.storySave
  if (!save) {
    print('Please start a new game or load your previous save!')
    return;
  } else if (save[0] === undefined) {
    print('No save found')
  }
  try {
    //Define a template chapter header to break up text blocks
    const chapterHeader = `Chapter ${save[0] + 1}: ${state.story.chapters[save[0]].chapterName}\n------------------------------------\n`
    //LoadingIn refers to whether we want to display all the text of a chapter (as on a new game or a login), or simply display the next chapter in the sequence 
    if (loadingIn) {
      print(chapterHeader)
      for (let i = 0; i < save[1] + 1; i++) {
        print(state.story.textMatrix[save[0]][i])
      }
    //If we are the start of the chapter print the chapter header and the appropriate initial text
    } else if (save[1] === 0) {
      print(chapterHeader)
      print(state.story.textMatrix[save[0]][0])
    }
  } catch (err) {
    return;
  }
}

export default generateChapter;