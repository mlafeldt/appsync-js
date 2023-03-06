import { Rule } from "eslint";

const rule: Rule.RuleModule = {
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

export = rule;