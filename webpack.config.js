const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const glob = require("glob")
let libraryName = pkg.name;


/**
 * @type {webpack.Configuration}
 */

const commonConfig = {

  devtool: 'source-map',
  mode: 'development',
 
  resolve: {
    extensions: ['.ts', '.tsx', '.json']
},
  module: {
    rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        }, {
            test: /\.ts?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
          }
      ],
  },
  externals : {
      lodash: "lodash",
      react: "react",
      bootstrap: "bootstrap"
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      cacheGroups: { //to move shared code from different entries to shared chunk from here https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points
        node_modules: {
          test: /node_modules/,
          chunks: "initial",
          name: "node_modules",
          priority: 10,
          enforce: true,
          minChunks:1,
          minSize:0
        }
      },
    },
    occurrenceOrder: true,
    namedModules: true,
    namedChunks: true,
    
    removeAvailableModules: true,
    mergeDuplicateChunks: true,
    providedExports: true,
    usedExports: true,
    concatenateModules: true,
  },
  plugins: [
  ]
};
const componentConfig = {
    ...commonConfig,
    entry:  glob.sync('./src/components/**/*.tsx').reduce((entries, entry) => Object.assign(entries, {[entry.split('/').pop().replace('.tsx', '')]: entry}), {}),
    output: {
        path: path.resolve('lib/build/components'),
        filename: "[name].js",
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: '(typeof global!=="undefined"?global:window)'
      },
}
const bundleConfig = {
    ...commonConfig,
    entry: `./src/` + pkg.name + ".ts",
    output: {
        path: path.resolve('lib/build'),
        filename: "[name].js",
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: '(typeof global!=="undefined"?global:window)'
      },
}

module.exports = [componentConfig, bundleConfig];