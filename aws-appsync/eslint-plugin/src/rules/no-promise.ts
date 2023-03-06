import { Rule } from 'eslint';
import { TSESTree } from '@typescript-eslint/types';

const rule: Rule.RuleModule = {
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
        if (node.callee && (node.callee as TSESTree.Identifier).name === 'Promise')
          context.report({
            node,
            messageId: 'noPromise',
          });
      },
    };
  },
};

export default rule;