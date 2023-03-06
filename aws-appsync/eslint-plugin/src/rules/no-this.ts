import { Rule } from "eslint";

const rule: Rule.RuleModule = {
    create: context => {
        return {
            ThisExpression: node => {
                context.report({
                    message: "This expressions are not supported.",
                    node,
                });
            }
        };
    }
};

export = rule;