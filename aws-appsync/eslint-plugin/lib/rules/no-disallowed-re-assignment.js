"use strict";
const stopNodePattern = /(?:Statement|Declaration|Function(?:Expression)?|Program)$/u;
const rule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow re-assigning some of the context variables',
            recommended: true,
        },
        schema: [],
        messages: {
            noReAssignCtxProp: '{{ctxIdentifier}} is readonly adding/modifying properties is not supported.',
            noReAssignCtxPropWithName: '{{ctxIdentifier}} is readonly. Adding/Updating {{propName}} is not supported.',
            noReAssignCtx: '{{name}} is readonly and re-assignment is not supported.',
        },
    },
    create: (context) => {
        function getPropertyName(node) {
            var _a;
            let propName;
            switch (node.type) {
                case 'Identifier':
                    return node.name;
                case 'Literal':
                    return (_a = node.value) === null || _a === void 0 ? void 0 : _a.toString();
                case 'MemberExpression':
                    return getPropertyName(node.property);
            }
            return;
        }
        function getModifiedCtxProperty(reference) {
            let node = reference.identifier;
            // since we are using :exit, parent prop will be present in the identifier
            let parent = node.parent;
            const propHierarchy = [];
            while (propHierarchy.length < 2 && // we only check if the context[prop] is being modified
                parent &&
                (!stopNodePattern.test(parent.type) ||
                    parent.type === 'ForInStatement' ||
                    parent.type === 'ForOfStatement')) {
                switch (parent.type) {
                    // e.g. foo.a = 0;
                    case 'AssignmentExpression':
                        return propHierarchy.length === 1 && parent.left === node
                            ? node
                            : undefined;
                    // e.g. ++foo.a;
                    case 'UpdateExpression':
                        return propHierarchy.length === 1 && parent.argument === node
                            ? node
                            : undefined;
                    // // e.g. delete foo.undefined
                    case 'UnaryExpression':
                        return propHierarchy.length === 1 &&
                            parent.argument === node &&
                            parent.operator === 'delete'
                            ? node
                            : undefined;
                    // e.g. for (foo.a in b) {}
                    case 'ForInStatement':
                    case 'ForOfStatement':
                        return propHierarchy.length === 1 && parent.left === node
                            ? node
                            : undefined;
                        // this is a stop node for parent.right and parent.body
                        return undefined;
                    // EXCLUDES: e.g. cache[foo.a] = 0;
                    case 'MemberExpression':
                        if (parent.property === node) {
                            return undefined;
                        }
                        break;
                    // EXCLUDES: e.g. ({ [foo]: a }) = bar;
                    case 'Property':
                        if (parent.key === node) {
                            return undefined;
                        }
                        break;
                    // EXCLUDES: e.g. (foo ? a : b).c = bar;
                    case 'ConditionalExpression':
                        if (parent.test === node) {
                            return undefined;
                        }
                        break;
                    // no default
                }
                propHierarchy.push(node);
                node = parent;
                parent = node.parent;
            }
            return undefined;
        }
        function checkReference(reference, index, references) {
            const identifier = reference.identifier;
            if (identifier &&
                !reference.init &&
                /*
                 * Destructuring assignments can have multiple default value,
                 * so possibly there are multiple writeable references for the same identifier.
                 */
                (index === 0 || references[index - 1].identifier !== identifier)) {
                let prop;
                if (reference.isWrite()) {
                    context.report({
                        node: identifier,
                        messageId: 'noReAssignCtx',
                        data: { name: identifier.name },
                    });
                }
                else if ((prop = getModifiedCtxProperty(reference))) {
                    const propName = getPropertyName(prop);
                    if (propName) {
                        context.report({
                            node: prop,
                            messageId: 'noReAssignCtxPropWithName',
                            data: { ctxIdentifier: identifier.name, propName },
                        });
                    }
                    else {
                        context.report({
                            node: prop,
                            messageId: 'noReAssignCtxProp',
                            data: { ctxIdentifier: identifier.name },
                        });
                    }
                }
            }
        }
        function checkForFunction(node) {
            var _a, _b;
            // Checks in only request and response function
            // TODO: check for other functions if its typescript
            if (((_a = node.id) === null || _a === void 0 ? void 0 : _a.name) === 'request' || ((_b = node.id) === null || _b === void 0 ? void 0 : _b.name) === 'response') {
                if (node.params.length > 0 && node.params[0].type === 'Identifier') {
                    const ctxVariable = context
                        .getDeclaredVariables(node)
                        .find((v) => v.name === node.params[0].name);
                    if (ctxVariable) {
                        ctxVariable.references.forEach(checkReference);
                    }
                }
            }
        }
        return {
            // `:exit` is needed for the `node.parent` property of identifier nodes.
            'FunctionDeclaration:exit': checkForFunction,
        };
    },
};
module.exports = rule;
//# sourceMappingURL=no-disallowed-re-assignment.js.map