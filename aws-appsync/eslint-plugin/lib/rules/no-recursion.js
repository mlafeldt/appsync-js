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
function isFunctionishDeclaration(node) {
    return (ts.isFunctionDeclaration(node) ||
        ts.isFunctionExpression(node) ||
        ts.isArrowFunction(node));
}
const createRule = utils_1.ESLintUtils.RuleCreator(() => "http://aws.com/appsync-tslint-rule");
exports.default = createRule({
    name: "no-recursion",
    create(context) {
        const parserServices = utils_1.ESLintUtils.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        const functionCallMap = new Map();
        function getFunctionDeclarationFromCall(node) {
            const callee = parserServices.esTreeNodeToTSNodeMap.get(node.callee);
            return getFunctionDeclaration(callee);
        }
        function getParentFunctionScope(node) {
            var _a;
            let parent = node.parent;
            while (parent) {
                if (isFunctionishDeclaration(parent)) {
                    break;
                }
                parent = parent.parent;
            }
            return (_a = parent === null || parent === void 0 ? void 0 : parent.symbol.valueDeclaration) !== null && _a !== void 0 ? _a : parent;
        }
        function getFunctionDeclaration(node) {
            let symbol = checker.getSymbolAtLocation(node);
            if (symbol && symbol.flags & ts.SymbolFlags.Alias) {
                symbol = checker.getAliasedSymbol(symbol);
            }
            const declaration = symbol === null || symbol === void 0 ? void 0 : symbol.valueDeclaration;
            if (declaration &&
                ts.isVariableDeclaration(declaration) &&
                declaration.initializer &&
                isFunctionishDeclaration(declaration.initializer)) {
                return declaration.initializer;
            }
            return declaration && isFunctionishDeclaration(declaration)
                ? declaration
                : void 0;
        }
        function getAllOutGoingFunctionCalls(node) {
            if (functionCallMap.has(node)) {
                return functionCallMap.get(node);
            }
            const calls = new Set();
            const visit = (n) => {
                if (ts.isCallExpression(n)) {
                    if (getParentFunctionScope(n) == node) {
                        const functionDeclaration = getFunctionDeclaration(n.expression);
                        if (functionDeclaration) {
                            calls.add(functionDeclaration);
                        }
                    }
                }
                else {
                    ts.forEachChild(n, visit);
                }
            };
            ts.forEachChild(node, visit);
            functionCallMap.set(node, calls);
            return calls;
        }
        return {
            CallExpression(node) {
                const declaration = getFunctionDeclarationFromCall(node);
                if (declaration) {
                    const currentFunctionScope = getParentFunctionScope(parserServices.esTreeNodeToTSNodeMap.get(node));
                    const detectCycles = (fnDeclarationNode, p) => {
                        if (p.includes(fnDeclarationNode)) {
                            context.report({
                                loc: node.loc,
                                messageId: "noRecursion",
                                data: {
                                    path: p
                                        .slice(p.indexOf(fnDeclarationNode))
                                        .concat(fnDeclarationNode)
                                        .map((d) => {
                                        var _a, _b;
                                        if (ts.isFunctionDeclaration(d)) {
                                            return `${((_a = d.name) === null || _a === void 0 ? void 0 : _a.getText()) || "Anonymous Function"}`;
                                        }
                                        if (ts.isArrowFunction(d)) {
                                            return ts.isVariableDeclaration(d.parent)
                                                ? d.parent.name.getText()
                                                : "Anonymous Arrow Function";
                                        }
                                        if (ts.isFunctionExpression(d)) {
                                            return ts.isVariableDeclaration(d.parent)
                                                ? d.parent.name.getText()
                                                : "Anonymous Function";
                                        }
                                        return ((_b = d.name) === null || _b === void 0 ? void 0 : _b.getText()) || "Unknown";
                                    })
                                        .join(" <-"),
                                },
                            });
                            throw new Error("CycleDetected");
                        }
                        try {
                            getAllOutGoingFunctionCalls(fnDeclarationNode).forEach((decl) => detectCycles(decl, [...p, fnDeclarationNode]));
                        }
                        catch (e) {
                            // ignore for now. Need to detect any other cycles
                        }
                    };
                    try {
                        detectCycles(declaration, [currentFunctionScope]);
                    }
                    catch (e) {
                        // ignore for now. Need to detect any other cycles
                    }
                }
            },
        };
    },
    meta: {
        docs: {
            recommended: "error",
            description: "Disallow recursive functions",
            requiresTypeChecking: true,
        },
        messages: {
            noRecursion: "Recursive function calls not supported. Detected cycle in {{ path }}",
        },
        type: "problem",
        schema: [],
    },
    defaultOptions: [],
});
//# sourceMappingURL=no-recursion.js.map