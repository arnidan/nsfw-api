module.exports = {
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
    'require-await': 1,
    'no-console': 0,
    'indent': ['error', 2, {'SwitchCase': 1}],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false}
    ],
    'switch-colon-spacing': [
      'error',
      {'after': false, 'before': false}
    ],
    // '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/ban-ts-comment': ['warn']
  }
};
