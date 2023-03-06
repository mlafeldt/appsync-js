import { RuleTester } from "eslint";

import rule from "./no-for";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-for", rule, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `for(;;) { }`,
            errors: [{ message: "For statements are not supported." }],
        },
    ],
});