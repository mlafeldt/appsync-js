"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_await_1 = __importDefault(require("./no-await"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-await", no_await_1.default, {
    valid: [{ code: `console.log('hello');` }],
    invalid: [
        {
            code: `async () => await console.log('hi'); `,
            errors: [{ messageId: "noAwait" }],
        }
    ],
});
//# sourceMappingURL=no-await.test.js.map