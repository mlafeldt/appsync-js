import { RuleTester } from "eslint";

import rule from "./no-this";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-this", rule, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `this.person`,
            errors: [{ message: "This expressions are not supported." }],
        },
    ],
});