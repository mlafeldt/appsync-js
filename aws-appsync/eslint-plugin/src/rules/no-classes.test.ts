import { RuleTester } from "eslint";

import rule from "./no-classes";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

tester.run("no-classes", rule, {
    valid: [{ code: `let valid = true` }],
    invalid: [
        {
            code: `class Person { }`,
            errors: [{ message: "Class declarations are not supported." }],
        },
    ],
});