module.exports = {
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.app.json",
      },
    },
    "boundaries/elements": [
      { type: "app", pattern: "app/*" },
      { type: "pages", pattern: "pages/*" },
      { type: "widgets", pattern: "widgets/*" },
      { type: "features", pattern: "features/*" },
      { type: "entities", pattern: "entities/*" },
      { type: "shared", pattern: "shared/*" },
    ],

    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["fsd", "import", "boundaries", "prettier"],
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
    "boundaries/elements": [
      { type: "app", pattern: "app/*" },
      { type: "pages", pattern: "pages/*" },
      { type: "widgets", pattern: "widgets/*" },
      { type: "features", pattern: "features/*" },
      { type: "entities", pattern: "entities/*" },
      { type: "shared", pattern: "shared/*" },
    ],
  },
  rules: {
    "prettier/prettier": "error",
    // FSD custom rules
    "fsd/layers-imports": [
      "error",
      {
        alias: "@",
        ignoreImportPatterns: ["**/Provider", "**/testing"],
      },
    ],
    "boundaries/element-types": "error",
    "import/no-unresolved": "error",
  },
};
