const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('./environment');
const { SRC, DIST } = require('./paths');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      `${SRC}/client-entry.js`
    ]
  },
  output: {
    path: DIST,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        PORT: JSON.stringify(process.env.PORT),
        DEBUG: JSON.stringify(process.env.DEBUG),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    modules: ['node_modules', SRC],
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [/src/],
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: [/src/],
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css', 'postcss', 'sass']
        })
      }
    ]
  },
  postcss: [autoprefixer]
};
