var player = new Rectangle(90, 290, 10, 10, 0, 3)

//Create game scene
gameScene = new Scene()

gameScene.load = function () {
  score = 0
  multiShot = 1
  player.health = 3
  player.timer = 0
  player.x = 90
  player.y = 290
  shots.length = 0
  enemies.length = 0
  enemies.push(new Rectangle(10, 0, 10, 10, 0, 2))
  gameover = false
  pause = false
}
