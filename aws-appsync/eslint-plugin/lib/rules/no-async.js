"use strict";
const rule = {
    create: context => {
        return {
            FunctionDeclaration: node => {
                if (node.async) {
                    context.report({
                        message: "Async functions are not supported.",
                        node,
                    });
                }
            },
            ArrowFunctionExpression: node => {
                if (node.async) {
                    context.report({
                        message: "Async functions are not supported.",
                        node,
                    });
                }
            },
            FunctionExpression: node => {
                if (node.async) {
                    context.report({
                        message: "Async functions are not supported.",
                        node,
                    });
                }
            }
        };
    }
};
module.exports = rule;
//# sourceMappingURL=no-async.js.map