"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const no_async_1 = __importDefault(require("./rules/no-async"));
const no_await_1 = __importDefault(require("./rules/no-await"));
const no_classes_1 = __importDefault(require("./rules/no-classes"));
const no_for_1 = __importDefault(require("./rules/no-for"));
const no_continue_1 = __importDefault(require("./rules/no-continue"));
const no_generators_1 = __importDefault(require("./rules/no-generators"));
const no_labels_1 = __importDefault(require("./rules/no-labels"));
const no_this_1 = __importDefault(require("./rules/no-this"));
const no_try_1 = __importDefault(require("./rules/no-try"));
const no_while_1 = __importDefault(require("./rules/no-while"));
const no_yield_1 = __importDefault(require("./rules/no-yield"));
const no_recursion_1 = __importDefault(require("./rules/no-recursion"));
const no_disallowed_unary_operators_1 = __importDefault(require("./rules/no-disallowed-unary-operators"));
const no_disallowed_methods_1 = __importDefault(require("./rules/no-disallowed-methods"));
const no_disallowed_binary_operator_1 = __importDefault(require("./rules/no-disallowed-binary-operator"));
const no_function_passing_1 = __importDefault(require("./rules/no-function-passing"));
const no_promise_1 = __importDefault(require("./rules/no-promise"));
const no_function_return_1 = __importDefault(require("./rules/no-function-return"));
const no_function_reassign_1 = __importDefault(require("./rules/no-function-reassign"));
const no_disallowed_re_assignment_1 = __importDefault(require("./rules/no-disallowed-re-assignment"));
module.exports = {
    rules: {
        'no-async': no_async_1.default,
        'no-await': no_await_1.default,
        'no-classes': no_classes_1.default,
        'no-for': no_for_1.default,
        'no-continue': no_continue_1.default,
        'no-generators': no_generators_1.default,
        'no-yield': no_yield_1.default,
        'no-labels': no_labels_1.default,
        'no-this': no_this_1.default,
        'no-try': no_try_1.default,
        'no-while': no_while_1.default,
        'no-recursion': no_recursion_1.default,
        'no-disallowed-unary-operators': no_disallowed_unary_operators_1.default,
        'no-disallowed-methods': no_disallowed_methods_1.default,
        'no-disallowed-binary-operators': no_disallowed_binary_operator_1.default,
        'no-function-passing': no_function_passing_1.default,
        'no-promise': no_promise_1.default,
        'no-function-reassign': no_function_reassign_1.default,
        'no-function-return': no_function_return_1.default,
        'no-disallowed-re-assignment': no_disallowed_re_assignment_1.default,
    },
    configs: {
        recommended: {
            plugins: ['@aws-appsync'],
            parser: '@typescript-eslint/parser',
            rules: {
                '@aws-appsync/no-async': 2,
                '@aws-appsync/no-await': 2,
                '@aws-appsync/no-classes': 2,
                '@aws-appsync/no-for': 2,
                '@aws-appsync/no-continue': 2,
                '@aws-appsync/no-generators': 2,
                '@aws-appsync/no-yield': 2,
                '@aws-appsync/no-labels': 2,
                '@aws-appsync/no-this': 2,
                '@aws-appsync/no-try': 2,
                '@aws-appsync/no-while': 2,
                '@aws-appsync/no-recursion': 2,
                '@aws-appsync/no-disallowed-unary-operators': 2,
                '@aws-appsync/no-disallowed-methods': 2,
                '@aws-appsync/no-disallowed-binary-operators': 2,
                '@aws-appsync/no-function-passing': 2,
                '@aws-appsync/no-promise': 2,
                '@aws-appsync/no-function-reassign': 2,
                '@aws-appsync/no-function-return': 2,
                '@aws-appsync/no-disallowed-re-assignment': 2,
            },
        },
        base: {
            plugins: ['@aws-appsync'],
            parser: '@typescript-eslint/parser',
            rules: {
                '@aws-appsync/no-async': 2,
                '@aws-appsync/no-await': 2,
                '@aws-appsync/no-classes': 2,
                '@aws-appsync/no-for': 2,
                '@aws-appsync/no-continue': 2,
                '@aws-appsync/no-generators': 2,
                '@aws-appsync/no-yield': 2,
                '@aws-appsync/no-labels': 2,
                '@aws-appsync/no-this': 2,
                '@aws-appsync/no-try': 2,
                '@aws-appsync/no-while': 2,
                '@aws-appsync/no-disallowed-unary-operators': 2,
                '@aws-appsync/no-disallowed-binary-operators': 2,
                '@aws-appsync/no-promise': 2,
                '@aws-appsync/no-disallowed-re-assignment': 2,
            },
        },
    },
};
//# sourceMappingURL=index.js.map