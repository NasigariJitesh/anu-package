/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['custom', 'next'],
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
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['index.js'],
};
