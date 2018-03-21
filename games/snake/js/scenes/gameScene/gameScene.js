//Create game scene
gameScene = new Scene()

gameScene.load = function () {
  score = 0
  dir = 1
  body.length = 0
  body.push(new Rectangle(40, 40, 10, 10))
  body.push(new Rectangle(40, 40, 10, 10))
  body.push(new Rectangle(40, 40, 10, 10))
  food.x = random(canvas.width / 10 - 1) * 10
  food.y = random(canvas.height / 10 - 1) * 10
  gameover = false
}
