import { ESLintUtils } from '@typescript-eslint/utils';
import * as ts from 'typescript';
import { getValueType, isFunctionLikeDeclaration } from '../utils/index';

const createRule = ESLintUtils.RuleCreator(
  () => 'http://aws.com/appsync-eslint-rule'
);

export default createRule({
  name: 'no-function-re-assign',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow function re-assignment',
      recommended: 'error',
    },
    schema: [],
    messages: {
      noFunctionReAssign: 're-assigning function is not allowed',
    },
  },
  defaultOptions: [],

  create(context) {
    const parserServices = ESLintUtils.getParserServices(context);
    const checker = parserServices.program.getTypeChecker();

    return {
      VariableDeclarator: (node) => {
        const value =
          node.init && parserServices.esTreeNodeToTSNodeMap.get(node.init);
        if (value && ts.isIdentifier(value)) {
          const valueType = getValueType(value, checker);
          if (isFunctionLikeDeclaration(valueType)) {
            context.report({
              loc: node.loc,
              messageId: 'noFunctionReAssign',
            });
          }
        }
      },

      AssignmentExpression: (node) => {
        if (node.operator === '=') {
          const value = parserServices.esTreeNodeToTSNodeMap.get(node.right);
          if (value && ts.isIdentifier(value)) {
            const valueType = getValueType(value, checker);
            if (isFunctionLikeDeclaration(valueType)) {
              context.report({
                loc: node.loc,
                messageId: 'noFunctionReAssign',
              });
            }
          }
        }
      },
    };
  },
});
