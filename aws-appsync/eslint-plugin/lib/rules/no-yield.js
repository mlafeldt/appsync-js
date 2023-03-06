"use strict";
const rule = {
    create: context => {
        return {
            YieldExpression: node => {
                context.report({
                    messageId: "noYield",
                    node,
                });
            },
        };
    },
    meta: {
        docs: {
            recommended: true,
        },
        messages: {
            noYield: 'Yield statements are not supported'
        },
        type: 'problem'
    }
};
module.exports = rule;
//# sourceMappingURL=no-yield.js.map