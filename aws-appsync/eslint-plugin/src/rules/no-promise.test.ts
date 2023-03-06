import { RuleTester } from 'eslint';

import rule from './no-promise';

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run('no-promise', rule, {
  valid: [{ code: `const a = new Array();` }],
  invalid: [
    {
      code: `new Promise()`,
      errors: [
        {
          messageId:
            'noPromise',
        },
      ],
    },
  ],
});
