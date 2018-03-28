'use strict'

var Snake = Snake || {}

//This is the constructor
Snake.Player = function (x, y, width, height, speed) {
  this.x = (x === undefined) ? 0 : x
  this.y = (y === undefined) ? 0 : y
  this.width = (width === undefined) ? 0 : width
  this.height = (height === undefined) ? width : height
  this.speed = (speed === undefined) ? 0 : speed
  this.dir = 1
  this.score = 0
}

Snake.Player.prototype = {
  constructor: Snake.Player,

  init: function () {
  },

  update: function () {

    // Change Direction:
    this.checkKeyboard()

    // Move Player:
    this.movePlayer()

    //Out Screen:
    this.moveOutScreen()


    //Intersects Food
    if (this.intersects(Snake.world.food)) {
      this.score += 1
      Snake.world.food.getChangePositionValue(true)
    }

    //Intersects Walls:
    for (this.i = 0, this.l = Snake.world.walls.length; this.i < this.l; this.i += 1) {
      if (this.intersects(Snake.world.walls[this.i])) {
        Snake.world.state = 'over'
      }
    }

  },

  render: function (ctx) {
    // Draw Player
    ctx.fillStyle = '#0f0'
    ctx.fillRect(this.x, this.y, this.width, this.height)

    // Draw Score
    ctx.fillStyle = 'white'
    ctx.fillText('Score: ' + this.score, 10, 20)
  },

  die: function () {

  },

  checkKeyboard: function () {
    if (Keyboard.lastPress === Keyboard.KEY_UP) {
      return (this.dir = 0)
    }
    if (Keyboard.lastPress === Keyboard.KEY_RIGHT) {
      return (this.dir = 1)
    }
    if (Keyboard.lastPress === Keyboard.KEY_DOWN) {
      return (this.dir = 2)
    }
    if (Keyboard.lastPress === Keyboard.KEY_LEFT) {
      return (this.dir = 3)
    }
  },

  movePlayer: function () {
    if (this.dir === 0) {
      return (this.y -= this.speed)
    }
    if (this.dir === 1) {
      return (this.x += this.speed)
    }
    if (this.dir === 2) {
      return (this.y += this.speed)
    }
    if (this.dir === 3) {
      return (this.x -= this.speed)
    }
  },

  moveOutScreen: function () {
    if (this.x > canvas.width - this.width) {
      this.x = 0
    }
    if (this.y > canvas.height - this.height) {
      this.y = 0
    }
    if (this.x < 0) {
      this.x = canvas.width - this.width
    }
    if (this.y < 0) {
      this.y = canvas.height - this.height
    }
  },

  intersects: function (rect) {
    if (rect == null) {
      window.console.warn('Missing parameters on function intersects')
    }
    else {
      return (
        this.x < rect.x + rect.width &&
        this.x + this.width > rect.x &&
        this.y < rect.y + rect.height &&
        this.y + this.height > rect.y
      )
    }
  },

}
