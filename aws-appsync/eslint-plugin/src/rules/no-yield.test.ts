import { RuleTester } from "eslint";

import rule from "./no-yield";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-yield", rule, {
  valid: [{ code: `console.log('hello');` }],
  invalid: [
    {
      code: `
        function* foo (){
          let index = 0;
          while (index <= 2)
            yield index++;
        }
      `,
      errors: [{ messageId: "noYield" }],
    }
  ],
});