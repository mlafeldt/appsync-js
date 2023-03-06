import noAsync from './rules/no-async';
import noAwait from './rules/no-await';
import noClasses from './rules/no-classes';
import noFor from './rules/no-for';
import noContinue from './rules/no-continue';
import noGenerators from './rules/no-generators';
import noLabels from './rules/no-labels';
import noThis from './rules/no-this';
import noTry from './rules/no-try';
import noWhile from './rules/no-while';
import noYield from './rules/no-yield';
import noRecursion from './rules/no-recursion';
import noDisallowedUnaryOperators from './rules/no-disallowed-unary-operators';
import noDisallowedMethods from './rules/no-disallowed-methods';
import noDisallowedBinaryOperators from './rules/no-disallowed-binary-operator';
import noFunctionPassing from './rules/no-function-passing';
import noPromise from './rules/no-promise';
import noFunctionReturn from './rules/no-function-return';
import noFunctionReassign from './rules/no-function-reassign';
import noDisallowedReAssignment from './rules/no-disallowed-re-assignment';

export = {
  rules: {
    'no-async': noAsync,
    'no-await': noAwait,
    'no-classes': noClasses,
    'no-for': noFor,
    'no-continue': noContinue,
    'no-generators': noGenerators,
    'no-yield': noYield,
    'no-labels': noLabels,
    'no-this': noThis,
    'no-try': noTry,
    'no-while': noWhile,
    'no-recursion': noRecursion,
    'no-disallowed-unary-operators': noDisallowedUnaryOperators,
    'no-disallowed-methods': noDisallowedMethods,
    'no-disallowed-binary-operators': noDisallowedBinaryOperators,
    'no-function-passing': noFunctionPassing,
    'no-promise': noPromise,
    'no-function-reassign': noFunctionReassign,
    'no-function-return': noFunctionReturn,
    'no-disallowed-re-assignment': noDisallowedReAssignment,
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
