module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    //* importer rules
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', //? Built-in imports (come from NodeJS native) go first
          'external', //? <- External imports
          'internal', //? <- Absolute imports
          ['sibling', 'parent'], //? <- Relative imports, the sibling and parent types they can be mingled together
          'index', //? <- index imports
          'unknown', //? <- unknown
        ],
        'newlines-between': 'always',
        alphabetize: {
          //* sort in ascending order. Options: ["ignore", "asc", "desc"]
          order: 'asc',
          //* ignore case. Options: [true, false]
          caseInsensitive: true,
        },
      },
    ],
    //* es6 rules
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'object-shorthand': 'warn',
    'quote-props': ['warn', 'as-needed'],
    "quotes": [2, "single", { "avoidEscape": true }],
    'arrow-body-style': [2, 'as-needed'],
    'implicit-arrow-linebreak': 0,
    'comma-dangle': 0,
    'object-curly-newline': [0,{ 'multiline': true, 'minProperties': 3}],
    //* react rules
    'react/jsx-props-no-spreading': 0,
    'no-console': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-nested-ternary': 0,
    'no-param-reassing': 0,
    'no-unusued-expression': 0,
    'no-underscore-dangle': 0,
    'no-useless-escape': 0,
    'indent': ['error', 2]
  },
}
