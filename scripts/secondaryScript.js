!function() {
  var iframe = document.createElement('iframe')
  iframe.id = 'messenger-widget'
  iframe.style = "z-index: 999999999 !important;position: fixed !important;bottom: 20px;right: 20px;border: 0;width: 80px;height: 80px;max-height: 100vh;max-width: 100vw;padding-top: 10px;box-sizing: border-box;"
  iframe.src = process.env.APP_URI
  iframe.async = true
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