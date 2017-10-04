'use strict';

import dotenv from 'dotenv';
import path from 'path';
import webpack from 'webpack';

dotenv.load();

const webpackConfig = {
  entry: {
    'neolab-socket-client': './src/index.js',
    'neolab-socket-client.min': './src/index.js'
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  stats: { children: false },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      test: /\.min.js$/,
      mangle: {
        toplevel: true,
        sort: true,
        eval: true,
        properties: true
      },
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        drop_debugger: true,
        comparisons: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_vars: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        drop_console: true
      },
      output: {
        comments: false
      }
    })
  ]
};

module.exports = webpackConfig;
