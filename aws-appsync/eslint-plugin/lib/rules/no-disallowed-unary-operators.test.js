"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_disallowed_unary_operators_1 = __importDefault(require("./no-disallowed-unary-operators"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run("no-disallowed-unary-operators", no_disallowed_unary_operators_1.default, {
    valid: [{ code: `function test() { return "" }` }],
    invalid: [
        {
            code: `let a = 0; a++`,
            errors: [{
                    messageId: 'unaryExpressionNotSupported',
                    data: {
                        operator: '++'
                    }
                }],
        },
        {
            code: `let a = 1; console.log(a--)`,
            errors: [{
                    messageId: 'unaryExpressionNotSupported',
                    data: {
                        operator: '--'
                    }
                }],
        },
        {
            code: `let a = 0; ++a`,
            errors: [{
                    messageId: 'unaryExpressionNotSupported',
                    data: {
                        operator: '++'
                    }
                }],
        },
        {
            code: `let a = 1; console.log(--a)`,
            errors: [{
                    messageId: 'unaryExpressionNotSupported',
                    data: {
                        operator: '--'
                    }
                }],
        },
        {
            code: `
        const a = 5;
        console.log(~a); 
      `,
            errors: [{
                    messageId: 'unaryExpressionNotSupported',
                    data: {
                        operator: '~'
                    }
                }],
        }
    ],
});
//# sourceMappingURL=no-disallowed-unary-operators.test.js.map