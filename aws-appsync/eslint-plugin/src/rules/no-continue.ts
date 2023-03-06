import { Rule } from "eslint";

const rule: Rule.RuleModule = {
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

export = rule;