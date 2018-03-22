//Create paint function

gameScene.paint = function (ctx) {
  var i = 0,
      l = 0

  // Clean canvas
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Draw player
  ctx.strokeStyle = '#0f0'
  for (i = 0, l = body.length; i < l; i += 1) {
    body[i].drawImage(ctx, iBody)
  }

  // Draw walls
  //ctx.fillStyle = '#999'
  //for (i = 0, l = wall.length i < l i += 1) {
  //    wall[i].fill(ctx)
  //}

  // Draw food
  ctx.strokeStyle = '#f00'
  food.drawImage(ctx, iFood)

  // Draw score
  ctx.fillStyle = '#fff'
  ctx.textAlign = 'left'
  ctx.fillText('Score: ' + score, 10, 20)

  // Debug last key pressed
  //ctx.fillText('Last Press: '+lastPress,0,20)

  // Draw pause
  if (pause) {
    ctx.textAlign = 'center'
    if (gameover) {
      ctx.fillText('GAME OVER', 150, 75)
    }
    else {
      ctx.fillText('PAUSE', 150, 75)
    }
  }
}
