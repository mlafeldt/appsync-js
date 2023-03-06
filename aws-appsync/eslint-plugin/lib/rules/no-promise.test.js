"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_promise_1 = __importDefault(require("./no-promise"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run('no-promise', no_promise_1.default, {
    valid: [{ code: `const a = new Array();` }],
    invalid: [
        {
            code: `new Promise()`,
            errors: [
                {
                    messageId: 'noPromise',
                },
            ],
        },
    ],
});
//# sourceMappingURL=no-promise.test.js.map