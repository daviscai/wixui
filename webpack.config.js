/**
 * @author https://github.com/daviscai
 * @date 2017/08/08
 * @description weex 打包配置
 * webpack 1 upgrade to webpack 2  https://doc.webpack-china.org/guides/migrating/
 */

const path = require('path')
const webpack = require('webpack')
// const cssnext = require('postcss-cssnext')
const fs = require('fs-extra')

var bannerPlugin = new webpack.BannerPlugin({
  banner: '// { "framework": "Vue" }\n',
  raw: true
})

function getEntryFileContent(entryPath, vueFilePath) {
  let relativePath = path.relative(path.join(entryPath, '../'), vueFilePath)
  relativePath = relativePath.replace(/\\/ig, '/')
  return `
/**
 * @author https://github.com/daviscai
 * @date 2017/08/07
 * @description 程序入口启动配置
 */

const App = require('${relativePath}')

const Wixui = require('components/wixui')
Vue.use(Wixui)

App.el = '#root'
new Vue(App)
`
}

const entry = {}

function walk(dir) {
  dir = dir || '.'
  let directory = path.join(__dirname, './src', dir)
  let entryDirectory = path.join(__dirname, './src/entry')
  fs.readdirSync(directory)
    .forEach(file => {
      let fullpath = path.join(directory, file)
      let stat = fs.statSync(fullpath)
      let extname = path.extname(fullpath)
      if (stat.isFile()) {
        let entryFile = ''
        if (extname === '.vue') {
          entryFile = path.join(entryDirectory, dir, path.basename(file, extname) + '.js')
          fs.outputFileSync(entryFile, getEntryFileContent(entryFile, fullpath))
          let name = path.join(dir, path.basename(file, extname))
          entry[name] = entryFile + '?entry=true'
        } else if (extname === '.woff' || extname === '.woff2' || extname === '.ttf') {
          entryFile = path.join(directory, file )
          let name = path.join(dir, path.basename(file, extname))
          entry[name] = entryFile 
        }
      }else if (stat.isDirectory()) {
        let subdir = path.join(dir, file)
        walk(subdir)
      }
    })
}

walk()

function getBaseConfig() {
  return {
    entry: entry,
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js', '.vue'],
      modules: [
        path.join(__dirname, "src"),
        "node_modules"
      ],
      alias: {
        components: path.resolve(__dirname, './src/components/'),
        router: path.resolve(__dirname, './src/router/'),
        views: path.resolve(__dirname, './src/views/'),
        config: path.resolve(__dirname, './config')
      }
    },
    module: {
       rules: [
        {
          test: /\.vue(\?[^?]+)?$/,
          loaders: []
        },
        {
          test: /\.vue$/,
          loader: 'eslint-loader',
          enforce: "pre",
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          enforce: "pre",
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(woff|woff2|ttf|)$/,
          use: {
            loader: 'url-loader',
            query: {
              limit: 50000,
              name: './fonts/[name].[ext]'
            }
          }
        }
      ]
    },
    plugins: [bannerPlugin]
  }
}

const webConfig = getBaseConfig()
webConfig.entry = {
  entry: path.resolve('./src/entry.js')
}
webConfig.output = {
  path: path.resolve(__dirname, 'dist/web'),
  filename: '[name].js'
}
webConfig.module.rules[0].loaders.push('vue-loader')

const weexConfig = getBaseConfig()
weexConfig.output.path = path.resolve(__dirname, 'dist/weex'),
weexConfig.output.filename = '[name].js'
weexConfig.module.rules[0].loaders.push('weex-loader')

module.exports = [webConfig, weexConfig]
