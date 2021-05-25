module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'react-app',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    // requireConfigFile: false,
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // plugins: ['react', "prettier", "@babel"],
  rules: {
    'prettier/prettier': "error",
    'import/prefer-default-export': 0,
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'jsx-a11y/no-autofocus': 0,
    'implicit-arrow-linebreak': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'max-len': [
      'error',
      {
        code: 120,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    camelcase: 0,
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'ignore',
        },
      },
    ],
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': 0,
  },
};
