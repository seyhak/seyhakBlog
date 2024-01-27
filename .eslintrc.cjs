module.exports = {
  plugins: ["jsx-a11y"],
  extends: ["plugin:astro/recommended", "plugin:jsx-a11y/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      processor: "astro/client-side-ts", // <- Uses the "client-side-ts" processor.
    },
  ],
  //   rules: {
  //     "jsx-a11y/rule-name": 1
  //   }
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2024,
  },
};
