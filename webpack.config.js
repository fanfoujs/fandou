'use strict'

const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'front-end/app/main.jsx'),
  output: {
    path: path.join(__dirname, 'front-end/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: [
            '@babel/preset-react'
          ]
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'front-end/build'),
    port: 8080,
    inline: true,
    progress: false
  }
}
