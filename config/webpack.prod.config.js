const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
  entry: path.join(root, 'src'),
  output: {
    path: path.join(root, 'demo/js'),
    publicPath: '/js/',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: '/node_modules/',
      loader: [
        'babel-loader',
        'eslint-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disable',
      generateStatsFile: true,
      statsOptions: {
        source: false
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
