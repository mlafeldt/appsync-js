"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const path = __importStar(require("path"));
const no_disallowed_methods_1 = __importDefault(require("./no-disallowed-methods"));
const rootDir = path.join(__dirname, "..", "..", "fixtures");
const ruleTester = new utils_1.ESLintUtils.RuleTester({
    parserOptions: {
        ecmaVersion: 2018,
        tsconfigRootDir: rootDir,
        project: "./tsconfig.json",
    },
    parser: "@typescript-eslint/parser",
});
ruleTester.run('no-disallowed-methods', no_disallowed_methods_1.default, {
    valid: [
        {
            code: `[1, 2, 3].sort()`,
        },
        {
            code: `[1, 2, 3].forEach((a) => console.log(a))`,
        },
        {
            code: `[1, 2, 3].map((a) => a * 2)`,
        },
        {
            code: `[1, 2, 3].filter((a) => a % 2 === 0)`,
        },
        {
            code: `[1, [2], [[3]]].flatMap((a) => a * 2)`,
        },
        {
            code: `[1, 2, 3].reduce((sum, a) => sum + a, 0)`,
        },
        {
            code: `[1, 2, 3].reduceRight((sum, a) => sum + a, 0)`,
        },
        {
            code: `[1, 2, 3].find(( a) => a === 2)`,
        },
        {
            code: `[1, 2, 3].some(( a) => a == 12)`,
        },
        {
            code: `const allEvent = [2, 4, 6].every(( a) => a %2  === 0)`,
        },
        {
            code: `const index = [2, 4, 6].findIndex(( a) => a  === 4)`,
        },
        {
            code: `const item = [2, 4, 6].find(( a) => a  === 4)`,
        },
        {
            code: `const item = [2, 4, 2].findLast(( a) => a  === 2)`,
        },
        {
            code: `const item = [2, 4, 2].findLastIndex(( a) => a  === 2)`,
        },
    ],
    invalid: [
        {
            code: `
        const a = Object.freeze({a: 1, b: 2})
      `,
            errors: [
                {
                    messageId: 'methodNotImplemented',
                    data: {
                        methodName: 'ObjectConstructor.freeze',
                    },
                },
            ],
        },
        {
            code: `
        [].keys();
      `,
            errors: [
                {
                    messageId: 'methodNotImplemented',
                    data: {
                        methodName: 'Array.keys',
                    },
                },
            ],
        },
    ],
});
//# sourceMappingURL=no-disallowed-methods.test.js.map