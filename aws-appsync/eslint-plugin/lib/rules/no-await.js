"use strict";
const rule = {
    create: context => {
        return {
            AwaitExpression: node => {
                context.report({
                    messageId: `noAwait`,
                    node,
                });
            }
        };
    },
    meta: {
        docs: {
            recommended: true,
        },
        messages: {
            noAwait: 'The `await` keyword is not supported'
        },
        type: 'problem',
    }
};
module.exports = rule;
//# sourceMappingURL=no-await.js.map