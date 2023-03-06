"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_generators_1 = __importDefault(require("./no-generators"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-generators", no_generators_1.default, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `function* test() { }`,
            errors: [{ message: "Generator functions are not supported." }],
        },
    ],
});
//# sourceMappingURL=no-generators.test.js.map