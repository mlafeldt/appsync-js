"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_classes_1 = __importDefault(require("./no-classes"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-classes", no_classes_1.default, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `class Person { }`,
            errors: [{ message: "Class declarations are not supported." }],
        },
    ],
});
//# sourceMappingURL=no-classes.test.js.map