"use strict";
const rule = {
    create: context => {
        return {
            ContinueStatement: node => {
                context.report({
                    messageId: "noContinue",
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
            noContinue: 'Continue statements are not supported'
        },
        type: 'problem'
    }
};
module.exports = rule;
//# sourceMappingURL=no-continue.js.map