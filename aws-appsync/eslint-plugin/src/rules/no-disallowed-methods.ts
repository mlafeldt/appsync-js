import { ESLintUtils } from "@typescript-eslint/utils";
import * as ts from "typescript";

const DENIED_METHODS: string[] = [
  'Array.copyWithin',
  'Array.entries',
  'Array.from',
  'Array.group',
  'Array.groupToMap',
  'Array.keys',
  'Array.of',
  'Array.toLocaleString',
  'Array.toString',
  'Array.values',

  // Object
  'ObjectConstructor.create',
  'ObjectConstructor.defineProperties',
  'ObjectConstructor.defineProperty',
  'ObjectConstructor.freeze',
  'ObjectConstructor.getOwnPropertyDescriptor',
  'ObjectConstructor.getOwnPropertyDescriptors',
  'ObjectConstructor.getOwnPropertyNames',
  'ObjectConstructor.getOwnPropertySymbols',
  'ObjectConstructor.getPrototypeOf',
  'ObjectConstructor.hasOwnProperty',
  'ObjectConstructor.is',
  'ObjectConstructor.isExtensible',
  'ObjectConstructor.isFrozen',
  'ObjectConstructor.isPrototypeOf',
  'ObjectConstructor.isSealed',
  'ObjectConstructor.preventExtensions',
  'ObjectConstructor.propertyIsEnumerable',
  'ObjectConstructor.seal',
  'ObjectConstructor.setPrototypeOf',
  'ObjectConstructor.toLocaleString',
  'ObjectConstructor.toString',
  'ObjectConstructor.valueOf',

  // String
  'String.charCodeAt',
  'String.fromCharCode',
  'String.fromCodePoint',
  'String.localeCompare',
  'String.matchAll',
  'String.padEnd',
  'String.padStart',
  'String.raw',
  'String.repeat',
  'String.search',
  'String.toLocaleLowerCase',
  'String.toLocaleUpperCase',
  'String.valueOf',

  // Date
  'Date.setDate',
  'Date.setFullYear',
  'Date.setHours',
  'Date.setMilliseconds',
  'Date.setMinutes',
  'Date.setMonth',
  'Date.setSeconds',
  'Date.setTime',
  'Date.setUTCDate',
  'Date.setUTCFullYear',
  'Date.setUTCHours',
  'Date.setUTCMilliseconds',
  'Date.setUTCMinutes',
  'Date.setUTCMonth',
  'Date.setUTCSeconds',
  'Date.setYear',
  'Date.toGMTString',
  'Date.toLocaleDateString',
  'Date.toLocaleString',
  'Date.toLocaleTimeString',
];

const createRule = ESLintUtils.RuleCreator(
  () => "http://aws.com/appsync-tslint-rule"
);
export default createRule({
  name: "no-disallowed-methods",

  create(context) {

    const parserServices = ESLintUtils.getParserServices(context);
    const checker = parserServices.program.getTypeChecker();

    return {
      CallExpression(node) {
        const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
        const exp = checker.getSymbolAtLocation(tsNode.expression);

        if (exp?.valueDeclaration && ts.isMethodSignature(exp.valueDeclaration)) {
          const parent = exp.valueDeclaration.parent;
          if (ts.isClassDeclaration(parent) || ts.isInterfaceDeclaration(parent) && parent.name) {
            const name = `${parent.name?.escapedText}.${exp.escapedName}`
            if (DENIED_METHODS.includes(name)) {
              context.report({
                loc: node.loc,
                messageId: 'methodNotImplemented',
                data: {
                  methodName: name
                }

              })
            }
          }
        }
      }
    }
  },
  meta: {
    docs: {
      recommended: "error",
      description: "Disallow unimplemented methods",
      requiresTypeChecking: true,
    },
    messages: {
      methodNotImplemented:
        "Method {{methodName}} is not implemented",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: []
});