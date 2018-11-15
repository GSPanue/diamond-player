const webpack = require('webpack');
const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    index: path.join(root, 'src'),
    'index.min': path.join(root, 'src')
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(root, 'lib'),
    filename: '[name].js',
    library: 'diamond-player',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: '/node_modules/',
      loader: [
        'babel-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
