var path = require('path') ;
var webpack = require('webpack');


module.exports = {
  entry: {
    "index": './src/index.js',
    "vendors": ['react', 'react-dom']
  },
  output: {
    path: __dirname + '/assets/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
            path.resolve(__dirname, 'src')
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