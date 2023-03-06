import { Rule } from "eslint";

const rule: Rule.RuleModule = {
    create: context => {
        return {
            ClassDeclaration: node => {
                context.report({
                    message: "Class declarations are not supported.",
                    node,
                });
            }
        };
    }
};

export = rule;