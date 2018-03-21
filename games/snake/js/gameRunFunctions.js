function repaint() {
  window.requestAnimationFrame(repaint)
  if (scenes.length) {
    scenes[currentScene].paint(ctx)
  }
}

function run() {
  setTimeout(run, 50)
  if (scenes.length) {
    scenes[currentScene].act()
  }
}

function init() {
  // Get canvas and context
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')

  // Load assets
  iBody.src = 'assets/body.png'
  iFood.src = 'assets/duck.png'
  aEat.src = 'assets/chomp.oga'
  aDie.src = 'assets/dies.oga'

  // Create food
  food = new Rectangle(80, 80, 16, 16)

  // Create walls
  //wall.push(new Rectangle(50, 50, 10, 10))
  //wall.push(new Rectangle(50, 100, 10, 10))
  //wall.push(new Rectangle(100, 50, 10, 10))
  //wall.push(new Rectangle(100, 100, 10, 10))

  // Start game
  run()
  repaint()
}
