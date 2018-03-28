'use strict'

var Snake = Snake || {}

//This is the constructor
Snake.Player = function (x, y, width, height, speed) {

  this.x = (x === undefined) ? 0 : x
  this.y = (y === undefined) ? 0 : y
  this.width = (width === undefined) ? 0 : width
  this.height = (height === undefined) ? width : height
  this.speed = (speed === undefined) ? 0 : speed
  this.body = []
  this.aEat = new Audio()
  this.aDie = new Audio()
  
}

Snake.Player.prototype = {

  constructor: Snake.Player,

  init: function () {

    this.score = 0
    this.dir = 1
    this.aEat.src = './assets/chomp.oga'
    this.aDie.src = './assets/dies.oga'
    this.body.length = 0;
    this.body.push(new Snake.BodyPart(this.x, this.y, this.width, this.height))
    this.body.push(new Snake.BodyPart(this.x - this.width, this.y, this.width, this.height))
    this.body.push(new Snake.BodyPart(this.x - this.width * 2, this.y, this.width, this.height))

  },

  update: function () {

    this.moveBody()

    // Change Direction:
    this.checkKeyboard()

    // Move Player:
    this.moveHead()

    this.moveOutScreen()

    //Intersects walls:
    this.intersectsIteration(0, Snake.world.walls, this.body[0])

    //Intersects body:
    this.intersectsIteration(2, this.body, this.body[0])

    this.intersectsFood()

  },

  render: function (ctx) {

    // Draw Player
    for (var i = 0; i < this.body.length; i++) {
      this.body[i].render(ctx)
    }

    // Draw Score
    ctx.fillStyle = 'white'
    ctx.fillText('Score: ' + this.score, 10, 20)

  },

  die: function () {

    this.init()

  },

  moveBody: function () {

    for (this.i = this.body.length - 1; this.i > 0; this.i -= 1) {
      this.body[this.i].x = this.body[this.i - 1].x
      this.body[this.i].y = this.body[this.i - 1].y

    }

  },

  checkKeyboard: function () {

    if (Keyboard.lastPress === Keyboard.KEY_UP && this.dir != 2) {

      return (this.dir = 0)

    }

    if (Keyboard.lastPress === Keyboard.KEY_RIGHT && this.dir != 3) {

      return (this.dir = 1)

    }

    if (Keyboard.lastPress === Keyboard.KEY_DOWN && this.dir != 0) {

      return (this.dir = 2)

    }

    if (Keyboard.lastPress === Keyboard.KEY_LEFT && this.dir != 1) {

      return (this.dir = 3)

    }

  },

  moveHead: function () {

    if (this.dir === 0) {

      return (this.body[0].y -= this.speed)

    }

    if (this.dir === 1) {

      return (this.body[0].x += this.speed)

    }

    if (this.dir === 2) {

      return (this.body[0].y += this.speed)

    }

    if (this.dir === 3) {

      return (this.body[0].x -= this.speed)

    }

  },

  moveOutScreen: function () {

    if (this.body[0].x > canvas.width - this.body[0].width) {
      this.body[0].x = 0
    }
    if (this.body[0].y > canvas.height - this.body[0].height) {
      this.body[0].y = 0
    }
    if (this.body[0].x < 0) {
      this.body[0].x = canvas.width - this.body[0].width
    }
    if (this.body[0].y < 0) {
      this.body[0].y = canvas.height - this.body[0].height
    }

  },

  intersectsIteration: function (positionStart, array, compareElement) {

    for(this.i = positionStart, this.l = array.length; this.i < this.l; this.i += 1){

      if(compareElement.intersects(array[this.i])){

        Snake.world.state = 'over';
        this.aDie.play()

      }

    }

  },

  intersectsFood: function () {

    if (this.body[0].intersects(Snake.world.food)) {

      this.score += 1
      this.aEat.play()
      Snake.world.food.getChangePositionValue(true)
      this.body.push(new Snake.BodyPart(Snake.world.food.x, Snake.world.food.y, 10, 10))

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
