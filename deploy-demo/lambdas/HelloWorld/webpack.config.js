const path = require('path');

module.exports = {
  entry: './app.js',
  target: 'node',
  optimization: {
    minimize: false,
  },
  output: {
    libraryTarget: 'commonjs2',
    filename: 'app.js',
    path: path.resolve(__dirname,'dest')
  },
  externals: {
    'aws-sdk': 'aws-sdk'
  }
};