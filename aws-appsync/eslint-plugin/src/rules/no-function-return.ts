import { ESLintUtils } from '@typescript-eslint/utils';
import * as ts from 'typescript';
import { getValueType, isFunctionLikeDeclaration } from '../utils/index';

const createRule = ESLintUtils.RuleCreator(
  () => 'http://aws.com/appsync-eslint-rule'
);

export default createRule({
  name: 'no-function-return',
  meta: {
    type: 'problem',
    docs: {
      description: 'No function returns from a function',
      recommended: 'error',
    },
    schema: [],
    messages: {
      noFunctionReturn: 'returning a function is not allowed',
    },
  },
  defaultOptions: [],

  create(context) {
    const parserServices = ESLintUtils.getParserServices(context);
    const checker = parserServices.program.getTypeChecker();

    return {
      ReturnStatement: (node) => {
        if (node.argument) {
          const arg = parserServices.esTreeNodeToTSNodeMap.get(node.argument);
          if (
            node.argument.type === 'FunctionExpression' ||
            node.argument.type === 'ArrowFunctionExpression'
          ) {
            context.report({
              node,
              messageId: 'noFunctionReturn',
            });
          } else if (
            ts.isIdentifier(arg) &&
            isFunctionLikeDeclaration(getValueType(arg, checker))
          ) {
            context.report({
              node,
              messageId: 'noFunctionReturn',
            });
          }
        }
      },
    };
  },
});
