
import { Rule } from "eslint";

const rule: Rule.RuleModule = {
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

export = rule;