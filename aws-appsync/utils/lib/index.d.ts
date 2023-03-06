export * from './resolver-return-types';
/**
 * The Util object contains general utility methods to help you work with data.
 */
type Util = {
    /**
     * Returns the input string as a JavaScript escaped string.
     * @param {string} value - String value to escape
     * @returns {string} - JavaScript escaped string
     */
    escapeJavaScript(value: string): string;
    /**
     * Returns the input string as an `application/x-www-form-urlencoded` encoded string.
     * @param {string} value - string value to encode
     * @returns {string} - Url encoded string
     */
    urlEncode(value: string): string;
    /**
     * Decodes an `application/x-www-form-urlencoded` encoded string back to its non-encoded form.
     * @param {string} value - String value to decode
     * @returns {string} - Url decoded string
     */
    urlDecode(value: string): string;
    /**
     * Encodes string to a base64 string
     * @param {string} value - string to be encoded
     * @returns {string} - base64 encode string
     */
    base64Encode(bytes: string): string;
    /**
     * Decodes a base64 encoded string
     * @param {string} value - base64 encoded string
     * @returns {string} - base64 decoded string
     */
    base64Decode(value: string): string;
    /**
     * Returns a 128-bit randomly generated UUID.
     * @returns {string} - Randomly generated UUID
     */
    autoId(): string;
    /**
     * Returns a 128-bit randomly generated ULID (Universally Unique Lexicographically Sortable
     * Identifier).
     * @returns {string} - Randomly generated UUID
     */
    autoUlid(): string;
    /**
     * Returns a 128-bit randomly generated KSUID (K-Sortable Unique Identifier) base62 encoded as
     * a String with a length of 27.
     * @returns {string} - Randomly generated UUID
     */
    autoKsuid(): string;
    /**
     * Throws Unauthorized for the field being resolved. Use this in request or response mapping
     * templates to determine whether to allow the caller to resolve the field.
     */
    unauthorized(): void;
    /**
     * Throws a custom error. Use this in request or response mapping templates to detect an error
     * with the request or with the invocation result. You can also specify an `errorType` and a
     * `data` field, and an `errorInfo` field. The `data` value will be added to the corresponding
     * `error` block inside `errors` in the GraphQL response. Note: `data` will be filtered based
     * on the query selection set. The `errorInfo` value will be added to the corresponding `error`
     * block inside `errors` in the GraphQL response. Note: `errorInfo` will NOT be filtered based
     * on the query selection set.
     * @param {string} msg - Custom error message
     * @param {string} errorType? - Custom error type
     * @param {any} data? - Custom data object
     * @param {any} errorInfo? - Error info object
     */
    error(msg: string, errorType?: string, data?: any, errorInfo?: any): void;
    /**
     * Appends a custom error. Use this in request or response mapping templates to detect an error
     * with the request or with the invocation result. You can also specify an `errorType` and a
     * `data` field, and an `errorInfo` field. The `data` value will be added to the corresponding
     * `error` block inside `errors` in the GraphQL response. Note: `data` will be filtered based
     * on the query selection set. The `errorInfo` value will be added to the corresponding `error`
     * block inside `errors` in the GraphQL response. Note: `errorInfo` will NOT be filtered based
     * on the query selection set. Unlike `Util.error`, the template evaluation will not be
     * interuppted, so that data can be returned to the caller.
     * @param  {string} msg - Custom error message
     * @param {string} errorType? - Custom error type
     * @param {any} data? - Custom data object
     * @param {any} errorInfo? - Error info object
     * @returns void
     */
    appendError(msg: string, errorType?: string, data?: any, errorInfo?: any): void;
    /**
     * Returns true if the specified pattern in the first argument matches the supplied data in the
     * second argument. The pattern must be a regular expression such as `Util.matches("a*b",
     * "aaaaab")`. The functionality is based on Pattern, which you can reference for further
     * documentation.
     * @param {string} pattern - Regex pattern to match
     * @param {string} value - Value to match pattern against
     * @returns {boolean} - Indicates match was found
     */
    matches(pattern: string, value: string): boolean;
    /**
     * Returns a String describing the multi-auth type being used by a request, returning back
     * either "IAM Authorization", "User Pool Authorization", "Open ID Connect Authorization", or
     * "API Key Authorization".
     * @returns {string} - Auth type
     */
    authType(): String;
    /**
     * The `util.time` variable contains datetime methods to help generate timestamps, convert
     * between datetime formats, and parse datetime strings. The syntax for datetime formats is
     * based on DateTimeFormatter which you can reference for further documentation. Below we
     * provide some examples, as well as a list of available methods and descriptions.
     */
    time: Time;
    /**
     * `util.dynamodb` contains helper methods that make it easier to write and read data to Amazon
     * DynamoDB, such as automatic type mapping and formatting. These methods are designed to make
     * mapping primitive types and Lists to the proper DynamoDB input format automatically, which
     * is a Map of the format `{ "TYPE" : VALUE }`.
     */
    dynamodb: Dynamodb;
    /**
     * `util.rds` contains helper methods that makes it easier to write and read data from Amazon
     * RDS.
     */
    rds: Rds;
    /**
     * The `util.http` utility provides helper methods that you can use to manage HTTP request
     * parameters and to add response headers.
     */
    http: Http;
    /**
     *  `util.xml` contains helper methods that can make it easier to translate XML responses
     * to JSON or a Dictionary.
     */
    xml: Xml;
    /**
     * `util.transform` contains helper methods that make it easier to perform complex operations
     * against data sources, such as Amazon DynamoDB filter operations.
     */
    transform: Transform;
    /**
     * `util.math1 contains methods to help with common Math operations.
     */
    math: Math;
    /**
     * `util.str` contains methods to help with common String operations.
     */
    str: String;
};
type Time = {
    /**
     * Returns a String representation of UTC in ISO8601 format.
     * @returns {string} - Current time formatted ISO8601
     */
    nowISO8601(): string;
    /**
     * Returns the number of seconds from the epoch of 1970-01-01T00:00:00Z to now.
     * @returns {number} - Current time in seconds
     */
    nowEpochSeconds(): number;
    /**
     * Returns the number of milliseconds from the epoch of 1970-01-01T00:00:00Z to now.
     * @returns {number} - Current time in milliseconds
     */
    nowEpochMilliSeconds(): number;
    /**
     * Returns a string of the current timestamp in UTC using the specified format from a String
     * input type.
     * @param {string} formatString - Date format string
     * @returns {string} - Current time formatted
     */
    nowFormatted(formatString: string): string;
    /**
     * Returns a string of the current timestamp for a timezone using the specified format and
     * timezone from String input types.
     * @param {string} formatString - Date format string
     * @param {string} timezone - Timezone
     * @returns {string} - Current time formatted
     */
    nowFormatted(formatString: string, timezone: string): string;
    /**
     * Parses a timestamp passed as a String, along with a format, and return the timestamp as
     * milliseconds since epoch.
     * @param {string} timestamp - Formatted timestamp
     * @param {string} formatString - Date format string
     * @returns {number} - Parsed time
     */
    parseFormattedToEpochMilliSeconds(timestamp: string, formatString: string): number;
    /**
     * Parses a timestamp passed as a String, along with a format and time zone, and return the
     * timestamp as milliseconds since epoch.
     * @param {string} timestamp - Formatted timestamp
     * @param {string} formatString - Date format string
     * @param {string} timezone - Timezone
     * @returns {number} - Parsed time
     */
    parseFormattedToEpochMilliSeconds(timestamp: string, formatString: string, timezone: string): number;
    /**
     * Parses an ISO8601 timestamp, passed as a String, and return the timestamp as milliseconds
     * since epoch.
     * @param {string} timestamp - ISO 8601 timestamp
     * @returns {number} - Parsed timestamp in milliseconds
     */
    parseISO8601ToEpochMilliSeconds(timestamp: string): number;
    /**
     * Converts an epoch milliseconds timestamp to an epoch seconds timestamp.
     * @param {number} milliseconds - Milliseconds since epoch
     * @returns {number} - Seconds since epoch
     */
    epochMilliSecondsToSeconds(milliseconds: number): number;
    /**
     * Converts a epoch milliseconds timestamp to an ISO8601 timestamp.
     * @param {number} milliseconds - Milliseconds since epoch
     * @returns {string} - Date in ISO 8601 format
     */
    epochMilliSecondsToISO8601(milliseconds: number): string;
    /**
     * Converts a epoch milliseconds timestamp, passed as long, to a timestamp formatted according
     * to the supplied format in UTC.
     * @param {number} milliseconds - Milliseconds since epoch
     * @param {string} formatString - Date format string
     * @returns {string} - Formatted timestamp
     */
    epochMilliSecondsToFormatted(milliseconds: number, formatString: string): string;
    /**
     * Converts a epoch milliseconds timestamp, passed as long, to a timestamp formatted according
     * to the supplied format in UTC.
     * @param {number} milliseconds - Milliseconds since epoch
     * @param {string} formatString - Date format string
     * @param {string} timezone - Timezone
     * @returns {string} - Formatted timestamp
     */
    epochMilliSecondsToFormatted(milliseconds: number, formatString: string, timezone: string): string;
};
type Dynamodb = {
    /**
     * General object conversion tool for DynamoDB that converts input objects to the appropriate
     * DynamoDB representation. It's opinionated about how it represents some types: e.g., it will
     * use lists ("L") rather than sets ("SS", "NS", "BS"). This returns an object that describes
     * the DynamoDB attribute value.
     *
     * String example:
     * ```
     * Input:      util.dynamodb.toDynamoDB("foo")
     * Output:     { "S" : "foo" }
     * ```
     *
     * Object example:
     * ```
     * Input:      util.dynamodb.toDynamoDB({ "foo": "bar", "baz" : 1234, "beep": [ "boop"] })
     * Output:     {
     *                 "M" : {
     *                     "foo"  : { "S" : "bar" },
     *                     "baz"  : { "N" : 1234 },
     *                     "beep" : {
     *                         "L" : [
     *                             { "S" : "boop" }
     *                         ]
     *                     }
     *                 }
     *             }
     * ```
     * @param {any} obj - Object to convert to DynamoDB attribute value
     * @returns {any} - Object that describes DynamoDB attribute value
     */
    toDynamoDB(obj: any): any;
    /**
     * Convert an input string to the DynamoDB string format. This returns an object that describes
     * the DynamoDB attribute value.
     * @param {any} obj Object to convert to DynamoDB attribute value
     * @returns {string} - DynamoDB attribute object as string
     */
    toString(obj: any): string;
    /**
     * Converts a lists with Strings to the DynamoDB string set format. This returns an object that
     * describes the DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toStringSet([ "foo", "bar", "baz" ])
     * Output:     { "SS" : [ "foo", "bar", "baz" ] }
     * ```
     * @param list - List to convert to DynamoDB attribute value
     * @returns {any} - DynamoDB attribute object
     */
    toStringSet(list: string[]): any;
    /**
     * Converts a number to the DynamoDB number format. This returns an object that describes the
     * DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toNumber(12345)
     * Output:     { "N" : 12345 }
     * ```
     * @param {number} num - Number to convert to DynamoDB attribute value
     * @returns {any} - DynamoDB attribute object
     */
    toNumber(num: number): any;
    /**
     * Converts a list of numbers to the DynamoDB number set format. This returns an object that
     * describes the DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toNumberSet([ 1, 23, 4.56 ])
     * Output:     { "NS" : [ 1, 23, 4.56 ] }
     * ```
     * @param {number[]} numbers - Numbers to convert to DynamoDB number set
     * @returns {any} - DynamoDB attribute object
     */
    toNumberSet(numbers: number[]): any;
    /**
     * Converts binary data encoded as a base64 string to DynamoDB binary format. This returns an
     * object that describes the DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toBinary("foo")
     * Output:     { "B" : "foo" }
     * ```
     * @param {string} value - Base64 encoded string
     * @returns {any} - DynamoDB attribute object
     */
    toBinary(value: string): any;
    /**
     * Converts a list of binary data encoded as base64 strings to DynamoDB binary set format. This
     * returns an object that describes the DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toBinarySet([ "foo", "bar", "baz" ])
     * Output:     { "BS" : [ "foo", "bar", "baz" ] }
     * ```
     * @param {string[]} values - Base64 encoded string array
     * @returns {any} - DynamoDB attribute object
     */
    toBinarySet(values: string[]): any;
    /**
     * Converts a Boolean to the appropriate DynamoDB Boolean format. This returns an object that
     * describes the DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toBoolean(true)
     * Output:     { "BOOL" : true }
     * ```
     * @param {boolean} value - value to convert to DynamoDB attribute
     * @returns {any} - DynamoDB attribute object
     */
    toBoolean(value: boolean): any;
    /**
     * Converts a Boolean to the appropriate DynamoDB Boolean format. This returns an object that
     * describes the DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toNull()
     * Output:     { "NULL" : null }
     * ```
     * @returns {any} - DynamoDB attribute object
     */
    toNull(): any;
    /**
     * Converts a list of object to DynamoDB list format. Each item in the list is also converted
     * to its appropriate DynamoDB format. It's opinionated about how it represents some of the
     * nested objects: e.g., it will use lists ("L") rather than sets ("SS", "NS", "BS"). This
     * returns an object that describes the DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toList([ "foo", 123, { "bar" : "baz" } ])
     * Output:     {
     *               "L" : [
     *                   { "S" : "foo" },
     *                   { "N" : 123 },
     *                   {
     *                       "M" : {
     *                           "bar" : { "S" : "baz" }
     *                       }
     *                   }
     *               ]
     *           }
     * ```
     * @param {any[]} value - value to convert to DynamoDB attribute
     * @returns {any} - DynamoDB attribute object
     */
    toList(value: any[]): any;
    /**
     * Converts a map to DynamoDB map format. Each value in the map is also converted to its
     * appropriate DynamoDB format. It's opinionated about how it represents some of the nested
     * objects: e.g., it will use lists ("L") rather than sets ("SS", "NS", "BS"). This returns
     * an object that describes the DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toMap({ "foo": "bar", "baz" : 1234, "beep": [ "boop"] })
     * Output:     {
     *                "M" : {
     *                    "foo"  : { "S" : "bar" },
     *                    "baz"  : { "N" : 1234 },
     *                    "beep" : {
     *                        "L" : [
     *                            { "S" : "boop" }
     *                        ]
     *                    }
     *                }
     *            }
     * ```
     * @param {any} value - value to convert to DynamoDB attribute
     * @returns {any} - DynamoDB attribute object
     */
    toMap(value: any): any;
    /**
     * Creates a copy of the map where each value has been converted to its appropriate DynamoDB
     * format. It's opinionated about how it represents some of the nested objects: e.g., it will
     * use lists ("L") rather than sets ("SS", "NS", "BS").
     * ```
     * Input:      util.dynamodb.toMapValues({ "foo": "bar", "baz" : 1234, "beep": [ "boop"] })
     * Output:     {
     *                "foo"  : { "S" : "bar" },
     *                "baz"  : { "N" : 1234 },
     *                "beep" : {
     *                    "L" : [
     *                        { "S" : "boop" }
     *                    ]
     *                }
     *            }
     * ```
     * Note: this is slightly different to `util.dynamodb.toMap(Map)` as it returns only the
     * contents of the DynamoDB attribute value, but not the whole attribute value itself. For
     * example, the following statements are exactly the same:
     * ```
     * util.dynamodb.toMapValues(obj)
     * util.dynamodb.toMap(obj)["M"]
     * ```
     *
     * @param {any} value - value to convert to DynamoDB attribute
     * @returns {any} - DynamoDB attribute object
     */
    toMapValues(value: any): any;
    /**
     * Converts the key, bucket and region into the DynamoDB S3 Object representation. This returns
     * an object that describes the DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toS3Object("foo", "bar", "baz")
     * Output:     { "S" : "{ \"s3\" : { \"key\" : \"foo", \"bucket\" : \"bar", \"region\" : \"baz" } }" }
     * ```
     * @param {string} key - S3 object key
     * @param {string} bucket - S3 bucket
     * @param {string} region - AWS Region
     * @returns {any} - DynamoDB attribute object
     */
    toS3Object(key: string, bucket: string, region: string): any;
    /**
     * Converts the key, bucket, region and optional version into the DynamoDB S3 Object
     * representation. This returns an object that describes the DynamoDB attribute value.
     * ```
     * Input:      util.dynamodb.toS3Object("foo", "bar", "baz", "beep")
     * Output:     { "S" : "{ \"s3\" : { \"key\" : \"foo\", \"bucket\" : \"bar\", \"region\" : \"baz\", \"version\" = \"beep\" } }" }
     * ```
     * @param {string} key - S3 object key
     * @param {string} bucket - S3 bucket
     * @param {string} region - AWS Region
     * @param {string} version - S3 object version
     * @returns {any} - DynamoDB attribute object
     */
    toS3Object(key: string, bucket: string, region: string, version: string): any;
    /**
     * Accepts the string value of a DynamoDB S3 Object and returns a map that contains the key,
     * bucket, region and optional version.
     * @param s3ObjectString S3 object key
     * @returns {any} DynamoDB attribute object
     */
    fromS3ObjectJson(s3ObjectString: string): any;
};
type Rds = {
    /**
     * This is the same as `util.rds.toJsonString`, but with the result being a JSON Object.
     * @param searializedSQLResult - Serialized SQL result
     * @returns {any} - Object representing SQL results
     */
    toJsonObject(searializedSQLResult: string): any;
};
type Http = {
    /**
     * Copies the header from the map without the restricted set of HTTP headers. You can use this
     * to forward request headers to your downstream HTTP endpoint.
     * @param {any} headers - Headers object
     * @returns {any} - Copy of headers minus restricted HTTP headers
     */
    copyHeaders(headers: any): any;
    /**
     * Adds a single custom header with the name (String) and value (Object) of the response. The
     * following limitations apply:
     * * Header names can't match any of the existing or restricted AWS or AWS AppSync headers.
     * * Header names can't start with restricted prefixes, such as `x-amzn-` or `x-amz-`.
     * * The size of custom response headers can't exceed 4 KB. This includes header names and values.
     * * You should define each response header once per GraphQL operation. However, if you define a
     *   custom header with the same name multiple times, the most recent definition appears in the
     *   response. All headers count towards the header size limit regardless of naming
     * ```
     * util.http.addResponseHeader("itemsCount", 7)
     * util.http.addResponseHeader("render", context.args.render)
     * ```
     * @param {string} name - Header name
     * @param {any} value - Header value
     */
    addResponseHeader(name: string, value: any): void;
    /**
     * Adds multiple response headers to the response from the specified map of names (String) and
     * values (Object). The same limitations listed for the addResponseHeader(String, Object) method
     * also apply to this method.
     * ```
     * const headersMap = {headerInt: 12, headerString: 'stringValue', headerObject: {field1: 7, field2: 'string'}}
     * util.http.addResponseHeaders(headersMap)
     * ```
     * @param {any} headers - Headers map
     */
    addResponseHeaders(headers: any): void;
};
type Xml = {
    /**
     * Converts an XML string to a Dictionary.
     * ```
     * Input:
     *
     * <?xml version="1.0" encoding="UTF-8"?>
     * <posts>
     * <post>
     *   <id>1</id>
     *   <title>Getting started with GraphQL</title>
     * </post>
     * </posts>
     *
     * Output (JSON representation):
     *
     * {
     *   "posts":{
     *     "post":{
     *       "id":1,
     *       "title":"Getting started with GraphQL"
     *     }
     *   }
     * }
     * ```
     * @param {string} xml - XML string
     * @returns {any} - Object representation of XML
     */
    toMap(xml: string): any;
    /**
     * Converts an XML string to a JSON string. This is similar to toMap, except that the output is
     * a string. This is useful if you want to directly convert and return the XML response from an
     * HTTP object to JSON.
     * @param {string} xml - XML string
     * @returns {string} - JSON representation of XML
     */
    toJsonString(xml: string): String;
    /**
     * Converts an XML string to a JSON string with an optional Boolean parameter to determine if
     * you want to string-encode the JSON.
     * @param {string} xml - XML string
     * @returns {string} - String encoded JSON representation of XML
     */
    toJsonString(xml: string, stringEncode: boolean): String;
};
type Transform = {
    /**
     * Converts an input string to a filter expression for use with DynamoDB.
     * ```
     * Input:
     * util.transform.toDynamoDBFilterExpression({
     *     "title":{
     *       "contains":"Hello World"
     *     }
     *   })
     *
     * Output:
     *
     * {
     *     "expression" : "contains(#title, :title_contains)"
     *     "expressionNames" : {
     *         "#title" : "title",
     *     },
     *     "expressionValues" : {
     *         ":title_contains" : { "S" : "Hello World" }
     *     },
     * }
     * ```
     * @param {any} filterObject - Object representing DynamoDB filter
     * @returns {any} - DynamoDB filter expression object
     */
    toDynamoDBFilterExpression(filterObject: any): any;
    /**
     * Converts the given input into its equivalent DynamoDB condition expression, returning it as a Json string.
     *
     * The default Operator is assumed to be `AND`. The method behaves similarly as toDynamoDBFilterExpression, except
     * that it supports the remaining method that Dynamo condition expression supports, such as size, attribute_exists.
     * @param  {any} conditionObject Object representing DynamoDB condition
     * @returns string the evaluated DynamoDB condition
     */
    toDynamoDBConditionExpression(conditionObject: any): string;
    /**
     * Converts the given input into its equivalent OpenSearch Query DSL expression, returning it
     * as a JSON string.
     * ```
     * Input:
     *
     * util.transform.toElasticsearchQueryDSL({
     *     "upvotes":{
     *         "ne":15,
     *         "range":[
     *             10,
     *             20
     *         ]
     *     },
     *     "title":{
     *         "eq":"hihihi",
     *         "wildcard":"h*i"
     *     }
     *   })
     *
     * Output:
     * {
     *     "bool":{
     *       "must":[
     *           {
     *             "bool":{
     *               "must":[
     *                   {
     *                     "bool":{
     *                       "must_not":{
     *                         "term":{
     *                           "upvotes":15
     *                         }
     *                       }
     *                     }
     *                   },
     *                   {
     *                     "range":{
     *                       "upvotes":{
     *                         "gte":10,
     *                         "lte":20
     *                       }
     *                     }
     *                   }
     *               ]
     *             }
     *           },
     *           {
     *             "bool":{
     *               "must":[
     *                   {
     *                     "term":{
     *                       "title":"hihihi"
     *                     }
     *                   },
     *                   {
     *                   "wildcard":{
     *                       "title":"h*i"
     *                     }
     *                   }
     *               ]
     *             }
     *           }
     *       ]
     *     }
     * }
     * ```
     * The default operator is assumed to be AND.
     * @param {any} obj - Object representing OpenSearch Query
     * @returns {any} - OpenSearch Query DSL expression
     */
    toElasticsearchQueryDSL(obj: any): any;
    /**
     * Converts a Map input object to a `SubscriptionFilter` expression object. The
     * `util.transform.toSubscriptionFilter` method is used as an input to the
     * `extensions.setSubscriptionFilter()` extension. For more information, see Extensions.
     * @param {any} obj - Object representing subscription filter
     * @returns {any} Subscription Filter expression object
     */
    toSubscriptionFilter(obj: any): any;
    /**
     * Converts a Map input object to a `SubscriptionFilter` expression object. The
     * `util.transform.toSubscriptionFilter` method is used as an input to the
     * `extensions.setSubscriptionFilter()` extension. For more information, see Extensions.
     *
     * The first argument is the Map input object that's converted to the `SubscriptionFilter`
     * expression object. The second argument is a List of field names that are ignored in the first
     * Map input object while constructing the `SubscriptionFilter` expression object.
     * @param {any} obj - Object representing subscription filter
     * @param {string[]} ignoredFields - Fields to ignore in filter expression
     * @returns {any} Subscription Filter expression object
     */
    toSubscriptionFilter(obj: any, ignoredFields: string[]): any;
    /**
     * Converts a Map input object to a `SubscriptionFilter` expression object. The
     * `util.transform.toSubscriptionFilter` method is used as an input to the
     * `extensions.setSubscriptionFilter()` extension. For more information, see Extensions.
     *
     * The first argument is the Map input object that's converted to the `SubscriptionFilter`
     * expression object, the second argument is a List of field names that will be ignored in the
     * first Map input object, and the third argument is a Map input object of strict rules that's
     * included while constructing the `SubscriptionFilter` expression object. These strict rules are
     * included in the `SubscriptionFilter` expression object in such a way that at least one of the
     * rules will be satisfied to pass the subscription filter.
     * @param {any} obj - Object representing subscription filter
     * @param {string[]} ignoredFields - Fields to ignore in filter expression
     * @param {any} rules - Strict rules
     * @returns {any} Subscription Filter expression object
     */
    toSubscriptionFilter(obj: any, ignoredFields: string[], rules: any): any;
};
type String = {
    /**
     * Normalizes a string using one of the four unicode normalization forms: NFC, NFD, NFKC, or
     * NFKD. The first argument is the string to normalize. The second argument is either "nfc",
     * "nfd", "nfkc", or "nfkd" specifying the normalization type to use for the normalization
     * process.
     * @param {string} value - Value to be normalized
     * @param {string} normalizationType - Normalization type
     * @returns {string} - Normalized string
     */
    normalize(value: string, normalizationType: string): string;
};
type Context = {
    /**
     * A map that contains all GraphQL arguments for this field.
     */
    arguments: any;
    /**
     * A map that contains all GraphQL arguments for this field.
     */
    args: any;
    /**
     * An object that contains information about the caller. For more information about the
     * structure of this field, see Identity.
     */
    identity: Identity;
    /**
     * A map that contains the resolution of the parent field.
     */
    source: any;
    /**
     * Contains potential error generated by a request.
     */
    error?: {
        /**
         * Details about the message
         */
        message: string;
        /**
         * type of error
         */
        type: string;
    };
    /**
     * The stash is a map that is made available inside each resolver and function mapping
     * template. The same stash instance lives through a single resolver execution. This means
     * that you can use the stash to pass arbitrary data across request and response mapping
     * templates, and across functions in a pipeline resolver. The stash exposes the same
     * methods as the Java Map data structure.
     */
    stash: any;
    /**
     * A container for the results of this resolver. This field is available only to response
     * mapping templates.
     *
     * For example, if you're resolving the author field of the following query:
     * ```
     * query {
     *     getPost(id: 1234) {
     *         postId
     *         title
     *         content
     *         author {
     *             id
     *             name
     *         }
     *     }
     * }
     * ```
     *
     * Then the full context variable that is available when processing a response mapping template might be:
     * ```
     * {
     *   "arguments" : {
     *     id: "1234"
     *   },
     *   "source": {},
     *   "result" : {
     *       "postId": "1234",
     *       "title": "Some title",
     *       "content": "Some content",
     *       "author": {
     *         "id": "5678",
     *         "name": "Author Name"
     *       }
     *   },
     *   "identity" : {
     *       "sourceIp" : ["x.x.x.x"],
     *       "userArn" : "arn:aws:iam::123456789012:user/appsync",
     *       "accountId" : "666666666666",
     *       "user" : "AIDAAAAAAAAAAAAAAAAAA"
     *   }
     * }
     * ```
     */
    result: any;
    /**
     * The result of whatever previous operation was executed in a pipeline resolver. If the
     * previous operation * was the pipeline resolver request mapping template, then
     * `context.prev.result` represents the output of the evaluation of the template, and is made
     * available to the first function in the pipeline. If the previous operation was the first
     * function, then context.prev.result represents the output of the first function, and is made
     * available to the second function in the pipeline. If the previous operation was the last
     * function, then context.prev.result represents the output of the first function, and is made
     * available to the second function in the pipeline. If the previous operation was the last
     * function, then context.prev.result represents the output of the last function, and is made
     * available to the pipeline resolver response mapping template.
     */
    prev: any;
    /**
     * AWS AppSync supports passing custom headers from clients and accessing them in your GraphQL
     * resolvers by using context.request.headers. You can then use the header values for actions
     * such as inserting data into a data source or authorization checks.
     */
    request: Request;
    /**
     * An object that contains information about the GraphQL request. For the structure of this
     * field, see Info.
     */
    info: Info;
};
type Identity = AppSyncIdentityIAM | AppSyncIdentityCognito | AppSyncIdentityOIDC | AppSyncIdentityLambda | undefined | null;
type AppSyncIdentityIAM = {
    /**
     * The AWS account ID of the caller.
     */
    accountId: string;
    /**
     * The Amazon Cognito identity pool ID associated with the caller.
     */
    cognitoIdentityPoolId: string;
    /**
     * The Amazon Cognito identity ID of the caller.
     */
    cognitoIdentityId: string;
    /**
     * The source IP address of the caller that AWS AppSync receives. If the request doesn't
     * include the `x-forwarded-for` header, the source IP value contains only a single IP address
     * from the TCP connection. If the request includes a `x-forwarded-for` header, the source IP
     * is a list of IP addresses from the `x-forwarded-for` header, in addition to the IP address
     * from the TCP connection.
     */
    sourceIp: string[];
    /**
     * The user name of the authenticated user. In the case of `AMAZON_COGNITO_USER_POOLS`
     * authorization, the value of username is the value of attribute `cognito:username`. In the
     * case of `AWS_IAM` authorization, the value of username is the value of the AWS user
     * principal. If you're using IAM authorization with credentials vended from Amazon Cognito
     * identity pools, we recommend that you use `cognitoIdentityId`.
     */
    username: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM user.
     */
    userArn: string;
    /**
     * Either authenticated or unauthenticated based on the identity type.
     */
    cognitoIdentityAuthType: string;
    /**
     * A comma-separated list of external identity provider information used in obtaining the
     * credentials used to sign the request.
     */
    cognitoIdentityAuthProvider: string;
};
type AppSyncIdentityCognito = {
    /**
     * The source IP address of the caller that AWS AppSync receives. If the request doesn't
     * include the `x-forwarded-for` header, the source IP value contains only a single IP address
     * from the TCP connection. If the request includes a `x-forwarded-for` header, the source IP
     * is a list of IP addresses from the `x-forwarded-for` header, in addition to the IP address
     * from the TCP connection.
     */
    sourceIp: string[];
    /**
     * The user name of the authenticated user. In the case of `AMAZON_COGNITO_USER_POOLS`
     * authorization, the value of username is the value of attribute `cognito:username`. In the
     * case of `AWS_IAM` authorization, the value of username is the value of the AWS user
     * principal. If you're using IAM authorization with credentials vended from Amazon Cognito
     * identity pools, we recommend that you use `cognitoIdentityId`.
     */
    username: string;
    /**
     * The groups the authenticated user belongs to.
     */
    groups: string[] | null;
    /**
     * The UUID of the authenticated user.
     */
    sub: string;
    /**
     * The token issuer.
     */
    issuer: string;
    /**
     * The claims that the user has.
     */
    claims: any;
    /**
     * The default authorization strategy for this caller (ALLOW or DENY).
     */
    defaultAuthStrategy: string;
};
type AppSyncIdentityOIDC = {
    /**
     * The UUID of the authenticated user.
     */
    sub: string;
    /**
     * The token issuer.
     */
    issuer: string;
    /**
     * The claims that the user has.
     */
    claims: any;
};
type AppSyncIdentityLambda = {
    /**
     * content returned by the Lambda function authorizing the request.
     */
    resolverContext: any;
};
type SubscriptionFilterValue = string | number;
interface SubscriptionFilterGeneric {
    fieldName: string;
    operator: string;
    value: SubscriptionFilterValue | boolean | SubscriptionFilterValue[];
}
interface SubscriptionFilterEquality extends SubscriptionFilterGeneric {
    operator: 'eq' | 'ne';
    value: SubscriptionFilterValue | boolean;
}
interface SubscriptionFilterComparator extends SubscriptionFilterGeneric {
    operator: 'le' | 'lt' | 'ge' | 'gt';
    value: SubscriptionFilterValue;
}
interface SubscriptionFilterContains extends SubscriptionFilterGeneric {
    operator: 'contains' | 'notContains';
    value: SubscriptionFilterValue;
}
interface SubscriptionFilterBeginsWith extends SubscriptionFilterGeneric {
    operator: 'beginsWith';
    value: string;
}
interface SubscriptionFilterIn extends SubscriptionFilterGeneric {
    operator: 'in' | 'notIn';
    value: SubscriptionFilterValue[];
}
interface SubscriptionFilterBetween extends SubscriptionFilterGeneric {
    operator: 'between';
    value: [SubscriptionFilterValue, SubscriptionFilterValue];
}
type SubscriptionFilterEntry = SubscriptionFilterEquality | SubscriptionFilterComparator | SubscriptionFilterContains | SubscriptionFilterBeginsWith | SubscriptionFilterIn | SubscriptionFilterBetween;
type SubscriptionFilterGroup = {
    filters: SubscriptionFilterEntry[];
};
type SubscriptionFilter = {
    filterGroup: SubscriptionFilterGroup[];
};
type Extensions = {
    /**
     * Evicts an item from the AWS AppSync server-side cache. The first argument is the type name.
     * The second argument is the field name. The third argument is an object containing key-value pair
     * items that specify the caching key value. You must put the items in the object in the same order
     * as the caching keys in the cached resolver's cachingKey.
     * __Note:__ This utility works only for mutations, not queries.
     */
    evictFromApiCache(typeName: string, fieldName: string, keyValuePair: Record<string, string>): void;
    /**
     * Defines enhanced subscription filters. Each subscription notification event is
     * evaluated against provided subscription filters and delivers notifications to
     * clients if all filters evaluate to true.
     * @param filter
     */
    setSubscriptionFilter(filter: SubscriptionFilter): void;
    /**
     * Defines subscription invalidation filters. Subscription filters are evaluated
     * against the invalidation payload, then invalidate a given subscription if the
     * filters evaluate to true
     * @param filter
     */
    setSubscriptionInvalidationFilter(filter: SubscriptionFilter): void;
};
type Request = {
    /**
     * AWS AppSync supports passing custom headers from clients and accessing them in your GraphQL
     * resolvers by using context.request.headers. You can then use the header values for actions
     * such as inserting data into a data source or authorization checks.
     */
    headers: any;
    /**
     * AWS AppSync supports configuring a custom domain that you can use to access your GraphQL and
     * real-time endpoints for your APIs. When making a request with a custom domain name, you can
     * get the domain name using context.request.domainName.
     */
    domainName: string;
};
type Info = {
    /**
     * The name of the field that is currently being resolved.
     */
    fieldName: string;
    /**
     * The name of the parent type for the field that is currently being resolved.
     */
    parentTypeName: string;
    /**
     * A map which holds all variables that are passed into the GraphQL request.
     */
    variables: any;
    /**
     * A list representation of the fields in the GraphQL selection set. Fields that are aliased
     * are referenced only by the alias name, not the field name. The following example shows this
     * in detail.
     */
    selectionSetList: string[];
    /**
     * A string representation of the selection set, formatted as GraphQL schema definition
     * language (SDL). Although fragments aren't merged into the selection set, inline fragments
     * are preserved, as shown in the following example.
     */
    selectionSetGraphQL: string;
};
declare const util: Util;
declare const extensions: Extensions;
export { util, extensions, Context };
//# sourceMappingURL=index.d.ts.map