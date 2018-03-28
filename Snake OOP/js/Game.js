'use strict'

var Snake = Snake || {}

//This is the constructor
Snake.Game = function () {

}

Snake.Game.prototype = {

  constructor: Snake.Game,

  init: function () {

    this.canvas = null
    this.ctx = null
    this.x = 50
    this.y = 50
    this.walls = new Array()
    this.canvas = document.getElementById('canvas')
    this.ctx = canvas.getContext('2d')
    this.state = 'playing'
    this.player = new Snake.Player(50, 20, 10, 10, 10)
    this.food = new Snake.Food(70, 70, 10, 10)
    this.player.init()
    this.food.init()
    this.update()
    this.createArena()

  },

  update: function () {

    this.render()

    this.changeState()

    this.resume()

    this.pause()

    setTimeout((this.update.bind(this)), 40)
    // window.requestAnimationFrame(this.update.bind(this))

  },

  render: function () {

    //Canvas:
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, canvas.width, canvas.height)

    //Food:
    this.food.render(this.ctx)

    //Player:
    this.player.render(this.ctx)

    //Walls:
    for (this.i = 0, this.l = this.walls.length; this.i < this.l; this.i += 1) {
      this.walls[this.i].render(this.ctx)
    }

    //Pause:
    if (this.state === 'pause') {
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = 'white'
      this.ctx.fillText('PAUSE', 150, 75);
      this.ctx.textAlign = 'left';
    }

    //Game Over:
    if (this.state === 'over') {
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = 'white'
      this.ctx.fillText('GAME OVER', 150, 75);
      this.ctx.textAlign = 'left';
    }

  },

  resume: function () {

    if (this.state === 'playing') {
      this.player.update()
      this.food.update()
    }

  },

  pause: function () {

    Keyboard.lastPress = null

  },

  die: function () {

    this.reset()
    this.player.die()

  },

  reset: function () {

    this.createArena()
    this.state = 'playing'
    this.food = new Snake.Food(70, 70, 10, 10)

  },

  changeState: function () {

    if (Keyboard.lastPress === Keyboard.KEY_ENTER) {

      if (this.state === 'pause') {

        this.state = 'playing'

      }
      else if (this.state === 'playing') {

        this.state = 'pause'

      }

      else if (this.state === 'over') {

        this.die()

      }

    }

  },

  createArena: function() {

    this.canvas = document.getElementById('canvas')
    this.ctx = canvas.getContext('2d')
    this.walls = new Array()
    this.walls.push(new Snake.Wall(100, 50, 10, 10))
    this.walls.push(new Snake.Wall(100, 100, 10, 10))
    this.walls.push(new Snake.Wall(200, 50, 10, 10))
    this.walls.push(new Snake.Wall(200, 100, 10, 10))

  }

}
