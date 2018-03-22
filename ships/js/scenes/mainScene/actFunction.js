//Create act function

mainScene.act = function () {
  // Load next scene
  if (lastPress === KEY_ENTER) {
      loadScene(highScoresScene)
      lastPress = null
  }
}
