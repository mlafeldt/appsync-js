import { RuleTester } from "eslint";

import rule from "./no-try";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-try", rule, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `try { } catch(err) { }`,
            errors: [{ message: "Try statements are not supported." }],
        },
    ],
});