/* eslint-disable unicorn/prefer-module */
/* eslint-disable unicorn/no-keyword-prefix */

module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/all",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["node_modules/", "dist/", "build/", "coverage/"],
  overrides: [
    {
      files: ["index.ts"],
      rules: {
        "unicorn/no-empty-file": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["simple-import-sort", "import", "prefer-arrow"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    "@typescript-eslint/no-empty-function": ["warn"],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false,
      },
    ],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "unicorn/explicit-length-check": 0,
    "unicorn/no-array-callback-reference": 0,
    "unicorn/no-array-reduce": "off",
    "unicorn/no-null": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/no-unused-properties": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          prop: false,
          props: false,
          ref: false,
          refs: false,
        },
      },
    ],
  },
};
