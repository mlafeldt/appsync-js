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
const no_recursion_1 = __importDefault(require("./no-recursion"));
const rootDir = path.join(__dirname, "..", "..", "fixtures");
const ruleTester = new utils_1.ESLintUtils.RuleTester({
    parserOptions: {
        ecmaVersion: 2018,
        tsconfigRootDir: rootDir,
        project: "./tsconfig.json",
    },
    parser: "@typescript-eslint/parser",
});
ruleTester.run("no-recursion", no_recursion_1.default, {
    valid: [
        {
            code: `function blah (val) {

    }`,
        },
    ],
    invalid: [
        {
            code: `function factorial(n: number): number {
        if (n === 0 || n === 1) {
          return 1;
        }
        return n * factorial(n - 1);
      }`,
            errors: [
                {
                    messageId: "noRecursion",
                },
            ],
        },
        {
            code: `
      function longCycleOne() {
        longCycleTwo()
      }

      function longCycleTwo() {
        longCycleThree()
      }

      // Function Expression
      var longCycleThree = function () {
        longCycleFour()
      }

      // Arrow function
      const longCycleFour = () => {
        longCycleOne()
      }
      `,
            errors: [
                {
                    messageId: "noRecursion",
                    data: {
                        path: "longCycleOne <-longCycleTwo <-longCycleThree <-longCycleFour <-longCycleOne",
                    },
                },
                {
                    messageId: "noRecursion",
                    data: {
                        path: "longCycleTwo <-longCycleThree <-longCycleFour <-longCycleOne <-longCycleTwo",
                    },
                },
                {
                    messageId: "noRecursion",
                    data: {
                        path: "longCycleThree <-longCycleFour <-longCycleOne <-longCycleTwo <-longCycleThree",
                    },
                },
                {
                    messageId: "noRecursion",
                    data: {
                        path: "longCycleFour <-longCycleOne <-longCycleTwo <-longCycleThree <-longCycleFour",
                    },
                },
            ],
        },
    ],
});
//# sourceMappingURL=no-recursion.test.js.map