'use strict'

var Snake = Snake || {}

//This is the constructor
Snake.Food = function (x, y, width, height) {

  this.x = (x === undefined) ? 0 : x
  this.y = (y === undefined) ? 0 : y
  this.width = (width === undefined) ? 0 : width
  this.height = (height === undefined) ? width : height
  this.changePosition = false
  this.iFood = new Image()
  this.iFood.src = './assets/fruit.png'

}

Snake.Food.prototype = {

  constructor: Snake.Food,

  init: function () {

  },

  update: function () {

    if (this.changePosition) {

      this.letsChangePosition()

    }

    this.wallIntersects()

  },

  render: function (ctx) {

    // Draw Food:
    ctx.fillStyle = 'blue'
    ctx.drawImage(this.iFood, this.x, this.y)


  },

  letsChangePosition: function () {

    this.x = mathRandom(canvas.width / 10 - 1) * 10;
    this.y = mathRandom(canvas.height / 10 - 1) * 10;
    this.changePosition = false

  },

  getChangePositionValue: function (value) {

    if (value === undefined) {

      this.changePosition = false

    }
    else {

      this.changePosition = value

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

  wallIntersects: function () {

    for(this.i = 0, this.l = Snake.world.walls.length; this.i < this.l; this.i += 1){
      if (this.intersects(Snake.world.walls[this.i])) {

        this.getChangePositionValue(true)

      }
    }

  },


}
