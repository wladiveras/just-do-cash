module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  rules: {
    // Global
    semi: ["error", "never"],
    quotes: ["error", "single"],
    "quote-props": ["error", "as-needed"],
    // Vue
    "vue/multi-word-component-names": 0,
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: {
          max: 5,
        },
      },
    ],
    "vue/no-v-html": 0,
  },
};
