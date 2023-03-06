import { RuleTester } from "eslint";

import rule from "./no-generators";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-generators", rule, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `function* test() { }`,
            errors: [{ message: "Generator functions are not supported." }],
        },
    ],
});