//Create act function

mainScene.act = function () {
  // Load next scene
  if (lastPress === KEY_ENTER) {
      loadScene(highscoresScene)
      lastPress = null
  }
}
