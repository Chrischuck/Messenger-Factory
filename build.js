const webpack = require('webpack');
const webpackConfigGenerator = require('./webpack/production.config')

const config = {
  APP_ID: 'TEST_ID'
}


webpack(webpackConfigGenerator(config), console.log)