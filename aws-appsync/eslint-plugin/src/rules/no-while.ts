import { Rule } from "eslint";

const rule: Rule.RuleModule = {
    create: context => {
        return {
            WhileStatement: node => {
                context.report({
                    message: "While statements are not supported.",
                    node,
                });
            },
            DoWhileStatement: node => {
                context.report({
                    message: "do...while statements are not supported.",
                    node,
                });
            }
        };
    }
};

export = rule;