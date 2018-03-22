function repaint() {
    window.requestAnimationFrame(repaint);
    if (scenes.length) {
      scenes[currentScene].paint(ctx)
    }
}

function run() {
    setTimeout(run, 50);
    if (scenes.length) {
      scenes[currentScene].act()
    }
}

function init() {
    // Get canvas and context
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // Load saved highscores
    if (localStorage.highscores) {
      highscores = localStorage.highscores.split(',');
    }

    // Start game
    run();
    repaint();
}
