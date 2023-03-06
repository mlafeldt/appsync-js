"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow Promise',
            recommended: true,
        },
        schema: [],
        messages: {
            noPromise: 'Promise is not supported',
        },
    },
    create(context) {
        return {
            "NewExpression": (node) => {
                if (node.callee && node.callee.name === 'Promise')
                    context.report({
                        node,
                        messageId: 'noPromise',
                    });
            },
        };
    },
};
exports.default = rule;
//# sourceMappingURL=no-promise.js.map