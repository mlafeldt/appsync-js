# AWS AppSync ESLint Plugin

An ESLint plugin that lints and produces errors for AWS AppSync resolvers written in JavaScript.

## Usage

install the plugin in your project by running

```bash
npm install @aws-appsync/eslint-plugin
```

The base configuration can be set up by adding this to your `.eslintc`

```json
{
  "extends": ["plugin:@aws-appsync/base"]
}
```

You can use additional rules of the plugin that requires the linter to parse TypeScript. These rules can catch unsupported features like recursion and disallowed method calls. To leverage these rules, setup Typescript in your project, and install this dependency:

```sh
npm i -D @typescript-eslint/parser
```

Set your `.eslintrc` to something similar to this:

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "project": "./tsconfig.json" 
  },
  "extends": ["plugin:@aws-appsync/recommended"]
}
```
