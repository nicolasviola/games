//Create paint function

mainScene.paint = function (ctx) {
  // Clean canvas
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Draw title
  ctx.fillStyle = '#fff'
  ctx.textAlign = 'center'
  ctx.fillText('SNAKE', 150, 60)
  ctx.fillText('Press Enter', 150, 80)
}
