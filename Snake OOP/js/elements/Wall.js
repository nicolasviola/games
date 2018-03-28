'use strict'

var Snake = Snake || {}

//This is the constructor
Snake.Wall = function (x, y, width, height) {

  this.x = (x === undefined) ? 0 : x
  this.y = (y === undefined) ? 0 : y
  this.width = (width === undefined) ? 0 : width
  this.height = (height === undefined) ? width : height
  this.iWall = new Image()
  this.iWall.src = './assets/wall.png'

}

Snake.Wall.prototype = {

  constructor: Snake.Wall,

  init: function () {

  },

  update: function () {

  },

  render: function (ctx) {

    ctx.fillStyle = 'yellow'
    ctx.drawImage(this.iWall, this.x, this.y)


  },

}
