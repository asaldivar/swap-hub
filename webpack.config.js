var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer-core')
var csswring = require('csswring')

module.exports = {
  entry: './src/App.js',
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ]
  },
  postcss: function () {
      return [autoprefixer, csswring];
  },
  plugins: [
    new ExtractTextPlugin('public/index.css', {
      allChunks: true,
    }),
  ]
}