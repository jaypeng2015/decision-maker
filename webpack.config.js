const slsw = require('serverless-webpack');
const path = require('path');

module.exports = {
  entry: slsw.lib.entries,
  // output: set by the plugin
  target: 'node',
  devtool: 'source-map',
  externals: [
    /aws-sdk/, // Available on AWS Lambda
  ],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  resolve: {
    modules: [path.resolve(__dirname, 'lib'), 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {
                targets: { node: '8.10' }, // Node version on AWS Lambda
                useBuiltIns: true,
                modules: false,
                loose: true,
              },
            ],
            'stage-3',
          ],
        },
      },
    ],
  },
};
