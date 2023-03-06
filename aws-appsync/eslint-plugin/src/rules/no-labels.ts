import { Rule } from "eslint";

const rule: Rule.RuleModule = {
    create: context => {
        return {
            LabeledStatement: node => {
                context.report({
                    message: "Labeled statements are not supported.",
                    node,
                });
            }
        };
    }
};

export = rule;