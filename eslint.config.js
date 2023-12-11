const uni = require('@uni-helper/eslint-config')

module.exports = uni(
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      'no-console': 'off',
    },

  },
)
