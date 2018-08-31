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
              '@babel/preset-env',
              {
                targets: { node: '8.10' }, // Node version on AWS Lambda
                useBuiltIns: 'usage',
                modules: false,
                loose: true,
              },
            ],
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-json-strings',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-syntax-import-meta',
          ],
        },
      },
    ],
  },
};
