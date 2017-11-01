const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    DIST_JS: path.resolve(__dirname, 'dist/js'),
    JS: path.resolve(__dirname, 'src/js'),
    SRC: path.resolve(__dirname, 'src'),
  };


module.exports = {
  entry: path.resolve(paths.JS, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.SRC, 'index.html'),
    }),
  ],

  module: {
    rules: [


    ],


  },

  
};