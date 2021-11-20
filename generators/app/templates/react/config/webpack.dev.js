const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    compress: true,
    hot: true,
    port: 'auto',
    historyApiFallback: true,
  },
};

module.exports = merge(commonConfig, devConfig);
