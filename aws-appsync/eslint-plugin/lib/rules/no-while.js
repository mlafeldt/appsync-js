"use strict";
const rule = {
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
module.exports = rule;
//# sourceMappingURL=no-while.js.map