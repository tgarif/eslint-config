module.exports = {
  extends: ['@tgarif/eslint-config/eslintrc/.eslintrc.js'],
  plugins: ['simple-import-sort'],
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-undef-init': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    'sort-imports': 'off',
    'spaced-comment': ['error', 'always'],
  },
};
