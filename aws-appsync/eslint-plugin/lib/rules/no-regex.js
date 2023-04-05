"use strict";
const rule = {
    create: (context) => {
        return {
            Literal: (node) => {
                if ('regex' in node) {
                    context.report({
                        message: 'Regex literals are not supported.',
                        node,
                    });
                }
            },
        };
    },
};
module.exports = rule;
//# sourceMappingURL=no-regex.js.map