var player = new Rectangle(90,290,10,10)

//Create game scene
gameScene = new Scene()

gameScene.load = function () {
  score=0
  player.x = 90
  player.y = 290
  shots.length = 0
  enemies.length = 0
  enemies.push(new Rectangle(10,0,10,10))
  gameover = false
}
