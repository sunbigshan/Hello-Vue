const merge = require('webpack-merge');
const common = require('./webpack.base');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    compress: true,
    port: 9000,
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.join(__dirname, "../dist"),
  },
  module: {},
})