"use strict";
const rule = {
    create: context => {
        return {
            ForStatement: node => {
                context.report({
                    message: "For statements are not supported.",
                    node,
                });
            }
        };
    }
};
module.exports = rule;
//# sourceMappingURL=no-for.js.map