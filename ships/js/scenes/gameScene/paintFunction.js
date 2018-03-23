gameScene.paint = function (ctx) {
    // Clean canvas
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw player
    ctx.fillStyle = 'blue'
    if(player.timer % 2 == 0)
      player.fill(ctx);

    // Debug last key pressed
    ctx.fillStyle = '#fff'
    //ctx.fillText('Last Press: ' + lastPress, 0, 20);

    //shots
    ctx.fillStyle='#f00'
    for(var i=0,l=shots.length;i<l;i++)
      shots[i].fill(ctx)

    ctx.fillStyle='#fff'

    //PowerUp
    for(var i=0,l=powerups.length;i<l;i++){
      if(powerups[i].type == 1) {
        ctx.fillStyle = '#f90';
      }
      else {
        ctx.fillStyle = '#cc6';
      }
      powerups[i].fill(ctx);
    }

    //enemies
     for(var i=0,l=enemies.length;i<l;i++) {
      if (enemies[i].timer % 2 == 0) {
        ctx.fillStyle = 'green'
      } else {
        ctx.fillStyle = 'white'
      }
      enemies[i].fill(ctx)
    }

    ctx.fillStyle='#fff';
    for(var i=0,l=messages.length;i<l;i++) {
      ctx.fillText(messages[i].string, messages[i].x, messages[i].y)
    }

    // Draw score
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'left'
    ctx.fillText('Score: ' + score, 10, 20)

    // Health
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'left'
    ctx.fillText('Lives: ' + player.health, canvas.width - 45, 20)

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
