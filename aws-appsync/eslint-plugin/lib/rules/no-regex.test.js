"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_regex_1 = __importDefault(require("./no-regex"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run('no-regex', no_regex_1.default, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `let regex = /.*?/`,
            errors: [{ message: 'Regex literals are not supported.' }],
        },
    ],
});
//# sourceMappingURL=no-regex.test.js.map