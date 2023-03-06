"use strict";
const rule = {
    create: context => {
        return {
            ClassDeclaration: node => {
                context.report({
                    message: "Class declarations are not supported.",
                    node,
                });
            }
        };
    }
};
module.exports = rule;
//# sourceMappingURL=no-classes.js.map