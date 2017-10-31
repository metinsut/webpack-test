const path = require('path');


const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'src'),
  };


module.exports = {
  entry: path.resolve(paths.JS, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  }
};