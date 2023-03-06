"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_disallowed_re_assignment_1 = __importDefault(require("./no-disallowed-re-assignment"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 2018 } });
tester.run('no-disallowed-re-assignment', no_disallowed_re_assignment_1.default, {
    valid: [
        {
            code: 'console.log(10)',
        },
        {
            code: `
        // assignment of  property in arg
        function request(ctx) {
          ctx.args.something = 'something';
          const { args: { id } } = ctx
          return {
            operation: 'GetItem',
            key: util.dynamodb.toMapValues({ id })
          }
        }
        /**
        * Returns the result directly
        * @param ctx the context object holds contextual information about the function invocation.
        */
        function response(ctx) {
          ctx.result.val = ctx.args.something;
          return ctx.result
        }
    `,
        },
        {
            code: `
        function request(context) {
          // assignment of property in arg
          context.args.id = context.args.id || util.autoId();
          return {
            operation: 'GetItem',
            key: util.dynamodb.toMapValues({ id })
          }
        }
        /**
        * Returns the result directly
        * @param ctx the context object holds contextual information about the function invocation.
        */
        function response(ctx) {
          ctx.result.val = ctx.args.something;
          return ctx.result
        }
    `,
        },
        {
            code: `
        function request(context) {
          // ++ and -- operator for property in arg
          context.args.id++;
          --context.stash.id
          return {}
        }
        /**
        * Returns the result directly
        * @param ctx the context object holds contextual information about the function invocation.
        */
        function response(ctx) {
          ctx.result.val = ctx.args.something;
          return ctx.result
        }
    `,
        },
        {
            code: `
        function request(context) {
          // passing arg to a function
          return JSON.stringify(context.stash);
        }
        /**
        * Returns the result directly
        * @param ctx the context object holds contextual information about the function invocation.
        */
        function response(ctx) {
          ctx.result.val = ctx.args.something;
          return ctx.result
        }
    `,
        },
        {
            code: `
        function request(context) {
          // using arg as a key
          return myObj[context.args] = 'something';
        }
        /**
        * Returns the result directly
        * @param ctx the context object holds contextual information about the function invocation.
        */
        function response(ctx) {
          ctx.result.val = ctx.args.something;
          return ctx.result
        }
    `,
        },
        {
            code: `
        function request(context) {
          // conditional expression
          const myArgs = context.args ? context.args : {};
          myArgs.id = myArgs.id || util.autoId();
          return {};
        }
        /**
        * Returns the result directly
        * @param ctx the context object holds contextual information about the function invocation.
        */
        function response(ctx) {
          return {}
        }
    `,
        },
        {
            code: `
        function request(context) {
          return {};
        }
        /**
        * Returns the result directly
        * @param ctx the context object holds contextual information about the function invocation.
        */
        function response(ctx) {
          return ctx.stash.cache.get(ctx.args.id).value;
        }
    `,
        },
        {
            code: `
          // creating a shadow variable
          function request(ctx) {
            if(true) {
              const ctx = 'this should cause error'
              return {};
            }
          }
          function response(ctx) {
            return ctx.result
          }
      `,
        },
    ],
    invalid: [
        {
            errors: [
                {
                    messageId: 'noReAssignCtx',
                    data: {
                        name: 'ctx',
                    },
                },
            ],
            code: `
          function request(ctx) {
            ctx = 'this should cause error'
            return {};
          }
          function response(ctx) {
            return ctx.result
          }
      `,
        },
        {
            errors: [
                {
                    messageId: 'noReAssignCtxPropWithName',
                    data: {
                        ctxIdentifier: 'ctx',
                        propName: 'args',
                    },
                },
            ],
            code: `
          function request(ctx) {
            ctx.args = 'this should cause error'
            return {};
          }
          function response(ctx) {
            return ctx.result
          }
      `,
        },
        {
            errors: [
                {
                    messageId: 'noReAssignCtxPropWithName',
                    data: {
                        ctxIdentifier: 'ctx',
                        propName: 'newProp',
                    },
                },
            ],
            code: `
          function request(ctx) {
            ctx.newProp = 'this should cause error'
            return {};
          }
          function response(ctx) {
            return ctx.result
          }
      `,
        },
        {
            errors: [
                {
                    messageId: 'noReAssignCtxPropWithName',
                    data: {
                        ctxIdentifier: 'ctx',
                        propName: 'stash',
                    },
                },
            ],
            code: `
        function request(ctx) {
          ctx['stash'] = 'this should cause error'
          return {};
        }
        function response(ctx) {
          return ctx.result
        }
    `,
        },
        {
            errors: [
                {
                    messageId: 'noReAssignCtxPropWithName',
                    data: {
                        ctxIdentifier: 'appSyncContext',
                        propName: 'args',
                    },
                },
                {
                    messageId: 'noReAssignCtxPropWithName',
                    data: {
                        ctxIdentifier: 'appSyncContext',
                        propName: 'stash',
                    },
                },
            ],
            code: `
        function request(appSyncContext) {
          ++appSyncContext['args'];
          appSyncContext.stash--;
          return {};
        }
        function response(ctx) {
          return ctx.result
        }
    `,
        },
        {
            errors: [
                {
                    messageId: 'noReAssignCtxPropWithName',
                    data: {
                        ctxIdentifier: 'context1',
                        propName: 'args',
                    },
                },
                {
                    messageId: 'noReAssignCtxPropWithName',
                    data: {
                        ctxIdentifier: 'context1',
                        propName: 'stash',
                    },
                },
            ],
            code: `
        function request(context1) {
          delete context1['args'];
          delete context1.stash;
          return {};
        }
        function response(ctx) {
          return ctx.result
        }
    `,
        },
        {
            errors: [
                {
                    messageId: 'noReAssignCtxPropWithName',
                    data: {
                        ctxIdentifier: 'ctx',
                        propName: 'args',
                    },
                },
            ],
            code: `
        function request(ctx) {
          // for in statement
          for (ctx.args in { a: 1, b: 2, c: 3 }) {
            // should cause error 
          }
          return {};
        }

        /**
        * Returns the result directly
        * @param ctx the context object holds contextual information about the function invocation.
        */
        function response(ctx) {
         
          return {}
        }
    `,
        },
    ],
});
//# sourceMappingURL=no-disallowed-re-assignment.test.js.map