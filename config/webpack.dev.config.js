const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
  entry: path.join(root, 'src/demo'),
  output: {
    path: path.join(root, 'demo/js'),
    publicPath: '/js/',
    filename: 'bundle.min.js'
  },
  devServer: {
    contentBase: path.join(root, 'demo'),
    compress: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: '/node_modules/',
      loader: [
        'babel-loader',
        'eslint-loader'
      ]
    }, {
      test: /\.(mp4)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disable',
      generateStatsFile: true,
      statsOptions: {
        source: false
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
