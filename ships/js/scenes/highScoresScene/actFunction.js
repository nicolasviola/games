//Create act function
highScoresScene.act = function () {
  // Load next scene
  if (lastPress === KEY_ENTER) {
      loadScene(gameScene);
      lastPress = null;
  }
};
