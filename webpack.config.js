var webpack = require('webpack');
var path = require('path');

module.exports = {
  //入口文件
  entry: {
    index: ['./entry/index']
  },
  //输出文件
  output: {
    path: path.join(__dirname, './compile/'),
    filename: '[name].entry.js'
  },
  resolve: {
    extensions: ['', '.css', '.js', '.jsx']
  },
  //加载器配置
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }

    }]
  },
  plugins: [
      new webpack.BannerPlugin('This file is created by daodou')
    ]
    /*plugins 是插件项它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。*/
}