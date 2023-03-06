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
const no_function_passing_1 = __importDefault(require("./no-function-passing"));
const rootDir = path.join(__dirname, '..', '..', 'fixtures');
const ruleTester = new utils_1.ESLintUtils.RuleTester({
    parserOptions: {
        ecmaVersion: 2018,
        tsconfigRootDir: rootDir,
        project: './tsconfig.json',
    },
    parser: '@typescript-eslint/parser',
});
ruleTester.run('no-function-passing', no_function_passing_1.default, {
    valid: [
        {
            code: `[1, 2, 3].map(n => console.log(n))`,
        },
        {
            code: `[1, 2, 3].map(function(n) {
        console.log(n);
      })`,
        },
        {
            code: `
        const print = (n) => console.log(n);
        [1, 2, 3].map(print);
      `,
        },
    ],
    invalid: [
        {
            code: `
        function curry(f) { // curry(f) does the currying transform
          return function(a) {
            return function(b) {
              return f(a, b);
            };
          };
        }

        // usage
        function sum(a, b) {
          return a + b;
        }

        let curriedSum = curry(sum);
      `,
            errors: [
                {
                    messageId: 'noFunctionPassing',
                },
            ],
        },
        {
            code: `
        const curry = (f) =>{ // curry(f) does the currying transform
          return function(a) {
            return function(b) {
              return f(a, b);
            };
          };
        }

        // usage
        const sum = (a, b) => {
          return a + b;
        }

        let curriedSum = curry(sum);
      `,
            errors: [
                {
                    messageId: 'noFunctionPassing',
                },
            ],
        },
        {
            code: `
        const curry = function() { // curry(f) does the currying transform
          return function(a) {
            return function(b) {
              return f(a, b);
            };
          };
        }

        // usage
        const sum = (a, b) => {
          return a + b;
        }

        let curriedSum = curry(sum);
      `,
            errors: [
                {
                    messageId: 'noFunctionPassing',
                },
            ],
        },
    ],
});
//# sourceMappingURL=no-function-passing.test.js.map