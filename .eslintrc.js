module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'prettier/prettier' : 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions : ['.jsx', '.js']}
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
            '/^react/',
            'module',
            ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
