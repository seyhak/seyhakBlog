// module.exports = {
//   plugins: ['@typescript-eslint', "jsx-a11y"],
//   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', "plugin:astro/recommended", "plugin:jsx-a11y/recommended"],
//   parser: '@typescript-eslint/parser',
//   overrides: [
//     {
//       files: ["*.astro"],
//       processor: "astro/client-side-ts", // <- Uses the "client-side-ts" processor.
//     },
//   ],
//   rules: {
//     "jsx-a11y/label-has-associated-control": 1
//   },
//   parserOptions: {
//     sourceType: "module",
//     ecmaVersion: 2024,
//     project: ""
//   },
// };
/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["jsx-a11y"],
  extends: ["plugin:astro/recommended", "plugin:jsx-a11y/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest"
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        "jsx-a11y/label-has-associated-control": 1
      }
    }
  ]
}
