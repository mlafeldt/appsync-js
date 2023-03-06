import { ESLintUtils } from '@typescript-eslint/utils';
import * as ts from 'typescript';

import { isFunctionLikeDeclaration, getValueType  } from '../utils/index';

// Todo: Add more methods
const ALLOWED_METHODS: string[] = [
  'Array.map',
  'Array.find',
  'Array.filter',
  'Array.findIndex',
  'Array.findLast',
  'Array.findLastIndex',
  'Array.forEach',
  'Array.reduce',
  'Array.reduceRight',
  'Array.every',
  'Array.some',
  'Array.flatMap',
  // 'Array.sort', // Temporary
];

const createRule = ESLintUtils.RuleCreator(
  () => 'http://aws.com/appsync-eslint-rule'
);
export default createRule({
  name: 'no-function-passing',

  create(context) {
    const parserServices = ESLintUtils.getParserServices(context);
    const checker = parserServices.program.getTypeChecker();



    

    return {
      CallExpression(node) {
        const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);

        const hasFunctionArg = tsNode.arguments
          .map((v) => getValueType(v, checker))
          .some(isFunctionLikeDeclaration);
        if (hasFunctionArg) {
          const exp = checker.getSymbolAtLocation(tsNode.expression);
          if (exp?.valueDeclaration) {
            const valueDeclaration = exp.valueDeclaration;
            if (
              exp?.valueDeclaration &&
              ts.isMethodSignature(valueDeclaration)
            ) {
              const parent = valueDeclaration.parent;
              if (
                ts.isClassDeclaration(parent) ||
                (ts.isInterfaceDeclaration(parent) && parent.name)
              ) {
                const name = `${parent.name?.escapedText}.${exp.escapedName}`;
                if (!ALLOWED_METHODS.includes(name)) {
                  context.report({
                    loc: node.loc,
                    messageId: 'noFunctionPassing',
                  });
                }
              }
            } else if (isFunctionLikeDeclaration(valueDeclaration)) {
              context.report({
                loc: node.loc,
                messageId: 'noFunctionPassing',
              });
            } else if (
              ts.isVariableDeclaration(valueDeclaration) &&
              valueDeclaration.initializer &&
              isFunctionLikeDeclaration(valueDeclaration.initializer)
            ) {
              /* function assigned to a variable or const
                const myFn = (arg) => arg();
                const myFn1 = function(arg) { arg() }
              */
              
              context.report({
                loc: node.loc,
                messageId: 'noFunctionPassing',
              });
            }
          }
        }
      },
    };
  },
  meta: {
    docs: {
      recommended: 'error',
      description: 'Disallow passing functions to no allow listed methods',
      requiresTypeChecking: true,
    },
    messages: {
      noFunctionPassing: 'Functions can not be passed as an argument',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
});
