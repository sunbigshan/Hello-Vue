const path = require('path');
// 合并配置文件
const merge = require('webpack-merge');
const common = require('./webpack.base');
// 打包之前清除文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 抽离CSS插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩CSS和JS代码
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js', //contenthash 若文件内容无变化，则contenthash 名称不变
    path: path.resolve(__dirname, '../dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial', // 只打包初始时依赖的第三方
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 5000,
              name: 'imgs/[hash].[ext]'
            }
          },
          // 图片压缩
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false
              },
              pngguant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
  ],
})