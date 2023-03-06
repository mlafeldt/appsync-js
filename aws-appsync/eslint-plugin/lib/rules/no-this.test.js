"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_this_1 = __importDefault(require("./no-this"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-this", no_this_1.default, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `this.person`,
            errors: [{ message: "This expressions are not supported." }],
        },
    ],
});
//# sourceMappingURL=no-this.test.js.map