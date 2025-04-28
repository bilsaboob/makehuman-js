import tsEslintPlugin from "@typescript-eslint/eslint-plugin"
import tsEslintParser from "@typescript-eslint/parser"

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["**/*.config.js", "!**/eslint.config.js"],
    plugins: {
      tsEslintPlugin: tsEslintPlugin
    },
    languageOptions: {
      parser: tsEslintParser
    },
    rules: {
      "semi": ["error", "never"]
    }
  }
]