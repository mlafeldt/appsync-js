"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_while_1 = __importDefault(require("./no-while"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-while", no_while_1.default, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `while(true) { }`,
            errors: [{ message: "While statements are not supported." }],
        },
        {
            code: `do { } while(true)`,
            errors: [{ message: "do...while statements are not supported." }],
        },
    ],
});
//# sourceMappingURL=no-while.test.js.map