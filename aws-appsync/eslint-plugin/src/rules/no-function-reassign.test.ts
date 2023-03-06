import { ESLintUtils } from '@typescript-eslint/utils';
import * as path from 'path';
import rule from './no-function-reassign';

const rootDir = path.join(__dirname, '..', '..', 'fixtures');
const ruleTester = new ESLintUtils.RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    tsconfigRootDir: rootDir,
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
});

ruleTester.run('no-function-reassign', rule, {
  valid: [
    // {
    //   code: `const a = () => {}`,
    // },
    // {
    //   code: `const a = function(){}`,
    // },
    // {
    //   code: `const a = function a() {}`,
    // },
  ],
  invalid: [
    // {
    //   code: `
    //     const a = () => {};
    //     const b = a;
    //   `,
    //   errors: [
    //     {
    //       messageId: 'noFunctionReAssign',
    //     },
    //   ],
    // },
    // {
    //   code: `
    //     const a = function () {};
    //     const b = a;
    //   `,
    //   errors: [
    //     {
    //       messageId: 'noFunctionReAssign',
    //     },
    //   ],
    // },
    // {
    //   code: `
    //     const a = function a() {};
    //     let b = a;
    //   `,
    //   errors: [
    //     {
    //       messageId: 'noFunctionReAssign',
    //     },
    //   ],
    // },
    {
      code: `
        const a = function a() {};
        let b;
        b = a;
      `,
      errors: [
        {
          messageId: 'noFunctionReAssign',
        },
      ],
    },
  ],
});
