gameScene.paint = function (ctx) {
    // Clean canvas
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw player
    ctx.fillStyle = 'blue'
    player.fill(ctx)

    // Debug last key pressed
    ctx.fillStyle = '#fff'
    //ctx.fillText('Last Press: ' + lastPress, 0, 20);

    // Draw score
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'left'
    ctx.fillText('Score: ' + score, 10, 20)

    //shots
    ctx.fillStyle='#f00'
    for(var i=0,l=shots.length;i<l;i++)
      shots[i].fill(ctx)

    ctx.fillStyle='#fff'

    //enemies
    ctx.fillStyle='#00f'
     for(var i=0,l=enemies.length;i<l;i++)
       enemies[i].fill(ctx)

   // Draw pause
   if (pause) {
    ctx.fillStyle='white'
    ctx.textAlign = 'center'
    if (gameover) {
      ctx.fillText('GAME OVER', 100, 150)
    }
     else {
       ctx.fillText('PAUSE', 100, 150)
     }
   }

}
