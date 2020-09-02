const { merge } = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');

const webpackDevConfig = {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    content: './dist',
    hot: true,
    stats: 'errors-only',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(webpackBaseConfig, webpackDevConfig);
