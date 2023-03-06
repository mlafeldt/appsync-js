"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const ts = __importStar(require("typescript"));
const index_1 = require("../utils/index");
// Todo: Add more methods
const ALLOWED_METHODS = [
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
const createRule = utils_1.ESLintUtils.RuleCreator(() => 'http://aws.com/appsync-eslint-rule');
exports.default = createRule({
    name: 'no-function-passing',
    create(context) {
        const parserServices = utils_1.ESLintUtils.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        return {
            CallExpression(node) {
                var _a;
                const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                const hasFunctionArg = tsNode.arguments
                    .map((v) => (0, index_1.getValueType)(v, checker))
                    .some(index_1.isFunctionLikeDeclaration);
                if (hasFunctionArg) {
                    const exp = checker.getSymbolAtLocation(tsNode.expression);
                    if (exp === null || exp === void 0 ? void 0 : exp.valueDeclaration) {
                        const valueDeclaration = exp.valueDeclaration;
                        if ((exp === null || exp === void 0 ? void 0 : exp.valueDeclaration) &&
                            ts.isMethodSignature(valueDeclaration)) {
                            const parent = valueDeclaration.parent;
                            if (ts.isClassDeclaration(parent) ||
                                (ts.isInterfaceDeclaration(parent) && parent.name)) {
                                const name = `${(_a = parent.name) === null || _a === void 0 ? void 0 : _a.escapedText}.${exp.escapedName}`;
                                if (!ALLOWED_METHODS.includes(name)) {
                                    context.report({
                                        loc: node.loc,
                                        messageId: 'noFunctionPassing',
                                    });
                                }
                            }
                        }
                        else if ((0, index_1.isFunctionLikeDeclaration)(valueDeclaration)) {
                            context.report({
                                loc: node.loc,
                                messageId: 'noFunctionPassing',
                            });
                        }
                        else if (ts.isVariableDeclaration(valueDeclaration) &&
                            valueDeclaration.initializer &&
                            (0, index_1.isFunctionLikeDeclaration)(valueDeclaration.initializer)) {
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
//# sourceMappingURL=no-function-passing.js.map