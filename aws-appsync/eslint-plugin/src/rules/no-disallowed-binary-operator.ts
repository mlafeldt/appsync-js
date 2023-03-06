
import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  create: context => {
    return {
      BinaryExpression: node => {
        if (['&', '|', '^', '<<', '>>', '>>>', 'instanceof'].includes(node.operator))
          context.report({
            messageId: `expressionNotSupported`,
            data: {
              operator: node.operator
            },
            node,
          });
      },
      AssignmentExpression: node => {
        if (['<<=', '>>=', '>>>=', '|=', '^=', '&='].includes(node.operator)) {
          context.report({
            messageId: `expressionNotSupported`,
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
    },
    messages: {
      expressionNotSupported: 'The operator {{operator}} is not supported'
    },
    type: 'problem',
  }

};

export = rule;