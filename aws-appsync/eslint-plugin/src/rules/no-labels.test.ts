import { RuleTester } from "eslint";

import rule from "./no-labels";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-labels", rule, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `jmp: for(;;) { }`,
            errors: [{ message: "Labeled statements are not supported." }],
        },
    ],
});