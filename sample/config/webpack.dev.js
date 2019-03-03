const merge = require('webpack-merge')
const base = require('./webpack.config')
const path = require('path')
base.mode = 'development'
const config = merge(base, {
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8080,
    hot: true,
    disableHostCheck: true
  }
})
module.exports = config