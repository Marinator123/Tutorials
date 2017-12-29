var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLESS = new ExtractTextPlugin({
  allChunks: true,
  filename: "[name].css",
});

module.exports = {
  entry: {
    bundle: './src/main.js',
    stylesheet: './src/stylesheet.less'
  },
  output: { 
    path: __dirname + '/dist',
    filename: '[name].js'
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
        loader: extractLESS.extract(['css-loader', 'less-loader'])
      }
    ]
  },
  plugins: [
    extractLESS
  ]
};