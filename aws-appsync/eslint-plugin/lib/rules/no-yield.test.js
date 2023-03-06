"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_yield_1 = __importDefault(require("./no-yield"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-yield", no_yield_1.default, {
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
//# sourceMappingURL=no-yield.test.js.map