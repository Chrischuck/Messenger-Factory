const webpack = require('webpack');
const webpackConfigGenerator = require('./webpack/production.config')

module.exports = function(config = {}, callback = function() {}) {
  return webpack(webpackConfigGenerator(config), callback)
}