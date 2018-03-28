'use strict'

var Snake = Snake || {}

//This is the constructor
Snake.Wall = function (x, y, width, height) {
  this.x = (x === undefined) ? 0 : x
  this.y = (y === undefined) ? 0 : y
  this.width = (width === undefined) ? 0 : width
  this.height = (height === undefined) ? width : height
}

Snake.Wall.prototype = {
  constructor: Snake.Wall,

  init: function () {

  },

  update: function () {

  },

  render: function (ctx) {
    ctx.fillStyle = 'yellow'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  },


}
