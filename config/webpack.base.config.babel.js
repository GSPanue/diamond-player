import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const baseConfig = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: {
        source: false
      }
    })
  ]
};

export default baseConfig;
