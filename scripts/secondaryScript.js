!function() {
  var iframe = document.createElement('iframe')
  iframe.id = 'messenger-widget'
  iframe.style = "z-index: 999999999 !important;position: fixed !important;bottom: 0px;right: 0px;border: 0;width: 80px;height: 80px;max-height: 100vh;max-width: 100vw;"
  iframe.src = 'https://e0efd166.ngrok.io'
  var injectionPoint = document.getElementsByTagName("body")[0]
  injectionPoint.appendChild(iframe)

  window.addEventListener("message", receiveMessage, false);
  function receiveMessage(event) {

    /*
    if (event.origin !== "http://localhost:8080/") {
      return
    }*/
    var iframe = document.getElementById('messenger-widget')
    switch (event.data) {
      case 'OPEN':
        iframe.style.height = '80%'
        iframe.style.width = '400px'
        return
      case 'CLOSE':
        iframe.style.height = '80px'
        iframe.style.width = '80px'
        return
      default:
        return
    }
  }
}();