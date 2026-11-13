export default [
  {
    files: ["js/**/*.js", "tests/**/*.js", "cart/**/*.js", "daily-challenges/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "error",
      "no-console": "warn",
      "eqeqeq": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"]
    }
  }
];