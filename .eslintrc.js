module.exports = {
  env: {node: true},
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-async-promise-executor': 0,
    'no-case-declarations': ['warn'],
    'no-irregular-whitespace': 0,
    'require-await': 1,
    'no-console': 0,
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'ignoredNodes': [
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
        ]
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'prefer-const': ['warn'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false}
    ],
    'switch-colon-spacing': [
      'error',
      {'after': false, 'before': false}
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};
