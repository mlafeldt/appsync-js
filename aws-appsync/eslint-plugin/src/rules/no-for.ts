import { Rule } from "eslint";

const rule: Rule.RuleModule = {
    create: context => {
        return {
            ForStatement: node => {
                context.report({
                    message: "For statements are not supported.",
                    node,
                });
            }
        };
    }
};

export = rule;