import { RuleTester } from "eslint";

import rule from "./no-while";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-while", rule, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `while(true) { }`,
            errors: [{ message: "While statements are not supported." }],
        },
        {
            code: `do { } while(true)`,
            errors: [{ message: "do...while statements are not supported." }],
        },
    ],
});