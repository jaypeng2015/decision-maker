const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  // output: set by the plugin
  target: 'node',
  devtool: 'source-map',
  externals: [
    /aws-sdk/, // Available on AWS Lambda
  ],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
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
