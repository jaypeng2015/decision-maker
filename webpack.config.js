const _ = require('lodash');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = {
  entry: _.mapValues(slsw.lib.entries, (value) => ['./source-map-install.js', value]),
  // output: set by the plugin
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  optimization: {
    nodeEnv: false,
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
};
