const webpack = require('webpack');
const path = require('path');
// vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 使用 happypack
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
// 处理静态文件
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = {
  entry: './examples/main.js',
  module: {
    rules: [
      // 处理 js
      {
        test: /\.js/,
        // 把对 .js 的文件处理交给 id 为 happyBabel 的实例执行
        loader: 'happypack/loader?id=happyBabel',
        exclude: /node_modules/
      },
      // 处理 vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 处理字体
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // 打包 html 模板
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new HappyPack({
      // 用 id 来标识 happypack 处理类文件
      id: 'happyBabel',
      // 如何处理 用法和 loader 一致
      loaders: [
        {
          loader: 'babel-loader?cacheDirectory=true'
        }
      ],
      // 共享进程池
      threadPool: happyThreadPool,
      // 允许 HappyPack 输出日志
      verbose: true
    }),
    // 解决 vender 后面的 hash 每次都改变
    new webpack.HashedModuleIdsPlugin(),
    // 处理静态文件夹 static 复制到打包的 static 文件夹
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*'],
      },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('examples'),
    },
  },
};