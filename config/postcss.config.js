module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-cssnext': {},
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
      'cssnano': {},
    },
  }