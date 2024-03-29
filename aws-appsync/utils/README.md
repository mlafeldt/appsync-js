# Type definition for @aws-appsync/utils

This project contains utility function definitions and type definitions for working with AWS AppSync Resolvers written in JavaScript using the APPSYNC_JS runtime. This includes the `util` and `extensions` utilities. For more information on these utilities, see the AppSync [documentation](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-util-reference-js.html).

## Usage

Install the type definition by running

```bash
npm install @aws-appsync/utils
```

In your AppSync function code definition:

```js
import { util, extentions } from '@aws-appsync/utils';

/**
 * Creates a new item in a DynamoDB table
 * @param ctx contextual information about the request
 */
export function request(ctx) {
  const { input: values } = ctx.arguments;
  const key = { id: util.autoId() };
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues(key),
    attributeValues: util.dynamodb.toMapValues(values),
  };
}

/**
 * Returns the result
 * @param ctx contextual information about the request
 */
export function response(ctx) {
  const { error, result } = ctx;
  if (error) {
    return util.appendError(error.message, error.type, result);
  }
  return ctx.result;
}  
```
