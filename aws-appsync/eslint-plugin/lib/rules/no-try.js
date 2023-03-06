"use strict";
const rule = {
    create: context => {
        return {
            TryStatement: node => {
                context.report({
                    message: "Try statements are not supported.",
                    node,
                });
            }
        };
    }
};
module.exports = rule;
//# sourceMappingURL=no-try.js.map