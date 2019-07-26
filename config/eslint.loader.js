module.exports = {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: {
      loader: 'eslint-loader',
      options: {
        configFile: __dirname + '/../.eslintrc'
      },
    }
};