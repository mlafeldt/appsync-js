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
const createRule = utils_1.ESLintUtils.RuleCreator(() => 'http://aws.com/appsync-eslint-rule');
exports.default = createRule({
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
        const parserServices = utils_1.ESLintUtils.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        return {
            ReturnStatement: (node) => {
                if (node.argument) {
                    const arg = parserServices.esTreeNodeToTSNodeMap.get(node.argument);
                    if (node.argument.type === 'FunctionExpression' ||
                        node.argument.type === 'ArrowFunctionExpression') {
                        context.report({
                            node,
                            messageId: 'noFunctionReturn',
                        });
                    }
                    else if (ts.isIdentifier(arg) &&
                        (0, index_1.isFunctionLikeDeclaration)((0, index_1.getValueType)(arg, checker))) {
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
//# sourceMappingURL=no-function-return.js.map