module.exports = {
  defaultSeverity: 'error',
  extends: [
    'tslint:recommended',
    'tslint-react',
    'tslint-eslint-rules',
    'tslint-react-a11y',
    'tslint-config-airbnb',
    'tslint-config-prettier',
  ],
  rules: {
    'jsx-no-lambda': false,
    'member-access': [true, 'no-public'],
    'no-console': [true, 'log'],
    'ordered-imports': [
      false,
      {
        // TODO: add logic to named-imports
        'grouped-imports': true,
        'module-source-path': 'basename',
        'named-imports-order': 'any',
        'import-sources-order': 'any',
      },
    ],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
    ],
    "object-literal-sort-keys": [
      true,
      "ignore-case",
      "shorthand-first"
    ],
  },
  rulesDirectory: [],
  jsRules: {},
  linterOptions: {
    exclude: [
      "config/**/*.js",
      "node_modules/**/*.ts",
      "coverage/lcov-report/*.js",
      "src/serviceWorker.ts"
    ]
  }
};
