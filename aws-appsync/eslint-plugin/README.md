# AWS AppSync ESLint Plugin

An ESLint plugin that lints and produces errors for [AWS AppSync resolvers written in JavaScript](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-reference-js-version.html).

## About

**@aws-appsync/eslint-plugin** catches invalid syntax in your code when leveraging the [APPSYNC_JS](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-util-reference-js.html) runtime. The plugin allows you to quickly get feedback about your code during development without having to push your changes to the cloud.

The plugin provides 2 rule sets that you can use during development. 
- `plugin:@aws-appsync/base` configures a base set of rules
- `plugin:@aws-appsync/recommended` provides the base rules and additional rules that requires TypeScript to be configured in your project

**plugin:@aws-appsync/base**

Rule 	Description
- `no-async`: Async processes and promises are not supported.
- `no-await`: Async processes and promises are not supported.
- `no-promise`:	Async processes and promises are not supported.
- `no-classes`: Classes are not supported
- `no-for`: for is not supported(except for for-in and for-of, which are supported)
- `no-continue`: `continue` is not supported
- `no-generators`: generators are not supported
- `no-yield`: `yield` is not supported
- `no-labels`: labels are not supported
- `no-this`: `this` keyword is not supported
- `no-try`: try/catch structure is not supported
- `no-while`: while loops are not supported
- `no-disallowed-unary-operators`: `++`, `--`, and `~` unary operators are not allowed
- `no-disallowed-binary-operators`: `instanceof` operator is not allowed
- `no-regex`: regex literals are not supported  
- `no-disallowed-re-assignment`: re-assigning `context` and base properties of `context` are not allowed
  
**plugin:@aws-appsync/recommended**

- `no-recursion`: recursive function calls re ot allowed
- `no-disallowed-methods`: some methods are not allowed. See the [reference](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-reference-js-version.html) for a full set of supported built-in functions
- `no-function-passing`: Passing functions as function arguments to functions is not allowed
- `no-function-reassign`: Functions cannot be reassigned
- `no-function-return`: functions cannot be the return value of functions

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

You can use additional rules of the plugin (e.g.: in **plugin:@aws-appsync/recommended**) that requires the linter to parse TypeScript. These rules can catch unsupported features like recursion and disallowed method calls. To leverage these rules, setup Typescript in your project, and install this dependency:

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
