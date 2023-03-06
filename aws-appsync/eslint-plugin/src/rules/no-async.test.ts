import { RuleTester } from "eslint";

import rule from "./no-async";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-async", rule, {
  valid: [{ code: `function test() { return "" }` }],
  invalid: [
    {
      code: `async function test() { return "" }`,
      errors: [{ message: "Async functions are not supported." }],
    },
    {
      code: `async () => { return "" }`,
      errors: [{ message: "Async functions are not supported." }],
    },
    {
      code: `const myFn =  async () => { return "" }`,
      errors: [{ message: "Async functions are not supported." }],
    },
    {
      code: `const myFn =  async function() { return "" }`,
      errors: [{ message: "Async functions are not supported." }],
    },
  ],
});