"use strict";
const rule = {
    create: context => {
        return {
            ThisExpression: node => {
                context.report({
                    message: "This expressions are not supported.",
                    node,
                });
            }
        };
    }
};
module.exports = rule;
//# sourceMappingURL=no-this.js.map