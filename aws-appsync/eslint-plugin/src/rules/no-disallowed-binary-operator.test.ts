import { RuleTester } from "eslint";

import rule from "./no-disallowed-binary-operator";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-disallowed-binary-operator", rule, {
  valid: [{ code: `const val = true && false` }],
  invalid: [
    {
      code: `const a = 10 & 5; `,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '&'} }],
    },
    {
      code: `const a = 10 | 5; `,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '|' } }],
    },
    {
      code: `const a = 10 ^ 5; `,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '^' } }],
    },
    {
      code: `const a = 10 << 5; `,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '<<' } }],
    },
    {
      code: `const a = 10 >> 5; `,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '>>' } }],
    },
    {
      code: `const a = 10 >>> 5; `,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '>>>' } }],
    },
    {
      code: `let a = 5; a &= 3;`,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '&=' } }],
    },
    {
      code: `let a = 5; a |= 3;`,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '|=' } }],
    },
    {
      code: `let a = 5; a ^= 3;`,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '^=' } }],
    },
    {
      code: `let a = 5; a <<= 3;`,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '<<=' } }],
    },
    {
      code: `let a = 5; a >>= 3;`,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '>>=' } }],
    },
    {
      code: `let a = 5; a >>>= 3;`,
      errors: [{ messageId: "expressionNotSupported", data: { operator: '>>>=' } }],
    },
    {
      code: `let a = 5; b = a instanceof Number;`,
      errors: [{ messageId: "expressionNotSupported", data: { operator: 'instanceof' } }],
    }
  ],
});