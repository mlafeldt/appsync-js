"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_for_1 = __importDefault(require("./no-for"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-for", no_for_1.default, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `for(;;) { }`,
            errors: [{ message: "For statements are not supported." }],
        },
    ],
});
//# sourceMappingURL=no-for.test.js.map