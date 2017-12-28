var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle: './src/main.js',
    css: './src/stylesheet.less'
  },
  output: { 
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.less$/, 
        use: [{
          loader: "style-loader"
          }, {
          loader: "css-loader"
          }, {
          loader: "less-loader", options: {
              strictMath: true,
              noIeCompat: true
          }
        }] 
      }
    ]
  },
};