const path = require('path');
const babel = require('./config/babel.loader');
const eslint = require('./config/eslint.loader');
const postcss = require('./config/postcss.loader');
const extract = require('./config/cssextract.plugin');
const html = require('./config/html.loader');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        babel,
        eslint,
        postcss,
        html
    ]
  },
  plugins: [
    extract
  ]
};