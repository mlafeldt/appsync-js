import { ESLintUtils } from "@typescript-eslint/utils";
import * as path from "path";
import rule from "./no-disallowed-methods";

const rootDir = path.join(__dirname, "..", "..", "fixtures");
const ruleTester = new ESLintUtils.RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    tsconfigRootDir: rootDir,
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
});

ruleTester.run('no-disallowed-methods', rule, {
  valid: [
    {
      code: `[1, 2, 3].sort()`,
    },
    {
      code: `[1, 2, 3].forEach((a) => console.log(a))`,
    },
    {
      code: `[1, 2, 3].map((a) => a * 2)`,
    },
    {
      code: `[1, 2, 3].filter((a) => a % 2 === 0)`,
    },

    {
      code: `[1, [2], [[3]]].flatMap((a) => a * 2)`,
    },
    {
      code: `[1, 2, 3].reduce((sum, a) => sum + a, 0)`,
    },
    {
      code: `[1, 2, 3].reduceRight((sum, a) => sum + a, 0)`,
    },
    {
      code: `[1, 2, 3].find(( a) => a === 2)`,
    },
    {
      code: `[1, 2, 3].some(( a) => a == 12)`,
    },
    {
      code: `const allEvent = [2, 4, 6].every(( a) => a %2  === 0)`,
    },
    {
      code: `const index = [2, 4, 6].findIndex(( a) => a  === 4)`,
    },
    {
      code: `const item = [2, 4, 6].find(( a) => a  === 4)`,
    },
    {
      code: `const item = [2, 4, 2].findLast(( a) => a  === 2)`,
    },
    {
      code: `const item = [2, 4, 2].findLastIndex(( a) => a  === 2)`,
    },
  ],
  invalid: [
    {
      code: `
        const a = Object.freeze({a: 1, b: 2})
      `,
      errors: [
        {
          messageId: 'methodNotImplemented',
          data: {
            methodName: 'ObjectConstructor.freeze',
          },
        },
      ],
    },
    {
      code: `
        [].keys();
      `,
      errors: [
        {
          messageId: 'methodNotImplemented',
          data: {
            methodName: 'Array.keys',
          },
        },
      ],
    },
  ],
});
