import { ESLintUtils } from '@typescript-eslint/utils';
import * as path from 'path';
import rule from './no-function-passing';

const rootDir = path.join(__dirname, '..', '..', 'fixtures');
const ruleTester = new ESLintUtils.RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    tsconfigRootDir: rootDir,
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
});

ruleTester.run('no-function-passing', rule, {
  valid: [
    {
      code: `[1, 2, 3].map(n => console.log(n))`,
    },
    {
      code: `[1, 2, 3].map(function(n) {
        console.log(n);
      })`,
    },
    {
      code: `
        const print = (n) => console.log(n);
        [1, 2, 3].map(print);
      `,
    },
  ],
  invalid: [
    {
      code: `
        function curry(f) { // curry(f) does the currying transform
          return function(a) {
            return function(b) {
              return f(a, b);
            };
          };
        }

        // usage
        function sum(a, b) {
          return a + b;
        }

        let curriedSum = curry(sum);
      `,
      errors: [
        {
          messageId: 'noFunctionPassing',
        },
      ],
    },
    {
      code: `
        const curry = (f) =>{ // curry(f) does the currying transform
          return function(a) {
            return function(b) {
              return f(a, b);
            };
          };
        }

        // usage
        const sum = (a, b) => {
          return a + b;
        }

        let curriedSum = curry(sum);
      `,
      errors: [
        {
          messageId: 'noFunctionPassing',
        },
      ],
    },
    {
      code: `
        const curry = function() { // curry(f) does the currying transform
          return function(a) {
            return function(b) {
              return f(a, b);
            };
          };
        }

        // usage
        const sum = (a, b) => {
          return a + b;
        }

        let curriedSum = curry(sum);
      `,
      errors: [
        {
          messageId: 'noFunctionPassing',
        },
      ],
    },
  ],
});
