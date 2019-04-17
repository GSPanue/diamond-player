import path from 'path';

import baseConfig from './webpack.base.config.babel';

const root = path.resolve(__dirname, '..');

const libConfig = {
  ...baseConfig,
  mode: 'production',
  devtool: '',
  entry: path.join(root, 'src'),
  output: {
    path: path.resolve(root, 'lib'),
    filename: 'index.min.js',
    library: 'feather-player',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: [
        path.join(root, 'node_modules')
      ],
      loader: [
        'babel-loader'
      ]
    }]
  }
};

export default libConfig;
