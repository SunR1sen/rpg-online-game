module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'guard-for-in': 'warn',
    'no-restricted-syntax': 'warn',
    'object-curly-newline': 'off',
  },
};
