//Create paint function

highScoresScene.paint = function (ctx) {
  var i = 0,
      l = 0;

  // Clean canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw title
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText('HIGH SCORES', 100, 20);

  // Draw high scores
  ctx.textAlign = 'right';
  for (i = 0, l = highscores.length; i < l; i += 1) {
    if (i === posHighscore) {
        ctx.fillText('->   ' + highscores[i], 100, 40 + i * 10);
    }
    else {
        ctx.fillText(highscores[i], 100, 40 + i * 10);
    }
  }
};
