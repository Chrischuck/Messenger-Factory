const messenger_app_id = process.env.APP_ID

!function() {
  if (document.getElementById('messenger-widget')) {
    console.error('Messenger Already Rendered.')
  }

  var app = document.createElement('script')
  app.type = 'text/javascript'
  app.async != !0
  app.crossorigin = 'anonymous'
  app.src = process.env.SECONDARY_SCRIPT_URI + '?messenger_id=' + messenger_app_id
  var injectionPoint = document.getElementsByTagName("script")[0]
  injectionPoint.parentNode.insertBefore(app, injectionPoint)
}();