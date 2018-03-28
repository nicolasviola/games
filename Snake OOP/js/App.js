'use strict'

var Snake = Snake || {}

window.onload = function () {
  Keyboard.listen()
  Snake.world = new Snake.Game()
  Snake.world.init()
}
