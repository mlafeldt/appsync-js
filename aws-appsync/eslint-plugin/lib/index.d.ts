declare const _default: {
    rules: {
        'no-async': import("eslint").Rule.RuleModule;
        'no-await': import("eslint").Rule.RuleModule;
        'no-classes': import("eslint").Rule.RuleModule;
        'no-for': import("eslint").Rule.RuleModule;
        'no-continue': import("eslint").Rule.RuleModule;
        'no-generators': import("eslint").Rule.RuleModule;
        'no-yield': import("eslint").Rule.RuleModule;
        'no-labels': import("eslint").Rule.RuleModule;
        'no-this': import("eslint").Rule.RuleModule;
        'no-try': import("eslint").Rule.RuleModule;
        'no-while': import("eslint").Rule.RuleModule;
        'no-recursion': import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"noRecursion", never[], {
            CallExpression(node: import("@typescript-eslint/types/dist/generated/ast-spec").CallExpression): void;
        }>;
        'no-disallowed-unary-operators': import("eslint").Rule.RuleModule;
        'no-disallowed-methods': import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"methodNotImplemented", never[], {
            CallExpression(node: import("@typescript-eslint/types/dist/generated/ast-spec").CallExpression): void;
        }>;
        'no-disallowed-binary-operators': import("eslint").Rule.RuleModule;
        'no-function-passing': import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"noFunctionPassing", never[], {
            CallExpression(node: import("@typescript-eslint/types/dist/generated/ast-spec").CallExpression): void;
        }>;
        'no-promise': import("eslint").Rule.RuleModule;
        'no-function-reassign': import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"noFunctionReAssign", never[], {
            VariableDeclarator: (node: import("@typescript-eslint/types/dist/generated/ast-spec").VariableDeclarator) => void;
            AssignmentExpression: (node: import("@typescript-eslint/types/dist/generated/ast-spec").AssignmentExpression) => void;
        }>;
        'no-function-return': import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"noFunctionReturn", never[], {
            ReturnStatement: (node: import("@typescript-eslint/types/dist/generated/ast-spec").ReturnStatement) => void;
        }>;
        'no-disallowed-re-assignment': import("eslint").Rule.RuleModule;
    };
    configs: {
        recommended: {
            plugins: string[];
            parser: string;
            rules: {
                '@aws-appsync/no-async': number;
                '@aws-appsync/no-await': number;
                '@aws-appsync/no-classes': number;
                '@aws-appsync/no-for': number;
                '@aws-appsync/no-continue': number;
                '@aws-appsync/no-generators': number;
                '@aws-appsync/no-yield': number;
                '@aws-appsync/no-labels': number;
                '@aws-appsync/no-this': number;
                '@aws-appsync/no-try': number;
                '@aws-appsync/no-while': number;
                '@aws-appsync/no-recursion': number;
                '@aws-appsync/no-disallowed-unary-operators': number;
                '@aws-appsync/no-disallowed-methods': number;
                '@aws-appsync/no-disallowed-binary-operators': number;
                '@aws-appsync/no-function-passing': number;
                '@aws-appsync/no-promise': number;
                '@aws-appsync/no-function-reassign': number;
                '@aws-appsync/no-function-return': number;
                '@aws-appsync/no-disallowed-re-assignment': number;
            };
        };
        base: {
            plugins: string[];
            parser: string;
            rules: {
                '@aws-appsync/no-async': number;
                '@aws-appsync/no-await': number;
                '@aws-appsync/no-classes': number;
                '@aws-appsync/no-for': number;
                '@aws-appsync/no-continue': number;
                '@aws-appsync/no-generators': number;
                '@aws-appsync/no-yield': number;
                '@aws-appsync/no-labels': number;
                '@aws-appsync/no-this': number;
                '@aws-appsync/no-try': number;
                '@aws-appsync/no-while': number;
                '@aws-appsync/no-disallowed-unary-operators': number;
                '@aws-appsync/no-disallowed-binary-operators': number;
                '@aws-appsync/no-promise': number;
                '@aws-appsync/no-disallowed-re-assignment': number;
            };
        };
    };
};
export = _default;
//# sourceMappingURL=index.d.ts.map