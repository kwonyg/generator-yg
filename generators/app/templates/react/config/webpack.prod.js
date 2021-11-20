const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
  },
};

module.exports = merge(commonConfig, prodConfig);
