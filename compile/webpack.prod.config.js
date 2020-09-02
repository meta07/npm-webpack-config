const cssnano = require('cssnano');
const { merge } = require('webpack-merge');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const baseConfig = require('./webpack.base.config');

const prodConfig = {
  mode: 'production',
  plugins: [
    // css压缩
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'http://now8.gtimg.com/now/lib/16.8.6/react.min.js', // cdn上react的地址，或者本地的文件
          global: 'React',
        },
        {
          module: 'react-dom',
          entry: 'http://now8.gtimg.com/now/lib/16.8.6/react-dom.min.js', // cdn上react的地址，或者本地的文件也可以
          global: 'ReactDOM',
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      maxSize: 0, // 抽离出来的公共包最大的大小
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
