"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_labels_1 = __importDefault(require("./no-labels"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-labels", no_labels_1.default, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `jmp: for(;;) { }`,
            errors: [{ message: "Labeled statements are not supported." }],
        },
    ],
});
//# sourceMappingURL=no-labels.test.js.map