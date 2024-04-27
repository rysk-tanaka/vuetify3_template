# Vuetifyプロジェクトのセットアップ

## プロジェクトの作成

1. 以下のコマンドを使用して、新しいVuetifyプロジェクトを作成します。

   ```
   pnpm create vuetify
   ```

## 設定ファイル

2. プロジェクトのルートディレクトリに `jsconfig.json` ファイルを作成し、以下の内容を記述します。

   ```json
   {
     "compilerOptions": {
       "baseUrl": "./",
       "paths": {
         "@/*": ["src/*"]
       }
     },
     "exclude": ["node_modules", "dist"]
   }
   ```

   この設定により、`@/` エイリアスを使用して `src` ディレクトリ内のファイルを参照できるようになります。

3. 開発依存関係としてPrettierをインストールします。

   ```
   pnpm add -D prettier
   ```

4. プロジェクトのルートディレクトリに `.prettierrc.json` ファイルを作成し、以下の内容を記述します。

   ```json
   {
     "semi": false,
     "arrowParens": "always",
     "singleQuote": false,
     "trailingComma": "es5",
     "printWidth": 65
   }
   ```

   この設定は、Prettierのフォーマットルールを指定します。

5. 必要なESLintの依存関係をインストールします。

   ```
   pnpm add -D eslint eslint-plugin-vue
   pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
   pnpm add -D eslint-config-prettier
   ```

6. プロジェクトのルートディレクトリに `eslint.config.mjs` ファイルを作成し、以下の内容を記述します。

   ```js
   import js from "@eslint/js"
   import pluginVue from "eslint-plugin-vue"
   import eslintConfigPrettier from "eslint-config-prettier"
   import { FlatCompat } from "@eslint/eslintrc"
   import typeScriptESLint from "@typescript-eslint/eslint-plugin"
   import typeScriptESLintParser from "@typescript-eslint/parser"

   const compat = new FlatCompat()

   export default [
     js.configs.recommended,
     ...pluginVue.configs["flat/recommended"],
     eslintConfigPrettier,
     ...compat.extends(
       "plugin:@typescript-eslint/eslint-recommended",
       "plugin:vue/vue3-essential",
       "prettier",
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
       rules: {},
     },
   ]
   ```

   この設定では、ESLintに様々なプラグインとルールを設定します。

## パッケージスクリプト

7. `package.json` ファイルを更新して、以下のスクリプトを追加します。

   ```json
   "scripts": {
     "style": "prettier --ignore-unknown --write src/",
     "lint": "eslint 'src/**/*.{ts,js,vue}'",
     "style:lint": "npm run style && npm run lint"
   }
   ```

   - `style` スクリプトは、Prettierを実行して `src` ディレクトリ内のコードをフォーマットします。
   - `lint` スクリプトは、ESLintを実行して `src` ディレクトリ内のコードをリンティングします。
   - `style:lint` スクリプトは、`style` と `lint` の両方のスクリプトを連続して実行します。

## セットアップの実行

8. 以下のコマンドを実行して、コードのフォーマットとリンティングを行います。

   ```
   pnpm style:lint
   ```

   このコマンドにより、指定されたフォーマットとリンティングのルールにコードが準拠していることが確認されます。
