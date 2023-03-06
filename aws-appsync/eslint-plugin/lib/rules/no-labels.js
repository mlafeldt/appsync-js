"use strict";
const rule = {
    create: context => {
        return {
            LabeledStatement: node => {
                context.report({
                    message: "Labeled statements are not supported.",
                    node,
                });
            }
        };
    }
};
module.exports = rule;
//# sourceMappingURL=no-labels.js.map