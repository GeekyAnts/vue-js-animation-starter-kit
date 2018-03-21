export default {
  inserted: function (el) {
    let image = new Image()
    let srcPath = el.src
    el.src = '/static/img/loadergif.gif'
    image.onload = function () {
      notify(el, srcPath, image)
    }
    image.src = srcPath
  }
}

function notify (element, path, image) {
  element.src = path
}
