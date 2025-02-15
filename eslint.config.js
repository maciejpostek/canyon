/* eslint-env node */
import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      eqeqeq: 'error',
      curly: 'error',
    },
  },
  pluginJs.configs.recommended,
];
