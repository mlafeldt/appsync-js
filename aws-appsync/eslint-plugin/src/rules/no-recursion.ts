import { ESLintUtils } from "@typescript-eslint/utils";
import * as ts from "typescript";
import { TSESTree } from "@typescript-eslint/types";

function isFunctionishDeclaration(
  node: ts.Node
): node is ts.FunctionLikeDeclaration {
  return (
    ts.isFunctionDeclaration(node) ||
    ts.isFunctionExpression(node) ||
    ts.isArrowFunction(node)
  );
}

const createRule = ESLintUtils.RuleCreator(
  () => "http://aws.com/appsync-tslint-rule"
);
export default createRule({
  name: "no-recursion",

  create(context) {
    const parserServices = ESLintUtils.getParserServices(context);
    const checker = parserServices.program.getTypeChecker();

    const functionCallMap: Map<
      ts.FunctionLikeDeclaration,
      Set<ts.FunctionLikeDeclaration>
    > = new Map();

    function getFunctionDeclarationFromCall(
      node: TSESTree.CallExpression
    ): ts.FunctionLikeDeclaration | void {
      const callee = parserServices.esTreeNodeToTSNodeMap.get(node.callee);
      return getFunctionDeclaration(callee);
    }

    function getParentFunctionScope(node: ts.Node) {
      let parent: ts.Node = node.parent;
      while (parent) {
        if (isFunctionishDeclaration(parent)) {
          break;
        }
        parent = parent.parent;
      }
      return (parent as any)?.symbol.valueDeclaration ?? parent;
    }

    function getFunctionDeclaration(
      node: ts.Node
    ): ts.FunctionLikeDeclaration | void {
      let symbol = checker.getSymbolAtLocation(node);
      if (symbol && symbol.flags & ts.SymbolFlags.Alias) {
        symbol = checker.getAliasedSymbol(symbol);
      }
      const declaration = symbol?.valueDeclaration;
      if (
        declaration &&
        ts.isVariableDeclaration(declaration) &&
        declaration.initializer &&
        isFunctionishDeclaration(declaration.initializer)
      ) {
        return declaration.initializer;
      }
      return declaration && isFunctionishDeclaration(declaration)
        ? declaration
        : void 0;
    }

    function getAllOutGoingFunctionCalls(
      node: ts.FunctionLikeDeclaration
    ): Set<ts.FunctionLikeDeclaration> {
      if (functionCallMap.has(node)) {
        return functionCallMap.get(node)!;
      }

      const calls: Set<ts.FunctionLikeDeclaration> = new Set();
      const visit = (n: ts.Node) => {
        if (ts.isCallExpression(n)) {
          if (getParentFunctionScope(n) == node) {
            const functionDeclaration = getFunctionDeclaration(n.expression);
            if (functionDeclaration) {
              calls.add(functionDeclaration);
            }
          }
        } else {
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
          const currentFunctionScope = getParentFunctionScope(
            parserServices.esTreeNodeToTSNodeMap.get(node)
          );
          const detectCycles = (
            fnDeclarationNode: ts.FunctionLikeDeclaration,
            p: ts.FunctionLikeDeclaration[]
          ) => {
            if (p.includes(fnDeclarationNode)) {
              context.report({
                loc: node.loc!,
                messageId: "noRecursion",
                data: {
                  path: p
                    .slice(p.indexOf(fnDeclarationNode))
                    .concat(fnDeclarationNode)
                    .map((d) => {
                      if (ts.isFunctionDeclaration(d)) {
                        return `${d.name?.getText() || "Anonymous Function"}`;
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
                      return d.name?.getText() || "Unknown";
                    })
                    .join(" <-"),
                },
              });
              throw new Error("CycleDetected");
            }
            try {
              getAllOutGoingFunctionCalls(fnDeclarationNode).forEach((decl) =>
                detectCycles(decl, [...p, fnDeclarationNode])
              );
            } catch (e) {
              // ignore for now. Need to detect any other cycles
            }
          };
          try {
            detectCycles(declaration, [currentFunctionScope]);
          } catch (e) {
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
      noRecursion:
        "Recursive function calls not supported. Detected cycle in {{ path }}",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
