const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');

const DIST_PATH = path.resolve(__dirname, '../dist/messenger');
const ENTRY_PATH = path.resolve(__dirname, '../src/index.js');

// @README
// describe css.... can take this config and have webpack export a css file???
const config = {

}

module.exports = [{
  name: 'messenger-config',
  mode: 'development',
  resolve: {
    modules: ['src', 'node_modules']
  },
  devtool: 'source-map',
  entry: {
    vendor: ['@babel/polyfill', 'react', 'react-dom'],
    client: ENTRY_PATH,
  },
  output: {
    path: DIST_PATH,
    filename: '[name].chunkhash.bundle.js',
    chunkFilename: '[name].chunkhash.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css)$/,
        use: [
            "style-loader",
            "css-loader"
        ]
      },
      { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
     ]
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    port: 8080
  },
  plugins: [
    new DotenvPlugin({
      sample: './.env.default',
      path: './.env'
    }),
    new webpack.EnvironmentPlugin({ MESSENGER_STYLES: JSON.stringify(config) }),
    new HtmlWebpackPlugin({
      title: 'React Chat Messenger',
      template: './src/index.html',
      filename: './index.html',
      inject: true,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyURLs: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    })
  ]
}];
