import { Rule } from "eslint";

const rule: Rule.RuleModule = {
    create: context => {
        return {
            TryStatement: node => {
                context.report({
                    message: "Try statements are not supported.",
                    node,
                });
            }
        };
    }
};

export = rule;