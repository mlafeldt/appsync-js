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
const DENIED_METHODS = [
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
const createRule = utils_1.ESLintUtils.RuleCreator(() => "http://aws.com/appsync-tslint-rule");
exports.default = createRule({
    name: "no-disallowed-methods",
    create(context) {
        const parserServices = utils_1.ESLintUtils.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        return {
            CallExpression(node) {
                var _a;
                const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                const exp = checker.getSymbolAtLocation(tsNode.expression);
                if ((exp === null || exp === void 0 ? void 0 : exp.valueDeclaration) && ts.isMethodSignature(exp.valueDeclaration)) {
                    const parent = exp.valueDeclaration.parent;
                    if (ts.isClassDeclaration(parent) || ts.isInterfaceDeclaration(parent) && parent.name) {
                        const name = `${(_a = parent.name) === null || _a === void 0 ? void 0 : _a.escapedText}.${exp.escapedName}`;
                        if (DENIED_METHODS.includes(name)) {
                            context.report({
                                loc: node.loc,
                                messageId: 'methodNotImplemented',
                                data: {
                                    methodName: name
                                }
                            });
                        }
                    }
                }
            }
        };
    },
    meta: {
        docs: {
            recommended: "error",
            description: "Disallow unimplemented methods",
            requiresTypeChecking: true,
        },
        messages: {
            methodNotImplemented: "Method {{methodName}} is not implemented",
        },
        type: "problem",
        schema: [],
    },
    defaultOptions: []
});
//# sourceMappingURL=no-disallowed-methods.js.map