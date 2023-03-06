"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_continue_1 = __importDefault(require("./no-continue"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-continue", no_continue_1.default, {
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
//# sourceMappingURL=no-continue.test.js.map