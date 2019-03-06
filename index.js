const webpack = require('webpack');
const webpackConfigGenerator = require('./webpack/production.config')

function messengerFactory(config = {}, callback = function() {}) {
  return webpack(webpackConfigGenerator(config), callback)
}

module.exports = messengerFactory