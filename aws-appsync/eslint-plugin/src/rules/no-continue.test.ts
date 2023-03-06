import { RuleTester } from "eslint";

import rule from "./no-continue";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-continue", rule, {
  valid: [{ code: `console.log('hello');` }],
  invalid: [
    {
      code: `
        for(let i =0; i<10; i=i+1) {
          if(i % 2 == 0) continue;
          console.log(i);
        }
      `,
      errors: [{ messageId: "noContinue" }],
    },
    {
      code: `
        let i = 0;
        while(i<10) {
          i = i + 1;
          if(i % 2 == 0) continue;
          console.log(i);
        }
      `,
      errors: [{ messageId: "noContinue" }],
    }
  ],
});