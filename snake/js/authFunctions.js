function random(max) {
  return ~~(Math.random() * max)
}

function addHighscore (score) {
  posHighscore = 0
  while (highscores[posHighscore] > score && posHighscore < highscores.length) {
    posHighscore += 1
  }
  highscores.splice(posHighscore, 0, score)
  if (highscores.length > 10) {
    highscores.length = 10
  }
  localStorage.highscores = highscores.join(',')
}
