/**
 * @author https://github.com/daviscai
 * @date 2017/08/08
 * @description weex 打包配置
 */

const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const fs = require('fs-extra')

const bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n',
  {raw: true}
)

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
      if (stat.isFile() && extname === '.vue') {
        let entryFile = path.join(entryDirectory, dir, path.basename(file, extname) + '.js')
        fs.outputFileSync(entryFile, getEntryFileContent(entryFile, fullpath))
        // let name = path.join('build', dir, path.basename(file, extname))
        let name = path.join(dir, path.basename(file, extname))
        entry[name] = entryFile + '?entry=true'
        // && file !== 'components'
      } else if (stat.isDirectory()) {
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
      path: 'dist'
    },
    resolve: {
      extensions: ['', '.js', '.vue'],
      fallback: [path.join(__dirname, './node_modules')],
      alias: {
        'components': path.resolve(__dirname, './src/components/'),
        'router': path.resolve(__dirname, './src/router/'),
        'views': path.resolve(__dirname, './src/views/'),
        'config': path.resolve(__dirname, './config')
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.vue$/,
          loader: 'eslint',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'eslint',
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }, {
          test: /\.vue(\?[^?]+)?$/,
          loaders: []
        }
      ]
    },
    vue: {
      postcss: [cssnext({
        features: {
          autoprefixer: false
        }
      })]
    },
    plugins: [bannerPlugin]
  }
}

const webConfig = getBaseConfig()
webConfig.entry = {
  entry: path.resolve('./src/entry.js')
}
webConfig.output = {
  path: 'dist/web',
  filename: '[name].js'
}
webConfig.module.loaders[1].loaders.push('vue')

const weexConfig = getBaseConfig()
weexConfig.output.filename = 'weex/[name].js'
weexConfig.module.loaders[1].loaders.push('weex')

module.exports = [webConfig, weexConfig]
