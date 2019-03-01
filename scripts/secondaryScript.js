!function() {
  var css = `
    #messenger-widget {
      z-index: 999999999 !important;
      position: fixed !important;
      bottom: 20px;
      right: 20px;
      border: 0;
      width: 80px;
      height: 80px;
      max-height: 100vh;
      max-width: 100vw;
      padding-top: 10px;
      box-sizing: border-box;
    }

    .messenger-open {
      height: 80% !important;
      width: 400px !important;
      bottom: 0 !important;
      right: 0 !important;
    }

    @media (max-width: 450px) {
      #messenger-widget {
        bottom: 0;
        right: 0;
      }
      .messenger-open {
        height: 100% !important;
        width: 100% !important;
      }
      .messenger-closed {
        bottom: 20px !important;
        right: 20px !important;
      }
    }
  `
  var style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  var head = document.getElementsByTagName("head")[0]
  head.appendChild(style)

  var iframe = document.createElement('iframe')
  iframe.id = 'messenger-widget'   

  iframe.src = process.env.APP_URI
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
        iframe.className = 'messenger-open'
        return
      case 'CLOSE':
        iframe.className = 'messenger-closed'
        return
      default:
        return
    }
  }
}();