gameScene.act = function () {
  if (!pause) {

    // GameOver Reset

    if(gameover)
      loadScene(highScoresScene)

    // Move Player

    if (pressing[KEY_RIGHT]) {
        player.x += 10;
    }
    if (pressing[KEY_LEFT]) {
        player.x -= 10;
    }

    // Move Enemies
    for(var i=0,l=enemies.length;i<l;i++){
      enemies[i].y+=10;
      if(enemies[i].y>canvas.height){
        enemies[i].x=random(canvas.width/10)*10;
        enemies[i].y=0;
      }

      // Player Intersects Enemy
      if(player.intersects(enemies[i])){
        gameover=true;
        pause=true;
        addHighscore(score)
      }

      // Shot Intersects Enemy
      for(var j=0,ll=shots.length;j<ll;j++){
        if (
          shots[j].rectCollision(enemies[i])
        ){
          score++
          enemies[i].x=random(canvas.width/10)*10
          enemies[i].y=0
          enemies.push(new Rectangle(random(canvas.width/10)*10,0,10,10))
          shots.splice(j--,1)
          ll--
        }
      }
    }

    //walls

    if (player.x > canvas.width - 10) {
      player.x = canvas.width - 10;
    }
    if (player.x < 0) {
      player.x = 0
    }

    // New Shot
    if(lastPress == KEY_SPACE){
      shots.push(new Rectangle(player.x + 3, player.y, 5, 5))
      lastPress=null
    }

    // Move Shots
    for(var i = 0, l = shots.length; i < l; i++){
      shots[i].y-=10
      if(shots[i].y<0){
          shots.splice(i-- ,1)
          l--
      }
    }

  }

  // Pause/Unpause
  if (lastPress == KEY_ENTER) {
    pause = !pause;
    lastPress = null;
  }

}
