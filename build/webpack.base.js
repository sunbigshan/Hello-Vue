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
// 处理 markdown 文件
const markdownRender = require('markdown-it')();

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
      },
      // 处理 markdown 文件
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              raw: true,
              preventExtract: true,
              use: [
                [
                  require('markdown-it-container'), 'demo', {
                    validate: params => {
                      return params.trim().match(/^demo\s+(.*)$/);
                    },
                    render: (tokens, idx) => {
                      if (tokens[idx].nesting === 1) {
                        // 1.获取第一行的内容使用 markdown 渲染 html 作为组件的描述
                        let demoInfo = tokens[idx].info
                          .trim()
                          .match(/^demo\s+(.*)$/);
                        let description = demoInfo && demoInfo.length > 1
                          ? demoInfo[1]
                          : '';
                        let descriptionHTML = description
                          ? markdownRender.render(description)
                          : '';
                        // 2.获取代码块内的html和js代码
                        let content = tokens[idx + 1].content;
                        // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                        return `<demo-block>
                          <div class="source" slot="source">${content}</div>
                          ${descriptionHTML}
                          <div class="highlight" slot="highlight">`;
                      } else {
                        return '</div></demo-block>\n';
                      }
                    }
                  }
                ]
              ]
            }
          }
        ]
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
      '@': resolve('src')
    },
  },
};