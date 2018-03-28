'use strict'

var Snake = Snake || {}

//This is the constructor
Snake.BodyPart = function (x, y, width, height) {

  this.x = (x === undefined) ? 0 : x
  this.y = (y === undefined) ? 0 : y
  this.width = (width === undefined) ? 0 : width
  this.height = (height === undefined) ? width : height
  this.iBody = new Image()
  this.iBody.src = './assets/body.png'

}

Snake.BodyPart.prototype = {

  constructor: Snake.BodyPart,

  render: function (ctx) {

    // Draw Body:
    ctx.fillStyle = '#0f0'
    this.drawImg(ctx)

  },

  drawImg: function (ctx) {

    ctx.drawImage(this.iBody, this.x, this.y)

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
