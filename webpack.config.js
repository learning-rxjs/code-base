var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: {
    "index": './client/src/index.js',
    "vendors": ['react', 'react-dom']
  },
  output: {
    path: __dirname + '/client/assets/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'client/src')
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js'
    })
  ]
};