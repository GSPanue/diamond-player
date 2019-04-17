import path from 'path';

import baseConfig from './webpack.base.config.babel';

const root = path.resolve(__dirname, '..');

const libConfig = {
  ...baseConfig,
  mode: 'production',
  devtool: '',
  entry: {
    index: path.join(root, 'src'),
    'index.min': path.join(root, 'src')
  },
  output: {
    path: path.resolve(root, 'lib'),
    filename: '[name].js',
    library: 'diamond-player',
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
