module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['ban', 'import', 'jsdoc', '@typescript-eslint', 'unused-imports'],
  rules: {
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    'ban/ban': [
      'error',
      {
        name: 'parseInt',
        message: 'Type coercion not allowed, use Number()',
      },
      {
        name: 'parseFloat',
        message: 'Type coercion not allowed, use Number()',
      },
    ],
    'block-scoped-var': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'default-case': 'error',
    eqeqeq: 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    'guard-for-in': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'warn',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/no-types': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-caller': 'error',
    'no-console': [
      'error',
      {
        allow: ['debug', 'info', 'time', 'timeEnd', 'trace'],
      },
    ],
    '@typescript-eslint/no-dupe-class-members': 'off',
    'no-eval': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    'no-new-wrappers': 'error',
    // See https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'no-throw-literal': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    // See https://www.npmjs.com/package/eslint-plugin-unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_$',
        argsIgnorePattern: '^_$',
      },
    ],
    'no-warning-comments': 'warn',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    radix: 'error',
    '@typescript-eslint/unified-signatures': 'error',
  },
};
