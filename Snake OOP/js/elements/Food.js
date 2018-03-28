'use strict'

var Snake = Snake || {}

//This is the constructor
Snake.Food = function (x, y, width, height) {
  this.x = (x === undefined) ? 0 : x
  this.y = (y === undefined) ? 0 : y
  this.width = (width === undefined) ? 0 : width
  this.height = (height === undefined) ? width : height
  this.changePosition = false
}

Snake.Food.prototype = {
  constructor: Snake.Food,

  init: function () {

  },

  update: function () {
    if (this.changePosition) {
      this.letsChangePosition()
    }
  },

  render: function (ctx) {
    ctx.fillStyle = 'blue'
    ctx.fillRect(this.x, this.y, this.width, this.height)
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
  }


}
