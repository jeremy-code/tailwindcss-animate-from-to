const eslint = require("@eslint/js");
const globals = require("globals");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
