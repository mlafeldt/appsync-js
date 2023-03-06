import { ESLintUtils } from '@typescript-eslint/utils';
import * as path from 'path';
import rule from './no-function-return';

const rootDir = path.join(__dirname, '..', '..', 'fixtures');
const tester = new ESLintUtils.RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    tsconfigRootDir: rootDir,
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
});

tester.run('no-function-return', rule, {
  valid: [{ code: `function a() { return 10}` }],
  invalid: [
    {
      code: `function a() { return () => {}}`,
      errors: [
        {
          messageId: 'noFunctionReturn',
        },
      ],
    },
    {
      code: `function a() { return function() {}}`,
      errors: [
        {
          messageId: 'noFunctionReturn',
        },
      ],
    },
    {
      code: `function a() { const a = function(){}; return a;}`,
      errors: [
        {
          messageId: 'noFunctionReturn',
        },
      ],
    },
  ],
});
