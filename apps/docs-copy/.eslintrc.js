/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['custom'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    root: true,
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    //next
    'no-html-link-for-pages': 'off',
  },
};
