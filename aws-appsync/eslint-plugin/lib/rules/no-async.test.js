"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_async_1 = __importDefault(require("./no-async"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-async", no_async_1.default, {
    valid: [{ code: `function test() { return "" }` }],
    invalid: [
        {
            code: `async function test() { return "" }`,
            errors: [{ message: "Async functions are not supported." }],
        },
        {
            code: `async () => { return "" }`,
            errors: [{ message: "Async functions are not supported." }],
        },
        {
            code: `const myFn =  async () => { return "" }`,
            errors: [{ message: "Async functions are not supported." }],
        },
        {
            code: `const myFn =  async function() { return "" }`,
            errors: [{ message: "Async functions are not supported." }],
        },
    ],
});
//# sourceMappingURL=no-async.test.js.map