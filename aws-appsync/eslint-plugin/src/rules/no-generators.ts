import { Rule } from "eslint";

const rule: Rule.RuleModule = {
    create: context => {
        return {
            FunctionDeclaration: node => {
                if (node.generator) {
                    context.report({
                        message: "Generator functions are not supported.",
                        node,
                    });
                }
            }
        };
    }
};

export = rule;