import webpack from 'webpack';
import path from 'path';

import baseConfig from './webpack.base.config.babel';

const root = path.resolve(__dirname, '..');

const demoConfig = (env, { mode }) => {
  const isProductionMode = (mode === 'production');

  if (!isProductionMode) {
    baseConfig.devServer = {
      contentBase: path.join(root, 'demo'),
      compress: true
    };

    baseConfig.plugins = [
      ...baseConfig.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ];
  }

  return ({
    ...baseConfig,
    mode,
    devtool: '',
    entry: path.join(root, 'src/demo'),
    output: {
      path: path.join(root, 'demo/js'),
      publicPath: '/js/',
      filename: 'bundle.min.js'
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: [
          path.join(root, 'node_modules')
        ],
        loader: [
          'babel-loader',
          ...((isProductionMode) ? [] : [
            'eslint-loader'
          ])
        ]
      }]
    }
  });
};

export default demoConfig;
