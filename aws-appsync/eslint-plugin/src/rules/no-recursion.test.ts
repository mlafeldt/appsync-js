import { ESLintUtils } from "@typescript-eslint/utils";
import * as path from "path";
import rule from "./no-recursion";

const rootDir = path.join(__dirname, "..", "..", "fixtures");
const ruleTester = new ESLintUtils.RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    tsconfigRootDir: rootDir,
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
});

ruleTester.run("no-recursion", rule, {
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
