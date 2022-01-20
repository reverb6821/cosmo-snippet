const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'airbnb-base',
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
      'prettier',
      'eslint-config-prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 13,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
    ],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'class-methods-use-this': 0,
      'no-shadow': 0,
      'max-len': 'off',
      'import/no-cycle': 0,
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  };