import { RuleTester } from "eslint";

import rule from "./no-await";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-await", rule, {
  valid: [{ code: `console.log('hello');` }],
  invalid: [
    {
      code: `async () => await console.log('hi'); `,
      errors: [{ messageId: "noAwait" }],
    }
  ],
});