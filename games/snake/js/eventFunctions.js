window.requestAnimationFrame = (
  function () {
    return window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (callback) {
          window.setTimeout(callback, 17)
      }
  } ()
)

document.addEventListener('keydown', function (evt) {
  if (evt.which >= 37 && evt.which <= 40) {
      evt.preventDefault()
  }

  lastPress = evt.which
}, false)

window.addEventListener('load', init, false)
