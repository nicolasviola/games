//Create act function
gameScene.act = function () {
  var i = 0,
      l = 0

  if (!pause) {
    // GameOver Reset
    if (gameover) {
      loadScene(mainScene)
    }

    // Move Body
    for (i = body.length - 1; i > 0; i -= 1) {
      body[i].x = body[i - 1].x
      body[i].y = body[i - 1].y
    }

    // Change Direction
    if (lastPress === KEY_UP && dir !== 2) {
      dir = 0
    }
    if (lastPress === KEY_RIGHT && dir !== 3) {
      dir = 1
    }
    if (lastPress === KEY_DOWN && dir !== 0) {
      dir = 2
    }
    if (lastPress === KEY_LEFT && dir !== 1) {
      dir = 3
    }

    // Move Head
    if (dir === 0) {
      body[0].y -= 10
    }
    if (dir === 1) {
      body[0].x += 10
    }
    if (dir === 2) {
      body[0].y += 10
    }
    if (dir === 3) {
      body[0].x -= 10
    }

    // Out Screen
    if (body[0].x > canvas.width - body[0].width) {
      body[0].x = 0
    }
    if (body[0].y > canvas.height - body[0].height) {
      body[0].y = 0
    }
    if (body[0].x < 0) {
      body[0].x = canvas.width - body[0].width
    }
    if (body[0].y < 0) {
      body[0].y = canvas.height - body[0].height
    }

    // Wall Intersects
    // for (i = 0, l = wall.length i < l i += 1) {
    //  if (food.intersects(wall[i])) {
    //    food.x = random(canvas.width / 10 - 1) * 10
    //    food.y = random(canvas.height / 10 - 1) * 10
    //  }
    //
    //  if (body[0].intersects(wall[i])) {
    //    gameover = true
    //    pause = true
    //  }
    // }

    // Body Intersects
    for (i = 2, l = body.length; i < l; i += 1) {
      if (body[0].intersects(body[i])) {
        gameover = true
        pause = true
        aDie.play()
      }
    }

    // Food Intersects
    if (body[0].intersects(food)) {
      body.push(new Rectangle(food.x, food.y, 10, 10))
      score += 1
      food.x = random(canvas.width / 10 - 1) * 10
      food.y = random(canvas.height / 10 - 1) * 10
      aEat.play()
    }
  }

  // Pause/Unpause
  if (lastPress === KEY_ENTER) {
    pause = !pause
    lastPress = null
  }
}
