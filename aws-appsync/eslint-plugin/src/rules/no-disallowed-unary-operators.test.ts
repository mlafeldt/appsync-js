import { RuleTester } from "eslint";

import rule from "./no-disallowed-unary-operators";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-disallowed-unary-operators", rule, {
  valid: [{ code: `function test() { return "" }` }],
  invalid: [
    {
      code: `let a = 0; a++`,
      errors: [{
        messageId: 'unaryExpressionNotSupported',
        data: {
          operator: '++'
        }
      }],
    },
    {
      code: `let a = 1; console.log(a--)`,
      errors: [{
        messageId: 'unaryExpressionNotSupported',
        data: {
          operator: '--'
        }
      }],
    },
    {
      code: `let a = 0; ++a`,
      errors: [{
        messageId: 'unaryExpressionNotSupported',
        data: {
          operator: '++'
        }
      }],
    },
    {
      code: `let a = 1; console.log(--a)`,
      errors: [{
        messageId: 'unaryExpressionNotSupported',
        data: {
          operator: '--'
        }
      }],
    },
    {
      code: `
        const a = 5;
        console.log(~a); 
      `,
      errors: [{
        messageId: 'unaryExpressionNotSupported',
        data: {
          operator: '~'
        }
      }],
    }
  ],
});