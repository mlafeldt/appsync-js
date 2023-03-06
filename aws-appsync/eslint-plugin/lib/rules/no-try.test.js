"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_try_1 = __importDefault(require("./no-try"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-try", no_try_1.default, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `try { } catch(err) { }`,
            errors: [{ message: "Try statements are not supported." }],
        },
    ],
});
//# sourceMappingURL=no-try.test.js.map