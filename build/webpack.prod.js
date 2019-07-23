const merge = require('webpack-merge');
const common = require('./webpack.base');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js', //contenthash 若文件内容无变化，则contenthash 名称不变
    path: path.resolve(__dirname, '../dist')
  },
  module: {},
  plugins: [],
})