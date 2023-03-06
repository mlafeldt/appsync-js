"use strict";
const rule = {
    create: context => {
        return {
            UnaryExpression: node => {
                if (['~'].includes(node.operator)) {
                    context.report({
                        messageId: 'unaryExpressionNotSupported',
                        data: {
                            operator: node.operator
                        },
                        node,
                    });
                }
            },
            UpdateExpression(node) {
                if (['++', '--'].includes(node.operator)) {
                    context.report({
                        messageId: 'unaryExpressionNotSupported',
                        data: {
                            operator: node.operator
                        },
                        node,
                    });
                }
            }
        };
    },
    meta: {
        docs: {
            recommended: true,
            description: 'Unary operators disallowed'
        },
        messages: {
            unaryExpressionNotSupported: 'The operator {{operator}} is not supported'
        },
        type: 'problem',
        schema: []
    }
};
module.exports = rule;
//# sourceMappingURL=no-disallowed-unary-operators.js.map