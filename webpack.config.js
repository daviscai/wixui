/**
 * @author https://github.com/daviscai
 * @date 2017/08/13
 * @description weex 打包配置
 * webpack 1 upgrade to webpack 2  https://doc.webpack-china.org/guides/migrating/
 */

const path = require('path')
const webpack = require('webpack')
var copy = require('copy-webpack-plugin');

const bannerPlugin = new webpack.BannerPlugin({
  banner: '// { "framework": "Vue" }\n',
  raw: true
})

//  文件拷贝插件,将图片和字体拷贝到dist目录
var copyPlugin = new copy([
    {from: './web/fonts', to: "./fonts"}
])

function getBaseConfig () {
  return {
    entry: {
      'index': path.resolve('src', 'entry.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.vue(\?[^?]+)?$/,
          loaders: []
        }
      ]
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
      bannerPlugin,
      copyPlugin
    ]
  }
}

var webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.rules[1].loaders.push('vue-loader')

var nativeConfig = getBaseConfig()
nativeConfig.output.filename = '[name].weex.js'
nativeConfig.module.rules[1].loaders.push('weex-loader')

module.exports = [webConfig, nativeConfig] 