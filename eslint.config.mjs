import js from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import eslintConfigPrettier from "eslint-config-prettier"
import { FlatCompat } from "@eslint/eslintrc"
import typeScriptESLint from "@typescript-eslint/eslint-plugin"
import typeScriptESLintParser from "@typescript-eslint/parser"

const compat = new FlatCompat()

export default [
  // add more generic rulesets here, such as:
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
  ...compat.extends(
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:vue/vue3-essential",
    "./.eslintrc-auto-import.json",
    "prettier"
    // Make sure "prettier" is the last element in this list.
  ),
  {
    plugins: {
      typeScriptESLint,
    },
    languageOptions: {
      parserOptions: {
        parser: typeScriptESLintParser,
      },
    },
    rules: {
      // override/add rules settings here, such as:
      // "vue/no-unused-vars": "error"
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: ["index"],
        },
      ],
    },
  },
]
