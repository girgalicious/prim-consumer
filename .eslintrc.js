module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
      "browser": true,
      "node":true,
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      "no-console": "off",
      "react/no-unused-prop-types": "off",
    },
    'globals': {
      "fetch": false
    }
  }