"use strict";
const rule = {
    create: context => {
        return {
            FunctionDeclaration: node => {
                if (node.generator) {
                    context.report({
                        message: "Generator functions are not supported.",
                        node,
                    });
                }
            }
        };
    }
};
module.exports = rule;
//# sourceMappingURL=no-generators.js.map