import * as ts from 'typescript';

export function isFunctionLikeDeclaration(node?: ts.Node) {
  return node
    ? ts.isFunctionDeclaration(node) ||
        ts.isFunctionExpression(node) ||
        ts.isArrowFunction(node)
    : false;
}

export function getValueType(node: ts.Node, checker: ts.TypeChecker) {
  if (ts.isIdentifier(node)) {
    const declaration = checker.getSymbolAtLocation(node)?.valueDeclaration;
    // When a variable
    if (declaration && ts.isVariableDeclaration(declaration)) {
      return declaration.initializer ?? node;
    }
    // When its a function, arrow function or function expression
    return declaration;
  }

  return node;
}