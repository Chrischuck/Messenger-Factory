const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');

const DIST_PATH = path.resolve(__dirname, '../dist/');
const ENTRY_PATH = path.resolve(__dirname, '../');

module.exports = [
  {
    name: 'messenger-config',
    mode: 'production',
    resolve: {
      modules: ['src', 'node_modules']
    },
    entry: {
      vendor: ['@babel/polyfill', 'react', 'react-dom'],
      client: ENTRY_PATH + '/src/index.js',
    },
    output: {
      path: DIST_PATH +'/messenger',
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
    plugins: [
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
  },
  {
    name: 'client-script-config',
    mode: 'production',
    entry: {
      client: ENTRY_PATH + '/scripts/client.js',
    },
    output: {
      path: DIST_PATH + '/scripts',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
      ]
    }
  },
  {
    name: 'secondary-script-config',
    mode: 'production',
    entry: {
      client: ENTRY_PATH + '/scripts/secondaryScript.js',
    },
    output: {
      path: DIST_PATH + '/scripts',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
      ]
    }
  }
];
