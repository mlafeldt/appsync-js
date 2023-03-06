"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_disallowed_binary_operator_1 = __importDefault(require("./no-disallowed-binary-operator"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-disallowed-binary-operator", no_disallowed_binary_operator_1.default, {
    valid: [{ code: `const val = true && false` }],
    invalid: [
        {
            code: `const a = 10 & 5; `,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '&' } }],
        },
        {
            code: `const a = 10 | 5; `,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '|' } }],
        },
        {
            code: `const a = 10 ^ 5; `,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '^' } }],
        },
        {
            code: `const a = 10 << 5; `,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '<<' } }],
        },
        {
            code: `const a = 10 >> 5; `,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '>>' } }],
        },
        {
            code: `const a = 10 >>> 5; `,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '>>>' } }],
        },
        {
            code: `let a = 5; a &= 3;`,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '&=' } }],
        },
        {
            code: `let a = 5; a |= 3;`,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '|=' } }],
        },
        {
            code: `let a = 5; a ^= 3;`,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '^=' } }],
        },
        {
            code: `let a = 5; a <<= 3;`,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '<<=' } }],
        },
        {
            code: `let a = 5; a >>= 3;`,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '>>=' } }],
        },
        {
            code: `let a = 5; a >>>= 3;`,
            errors: [{ messageId: "expressionNotSupported", data: { operator: '>>>=' } }],
        },
        {
            code: `let a = 5; b = a instanceof Number;`,
            errors: [{ messageId: "expressionNotSupported", data: { operator: 'instanceof' } }],
        }
    ],
});
//# sourceMappingURL=no-disallowed-binary-operator.test.js.map