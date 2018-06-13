/*
 * https://github.com/fibjs/fibjs
 * fibjs typescript definition
 * 
 * fibjs.d.ts的写法参考了node.d.ts
 * thinks https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a4a912a0cd1849fa7df0e5d909c8625fba04e49d/node/index.d.ts
 * 
 * @CreateTime: Jun 10, 2018 11:28 PM
 * @Author: 544430497@qq.com
 * @Contact: 544430497@qq.com
 * @Last Modified By: 544430497@qq.com
 * @Last Modified Time: Jun 10, 2018 11:52 PM
 * @Description: Modify Here, Please 
 */

//#region===================================================common======================================================
interface IterableIterator<T> { }

// compat for TypeScript 1.8
// if you use with --target es3 or --target es5 and use below definitions,
// use the lib.es6.d.ts that is bundled with TypeScript 1.8.
interface MapConstructor { }
interface WeakMapConstructor { }
interface SetConstructor { }
interface WeakSetConstructor { }

// Forward-declare needed types from lib.es2015.d.ts (in case users are using `--lib es5`)
interface Iterable<T> { }
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
}
interface IteratorResult<T> { }
interface SymbolConstructor {
    readonly iterator: symbol;
}
declare var Symbol: SymbolConstructor;

interface NodeRequireFunction {
    (id: string): any;
}
declare var require: NodeRequireFunction;

type Integer = number;
type Value = any;
type Long = number;

//#endregion

//#region===================================================assert========================================================
declare module "assert" {
    /**
     *测试数值为真，为假则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]
     * @param {string} [msg]
     */
    export function Function(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值为真，为假则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]
     * @param {string} [msg]
     */
    export function ok(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值为假，为真则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]
     * @param {string} [msg]
     */
    export function notOk(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值等于预期值，不相等则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {FibJS.Object} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function equals(actual?: FibJS.Object, expected?: FibJS.Object, msg?: string);

    /**
     *测试数值等于预期值，不相等则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual] 要测试的数值
     * @param {FibJS.Object} [expected]  预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notEqual(actual?: FibJS.Object, expected?: FibJS.Object, msg?: string);

    /**
     * 测试数值严格等于预期值，不相等则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {FibJS.Object} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function strictEqual(actual?: FibJS.Object, expected?: FibJS.Object, msg?: string);

    /**
     *测试数值不严格等于预期值，相等则断言失
     *
     * @export
     * @param {FibJS.Object} [actual] 要测试的数值
     * @param {FibJS.Object} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notStrictEqual(actual?: FibJS.Object, expected?: FibJS.Object, msg?: string);

    /**
     *测试数值深度等于预期值，不相等则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual] 要测试的数值
     * @param {FibJS.Object} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function deepEqual(actual?: FibJS.Object, expected?: FibJS.Object, msg?: string);


    /**
     *测试数值不深度等于预期值，相等则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual] 要测试的数值
     * @param {FibJS.Object} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notDeepEqual(actual?: FibJS.Object, expected?: FibJS.Object, msg?: string);


    /**
     *测试数值近似等于预期值，否则断言失败
     *
     * @export
     * @param {FibJS.Object} actual  要测试的数值
     * @param {FibJS.Object} expected 预期的数值
     * @param {FibJS.Object} delta 近似的小数精度
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function closeTo(actual: FibJS.Object, expected: FibJS.Object, delta: FibJS.Object, msg?: string);

    /**
      *测试数值不近似等于预期值，否则断言失败
      *
      * @export
      * @param {FibJS.Object} actual  要测试的数值
      * @param {FibJS.Object} expected 预期的数值
      * @param {FibJS.Object} delta 近似的小数精度
      * @param {string} [msg] 断言失败时的提示信息
      */
    export function notCloseTo(actual: FibJS.Object, expected: FibJS.Object, delta: FibJS.Object, msg?: string);

    /**
    * 测试数值小于预期值，大于或等于则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {FibJS.Object} [expected] 预期的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function lessThan(actual?: FibJS.Object, expected?: FibJS.Object, msg?: string);

    /**
    * 测试数值不小于预期值，小于则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {FibJS.Object} [expected] 预期的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function notLessThan(actual?: FibJS.Object, expected?: FibJS.Object, msg?: string);

    /**
   * 测试数值大于预期值，小于或等于则断言失败
   *
   * @export
   * @param {FibJS.Object} [actual]  要测试的数值
   * @param {FibJS.Object} [expected] 预期的数值
   * @param {string} [msg] 断言失败时的提示信息
   */
    export function greaterThan(actual?: FibJS.Object, expected?: FibJS.Object, msg?: string);

    /**
     * 测试数值不大于预期值，大于则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {FibJS.Object} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notGreaterThan(actual?: FibJS.Object, expected?: FibJS.Object, msg?: string);

    /**
     * 测试变量存在，为假则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function exist(actual?: FibJS.Object, msg?: string);

    /**
     * 测试变量不存在，为真则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notExist(actual?: FibJS.Object, msg?: string);

    /**
    *测试数值为布尔值真，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isTrue(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值不为布尔值真，否则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotTrue(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值不为布尔值真，否则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isFalse(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值不为布尔值假，否则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotFalse(actual?: FibJS.Object, msg?: string);

    /**
    *测试数值为 Null，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isNull(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值不为 Null，否则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotNull(actual?: FibJS.Object, msg?: string);

    /**
    *测试数值为 undefined，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isUndefined(actual?: FibJS.Object, msg?: string);

    /**
    *测试数值不为 undefined，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isDefined(actual?: FibJS.Object, msg?: string);

    /**
   *测试数值不为 undefined，否则断言失败
   *
   * @export
   * @param {FibJS.Object} [actual]  要测试的数值
   * @param {string} [msg] 断言失败时的提示信息
   */
    export function isFunction(actual?: FibJS.Object, msg?: string);

    /**
    *测试数值不为函数，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isNotFunction(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值为对象，否则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isObject(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值不为对象，否则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotObject(actual?: FibJS.Object, msg?: string);

    /**
    *测试数值为数组，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isArray(actual?: FibJS.Object, msg?: string);

    /**
    *测试数值不为数组，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isNotArray(actual?: FibJS.Object, msg?: string);

    /**
    *测试数值为字符串，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isString(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值不为字符串，否则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotString(actual?: FibJS.Object, msg?: string);

    /**
    *测试数值为数字，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isNumber(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值不为数字，否则断言失败
     *
     * @export
     * @param {FibJS.Object} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotNumber(actual?: FibJS.Object, msg?: string);

    /**
    *测试数值为布尔，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isBoolean(actual?: FibJS.Object, msg?: string);


    /**
    *测试数值为布尔，否则断言失败
    *
    * @export
    * @param {FibJS.Object} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isNotBoolean(actual?: FibJS.Object, msg?: string);

    /**
     *测试数值为给定类型，否则断言失败
     *
     * @export
     * @param {FibJS.Object} actual 要测试的数值
     * @param {string} type 指定的类型
     * @param {?string} msg 断言失败时的提示信息
     */
    export function typeOf(actual: FibJS.Object, type: string, msg: string);

    /**
     *测试数值不为给定类型，否则断言失败
     *
     * @export
     * @param {FibJS.Object} actual 要测试的数值
     * @param {string} type 指定的类型
     * @param {?string} msg 断言失败时的提示信息
     */
    export function notTypeOf(actual: FibJS.Object, type: string, msg: string);

    /**
     *测试对象中包含指定属性，否则断言失败
     *
     * @export
     * @param {FibJS.Object} value 要测试的对象
     * @param {FibJS.Object} prop 要测试的属性
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function property(value: FibJS.Object, prop: FibJS.Object, msg?: string);

    /**
     *测试对象中不包含指定属性，否则断言失败
     *
     * @export
     * @param {FibJS.Object} value 要测试的对象
     * @param {FibJS.Object} prop 要测试的属性
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notProperty(value: FibJS.Object, prop: FibJS.Object, msg?: string);

    /**
     *深度测试对象中包含指定属性，否则断言失败
     *
     * @export
     * @param {FibJS.Object} value 要测试的对象
     * @param {FibJS.Object} prop 要测试的属性
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function deepProperty(value: FibJS.Object, prop: FibJS.Object, msg?: string);

    /**
     *深度测试对象中不包含指定属性，否则断言失败
     *
     * @export
     * @param {FibJS.Object} value 要测试的对象
     * @param {FibJS.Object} prop 要测试的属性
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notDeepProperty(value: FibJS.Object, prop: FibJS.Object, msg?: string);

    /**
     *测试对象中指定属性的值为给定值，否则断言失败
     *
     * @export
     * @param {FibJS.Object} obj 要测试的对象
     * @param {FibJS.Object} prop 要测试的属性
     * @param {FibJS.Object} value 给定的值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function propertyVal(obj: FibJS.Object, prop: FibJS.Object, value: FibJS.Object, msg?: string);

    /**
     *测试对象中指定属性的值不为给定值，否则断言失败
     *
     * @export
     * @param {FibJS.Object} obj 要测试的对象
     * @param {FibJS.Object} prop 要测试的属性
     * @param {FibJS.Object} value 给定的值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function propertyNotVal(obj: FibJS.Object, prop: FibJS.Object, value: FibJS.Object, msg?: string);

    /**
     *深度测试对象中指定属性的值为给定值，否则断言失败
     *
     * @export
     * @param {FibJS.Object} obj 要测试的对象
     * @param {FibJS.Object} prop 要测试的属性，以“.”分割
     * @param {FibJS.Object} value 给定的值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function deepPropertyVal(obj: FibJS.Object, prop: FibJS.Object, value: FibJS.Object, msg?: string);

    /**
     *深度测试对象中指定属性的值不为给定值，否则断言失败
     *
     * @export
     * @param {FibJS.Object} obj 要测试的对象
     * @param {FibJS.Object} prop 要测试的属性，以“.”分割
     * @param {FibJS.Object} value 给定的值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function deepPropertyNotVal(obj: FibJS.Object, prop: FibJS.Object, value: FibJS.Object, msg?: string);

    /**
     *测试给定的代码会抛出错误，未抛出则断言失败
     *
     * @export
     * @param {Function} block  指定测试的代码，以函数形式给出
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function throws(block: Function, msg?: string);

    /**
    *测试给定的代码不会抛出错误，抛出则断言失败
    *
    * @export
    * @param {Function} block  指定测试的代码，以函数形式给出
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function doesNotThrow(block: Function, msg?: string);

    /**
     *如果参数为真，则抛出
     *
     * @export
     * @param {FibJS.Object} [obj]
     */
    export function ifError(obj?: FibJS.Object);
}
//#endregion

//#region===================================================test=========================================================
declare module "test" {
    import * as asserts from "assert";
    export var assert: typeof asserts;

    /**
     *定义一个测试模块，可嵌套定义
     *
     * @export
     * @param {string} name 定义模块名称
     * @param {Function} block 模块初始化代码
     */
    export function describe(name: string, block: Function);

    /**
     *暂停测试的模块定义，test.setup 后可使用 describe.skip 调用
     *
     * @export 
     * @param {string} name 定义模块名称
     * @param {Function} block 模块初始化代码
     */
    export function xdescribe(name: string, block: Function);

    /**
     *独立测试的模块定义，test.setup 后可使用 describe.only 调用
     *
     * @export
     * @param {string} name 定义模块名称
     * @param {Function} block 模块初始化代码
     */
    export function odescribe(name: string, block: Function);

    /**
     *定义一个测试项目
     *
     * @export
     * @param {string} name 定义项目名称
     * @param {Function} block 测试内容
     */
    export function it(name: string, block: Function);

    /**
     *暂停测试的项目定义，test.setup 后可使用 it.skip 调用
     *
     * @export
     * @param {string} name 定义项目名称
     * @param {Function} block  测试内容
     */
    export function xit(name: string, block: Function);

    /**
    *独立测试的项目定义，test.setup 后可使用 it.only 调用
    *
    * @export
    * @param {string} name 定义项目名称
    * @param {Function} block  测试内容
    */
    export function oit(name: string, block: Function);

    /**
     *定义当前测试模块进入事件
     *
     * @export
     * @param {string} name 定义项目名称
     * @param {Function} block  测试内容
     */
    export function before(func: Function);

    /**
    *定义当前测试模块退出事件
    *
    * @export
    * @param {string} name 定义项目名称
    * @param {Function} block  测试内容
    */
    export function after(func: Function);

    /**
     *定义当前测试模块测试项目进入事件
     *
     * @export
     * @param {Function} func
     */
    export function beforeEach(func: Function);

    /**
     *定义当前测试模块测试项目退出事件
     *
     * @export
     * @param {Function} func
     */
    export function afterEach(func: Function);

    /**
     *开始执行定义的测试模块
     *
     * @export
     * @param {number} log 指定进行测试时的日志输出级别，ERROR 时，项目报错信息集中在报告后显示，低于 ERROR 时，输出信息随时显示，高于 ERROR 时，只显示报告
     */
    export function run(log: number);

    /**
     *初始化当前脚本的测试环境，将 test 模块方法复制为当前脚本全局变量
     *
     * @export
     */
    export function setup();

    /**
     * 设置和查询慢速测试警告阀值，以 ms 为单位，缺省为 75
     */
    export var slow: number;
}
//#endregion

//#region ===================================================global========================================================
type TypedArray = Float32Array | Float64Array | Int8Array | Int16Array | Int32Array | Uint8ClampedArray | Uint8Array | Uint16Array | Uint32Array;

interface Codec {
    "hex", "base64", "utf8"
}

declare namespace FibJS {
    export interface Object {
        /**
         *返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
         *
         * @returns null
         * @memberof Object
         */
        toString(): string;

        /**
         *返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
         *
         * @param {string} [key]
         * @returns {Object}
         * @memberof Object
         */
        toJSON(key?: string): Object;
    }
    export interface Global {
        Array: typeof Array;
        ArrayBuffer: typeof ArrayBuffer;
        Boolean: typeof Boolean;
        Buffer: typeof Buffer;
        DataView: typeof DataView;
        Date: typeof Date;
        Error: typeof Error;
        EvalError: typeof EvalError;
        Float32Array: typeof Float32Array;
        Float64Array: typeof Float64Array;
        Function: typeof Function;
        GLOBAL: Global;
        Infinity: typeof Infinity;
        Int16Array: typeof Int16Array;
        Int32Array: typeof Int32Array;
        Int8Array: typeof Int8Array;
        Intl: typeof Intl;
        JSON: typeof JSON;
        Map: MapConstructor;
        Math: typeof Math;
        NaN: typeof NaN;
        Number: typeof Number;
        Object: typeof Object;
        Promise: Function;
        RangeError: typeof RangeError;
        ReferenceError: typeof ReferenceError;
        RegExp: typeof RegExp;
        Set: SetConstructor;
        String: typeof String;
        Symbol: Function;
        SyntaxError: typeof SyntaxError;
        TypeError: typeof TypeError;
        URIError: typeof URIError;
        Uint16Array: typeof Uint16Array;
        Uint32Array: typeof Uint32Array;
        Uint8Array: typeof Uint8Array;
        Uint8ClampedArray: Function;
        WeakMap: WeakMapConstructor;
        WeakSet: WeakSetConstructor;
        clearImmediate: (immediateId: any) => void;
        clearInterval: (intervalId: FibJS.Timer) => void;
        clearTimeout: (timeoutId: FibJS.Timer) => void;
        console: typeof console;
        decodeURI: typeof decodeURI;
        decodeURIComponent: typeof decodeURIComponent;
        encodeURI: typeof encodeURI;
        encodeURIComponent: typeof encodeURIComponent;
        escape: (str: string) => string;
        eval: typeof eval;
        global: Global;
        isFinite: typeof isFinite;
        isNaN: typeof isNaN;
        parseFloat: typeof parseFloat;
        parseInt: typeof parseInt;
        // process: Process;
        setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => any;
        setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => FibJS.Timer;
        setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => FibJS.Timer;
        undefined: typeof undefined;
        unescape: (str: string) => string;
        argv: Array<any>;
        gc: () => void;
        v8debug?: any;
    }
    export interface Timer extends Object {
        /**
         *查询当前定时器是否已经终止
         *
         * @type {boolean}
         * @memberof Timer
         */
        stopped: boolean;

        /**
         *维持 fibjs 进程不退出，在定时器等待期间阻止 fibjs 进程退出
         *
         * @memberof Timer
         */
        ref(): void;

        /**
         *允许 fibjs 进程退出，在定时器等待期间允许 fibjs 进程退出
         *
         * @memberof Timer
         */
        unref(): void;

        /**
         *取消当前定时器
         *
         * @returns {Timer}
         * @memberof Timer
         */
        clear(): Timer;
    }
    /**
     *流
     *
     * @export
     * @interface Stream
     * @extends {Object}
     */
    export interface Stream extends Object {
        /**
         *从流内读取指定大小的数据
         *
         * @param {number} [bytes] 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备
         * @returns {Buffer} 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null
         * @memberof Stream
         */
        read(bytes?: number): Buffer;

        /**
         *将给定的数据写入流
         *
         * @param {Buffer} data 给定要写入的数据
         * @memberof Stream
         */
        write(data: Buffer): void;

        /**
         *将文件缓冲区内容写入物理设备
         *
         * @memberof Stream
         */
        flush(): void;

        /**
         *关闭当前流对象
         *
         * @memberof Stream
         */
        close(): void;

        /**
         *复制流数据到目标流中
         *
         * @param {Stream} stm 目标流对象
         * @param {number} [bytes] 复制的字节数
         * @returns {number} 返回复制的字节数
         * @memberof Stream
         */
        copyTo(stm: Stream, bytes?: number): number;
    }
    /**
     *
     *
     * @export
     * @class Worker
     * @extends {Object}
     */
    export class Worker extends EventEmitter {
        /**
         *Creates an instance of Worker.
         * @param {string} path 指定 Worker 入口脚本，只接受绝对路径
         * @param {Object} opts 构造选项，暂未支持
         * @memberof Worker
         */
        constructor(path: string, opts: Object);
        /**
         *默认全局最大监听器数
         *
         * @static
         * @type {number}
         * @memberof Worker
         */
        static defaultMaxListeners: number;

        /**
         * 查询和绑定接受 postMessage 消息事件，相当于 on("message", func);
         *
         * @memberof Worker
         */
        onmessage():void;

        /**
         *向 Master 或 Worker 发送消息，
         *
         * @param {Value} data 指定发送的消息内容
         * @memberof Worker
         */
        postMessage(data:Value):void;
    }

    /**
     *
     *
     * @export
     * @class EventEmitter
     */
    export class EventEmitter {

        /**
         *Creates an instance of EventEmitter.
         * @memberof EventEmitter
         */
        constructor();

        /**
         * 默认全局最大监听器数
         *
         * @static
         * @type {number}
         * @memberof EventEmitter
         */
        static defaultMaxListeners: number;

        /**
         *绑定一个事件处理函数到对象
         *
         * @param {string} ev 指定事件的名称
         * @param {Function} func 指定事件处理函数
         * @memberof EventEmitter 返回成功绑定的数量，如果函数已绑定则返回 
         */
        on(ev: string, func: Function): this;

        /**
         *绑定一个事件处理函数到对象
         *
         * @param {Object} map 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数
         * @returns {Object} 返回事件对象本身，便于链式调用
         * @memberof EventEmitter
         */
        on(map: Object): this;

        /**
         *绑定一个事件处理函数到对象
         *
         * @param {string} ev 指定事件的名称
         * @param {Function} func  指定事件处理函数
         * @returns {Object} 返回事件对象本身，便于链式调用
         * @memberof EventEmitter
         */
        addListener(ev: string, func: Function): this;

        /**
         *绑定一个事件处理函数到对象起始
         *
         * @param {string} ev 指定事件的名称
         * @param {Function} func 指定事件处理函数
         * @returns {EventEmitter} 返回成功绑定的数量，如果函数已绑定则返回 0
         * @memberof EventEmitter
         */
        prependListener(ev: string, func: Function): this;

        /**
         *绑定一个事件处理函数到对象起始
         *
         * @param {Object} map 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数
         * @returns {EventEmitter}
         * @memberof EventEmitter
         */
        prependListener(map: Object): this;

        /**
         *绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次
         *
         * @param {string} ev 指定事件的名称
         * @param {Function} func  指定事件处理函数
         * @returns {EventEmitter}
         * @memberof EventEmitter
         */
        once(ev: string, func: Function): this;

        /**
         *绑定一个事件处理函数到对象起始
         *
         * @param {string} ev 指定事件的名称
         * @param {Function} func 指定事件处理函数
         * @returns {this} 返回成功绑定的数量，如果函数已绑定则返回 0
         * @memberof EventEmitter
         */
        prependOnceListener(ev: string, func: Function): number;

        /**
         *绑定一个事件处理函数到对象起始
         *
         * @param {Object} map
         * @returns {this} 返回成功绑定的数量，如果函数已绑定则返回 0
         * @memberof EventEmitter
         */
        prependOnceListener(map: Object): number;

        /**
         *从对象处理队列中取消指定函数
         *
         * @param {string} ev 指定事件的名称
         * @param {Function} func 指定事件处理函数
         * @returns {this} 返回事件对象本身，便于链式调用
         * @memberof EventEmitter
         */
        off(ev: string, func: Function): this;

        /**
         *从对象处理队列中取消指定函数
         *
         * @param {Object} map 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数
         * @returns {this} 返回事件对象本身，便于链式调用
         * @memberof EventEmitter
         */
        off(map: Object): this;

        /**
         *从对象处理队列中取消指定函数
         *
         * @param {string} ev 指定事件的名称
         * @param {Function} func 指定事件处理函数
         * @returns {this} 返回事件对象本身，便于链式调用
         * @memberof EventEmitter
         */
        removeListener(ev: string, func: Function): this;

        /**
         *取消对象处理队列中的全部函数
         *
         * @param {string} ev 指定事件的名称
         * @returns {this} 返回事件对象本身，便于链式调用
         * @memberof EventEmitter
         */
        removeListener(ev: string): this;

        /**
         *从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
         *
         * @param {Array<string>} evs 指定事件的名称
         * @returns {this} 返回事件对象本身，便于链式调用
         * @memberof EventEmitter
         */
        removeAllListeners(evs: Array<string>): this;

        /**
         *监听器的默认限制的数量，仅用于兼容
         *
         * @param {number} n 指定事件的数量
         * @memberof EventEmitter 
         */
        setMaxListeners(n: number): void;

        /**
         *查询对象指定事件的监听器数组
         *
         * @param {string} ev
         * @returns {Array<EventEmitter>} 返回指定事件的监听器数组
         * @memberof EventEmitter
         */
        listeners(ev: string): Array<EventEmitter>;

        /**
         *查询对象指定事件的监听器数量
         *
         * @param {string} ev
         * @returns {number}
         * @memberof EventEmitter
         */
        listenerCount(ev: string): number;

        /**
         *查询监听器事件名称
         *
         * @returns {Array<string>}
         * @memberof EventEmitter
         */
        eventNames(): Array<string>;

        /**
         *主动触发一个事件
         *
         * @param {string} ev 事件名称
         * @param {*} args 事件参数，将会传递给事件处理函数
         * @returns 返回事件触发状态，有响应事件返回 true，否则返回 false
         * @memberof EventEmitter
         */
        emit(ev: string, ...args): boolean;
    }

    class Fiber extends Object{

        /**
         *查询纤程的唯一 id
         *
         * @type {Long}
         * @memberof Fiber
         */
        id:Long;

        /**
         *查询纤程的调用纤程
         *
         * @type {Fiber}
         * @memberof Fiber
         */
        caller:Fiber;

        /**
         *询纤程的调用堆栈
         *
         * @type {string}
         * @memberof Fiber
         */
        stack:string;

        /**
         *等待纤程结束
         *
         * @memberof Fiber
         */
        join():void;
    }
}

/**
 *在指定的时间后调用函数
 *
 * @param {(...args: any[]) => void} callback
 * @param {number} ms
 * @param {...any[]} args
 * @returns {FibJS.Timer}
 */
declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): FibJS.Timer;

/**
 *清除指定的定时器
 *
 * @param {FibJS.Timer} timeoutId
 */
declare function clearTimeout(timeoutId: FibJS.Timer): void;

/**
 *每间隔指定的时间后调用函数
 *
 * @param {(...args: any[]) => void} callback
 * @param {number} ms
 * @param {...any[]} args
 * @returns {FibJS.Timer}
 */
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): FibJS.Timer;

/**
 *清除指定的定时器
 *
 * @param {FibJS.Timer} intervalId
 */
declare function clearInterval(intervalId: FibJS.Timer): void;

/**
 *每间隔指定的时间后调用函数，这是个高精度定时器，会主动打断正在运行的 JavaScript 脚本执行定时器
 *由于 setHrInterval 的定时器会中断正在运行的代码执行回调，因此不要在回调函数内修改可能影响其它模块的数据，或者在回调中调用任何标记为 async 的 api 函数，否则将会产生不可预知的结果。例如：
 *
 *        1, var timers = require('timers');
 *        2, 
 *        3, var cnt = 0;
 *        4, timers.setHrInterval(() => {
 *        5,    cnt++;
 *        6, }, 100);
 *        7 ,
 *        8, while (cnt < 10);
 *
 *       console.error("===============================> done");
 *       这段代码中，第 8 行的循环并不会因为 cnt 的改变而结束，因为 JavaScript 在优化代码时会认定在这个循环过程中 cnt 不会被改变。
 *
 * @param {(...args: any[]) => void} callback
 * @param {number} ms
 * @param {...any[]} args
 * @returns {FibJS.Timer}
 */
declare function setHrInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): FibJS.Timer;

/**
 *清除指定的定时器
 *
 * @param {FibJS.Timer} timeoutId
 */
declare function clearHrInterval(timeoutId: FibJS.Timer): void;

/**
 *下一个空闲时间立即执行回调函数
 *
 * @param {(...args: any[]) => void} callback
 * @param {...any[]} args
 * @returns {*}
 */
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;

/**
 *清除指定的定时器
 *
 * @param {*} immediateId
 */
declare function clearImmediate(immediateId: any): void;

/**
 *强制要求进行垃圾回收
 *
 */
declare function GC(): void;

/**
 *进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用
 *@example
 * [{
 *              cmd: ".test",
 *              help: "this is a test",
 *              exec: function(argv) {
 *                  console.log(argv);
 *              }
 *          },
 *          {
 *                 cmd: ".test1",
 *              help: "this is an other test",
 *              exec: function(argv) {
 *                  console.log(argv);
 *          }
 * }] 
 *
 * @param {Array<any>} [cmds]
 * @returns {interface}
 */
declare function repl(cmds?: Array<any>): void;

/**
 *进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用
 *同一时刻只允许一个 Stream repl，新建一个 Stream repl 时，前一个 repl 将被关闭。
 *@example [{
 *               cmd: ".test",
 *               help: "this is a test",
 *               exec: function(argv) {
 *                   console.log(argv);
 *               }
 *           },
 *           {
 *               cmd: ".test1",
 *               help: "this is an other test",
 *               exec: function(argv) {
 *                   console.log(argv);
 *               }
 *           }
 *       ]
 *
 * @param {FibJS.Stream} out 输入输出流对象，通常为网络连接
 * @param {Array<any>} [cmds] 补充命令
 */
declare function repl(out: FibJS.Stream, cmds?: Array<any>): void;

/**
 * Worker 宿主对象，仅在 Worker 入口脚本有效
 */
declare var Master: FibJS.Worker;

/**
 *  全局对象
 */
declare var global: FibJS.Global;

/**
 * 当前脚本文件名
 */
declare var __filename: string;

/**
 *  当前脚本所在目录
 */
declare var __dirname: string;

/**
 * Array, 获取当前脚本的运行参数，启动 js 获取进程启动参数，run 执行的脚本获取传递的参数
 */
declare var argv: Array<any>;

interface Buffer extends FibJS.Object {

    /**
     * 获取缓存对象的尺寸
     * @readonly
     */
    readonly length: number;

    /**
     * 修改缓存对象尺寸
     * @param {number} sz 指定新尺寸
     */
    resize(sz: number): void;

    /**
     *在缓存对象尾部写入一组二进制数据
     *
     * @param {Buffer} data 
     * @memberof Buffer 初始化二进制数据
     */
    append(data: Buffer): void;

    /**
     *在缓存对象尾部写入字符串，字符串将以 utf-8 格式写入
     *
     * @param {string} str 要写入的字符串
     * @param {string} [codec] 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
     * @memberof Buffer
     */
    append(str: string, codec?: string);

    /**
     *向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据
     *
     * @param {string} str 待写入的字符串 
     * @param {number} offset 写入起始位置
     * @param {number} length  写入长度（单位字节，默认值-1），未指定时为待写入字符串的长度
     * @param {keyof Codec} codec 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
     * @returns {number} 写入的数据字节长度
     * @memberof Buffer
     */
    write(str: string, offset?: number, length?: number, codec?: keyof Codec): number;

    /**
     *向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据
     *
     * @param {string} str  待写入的字符串
     * @param {number} [offset] 写入起始位置 
     * @param {string} [codec] 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
     * @returns {number}   写入的数据字节长度
     * @memberof Buffer
     */
    write(str: string, offset?: number, codec?: string): number;

    /**
     *向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据
     *
     * @param {string} str 待写入的字符串
     * @param {string} [codec] 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
     * @returns {number} 写入的数据字节长度
     * @memberof Buffer
     */
    write(str: string, codec?: string): number;

    /**
     *为 Buffer 对象填充指定内容数据
     *
     * @param {number} v  需要填充的数据，如果未指定 offset 和 end，将填充满整个 buffer
     * @param {number} [offset]  填充起始位置
     * @param {number} [end] 填充终止位置
     * @returns {Buffer}
     * @memberof Buffer
     */
    fill(v: number, offset?: number, end?: number): Buffer;

    /**
     *为 Buffer 对象填充指定内容数据
     *
     * @param {Buffer} buffer 需要填充的数据，如果未指定 offset 和 end，将填充满整个 buffer
     * @param {number} [offset]  填充起始位置
     * @param {number} [end] 填充终止位置
     * @returns {Buffer} 返回当前 Buffer 对象
     * @memberof Buffer
     */
    fill(buffer: Buffer, offset?: number, end?: number): Buffer;

    /**
     * 为 Buffer 对象填充指定内容数据
     *
     * @param {string} str 需要填充的数据，如果未指定 offset 和 end，将填充满整个 buffer
     * @param {number} [offset] 填充起始位置
     * @param {number} [end] 填充终止位置
     * @returns {Buffer} 返回当前 Buffer 对象
     * @memberof Buffer
     */
    fill(str: string, offset?: number, end?: number): Buffer;

    /**
     * 返回某个指定数据在 Buffer 中首次出现的位置
     *
     * @param {number} v 待查找数据，如果未指定 offset，默认从起始位开始
     * @param {number} [offset] 起始查找位置
     * @returns {boolean} 返回查找到的位置，未找到返回 -1
     * @memberof Buffer
     */
    indexOf(v: number, offset?: number): boolean;

    /**
     *返回某个指定数据在 Buffer 中首次出现的位置
     *
     * @param {Buffer} buffer 待查找数据，如果未指定 offset，默认从起始位开始
     * @param {number} [offset] 起始查找位置
     * @returns {boolean}
     * @memberof Buffer
     */
    indexOf(buffer: Buffer, offset?: number): boolean;

    /**
    *返回某个指定数据在 Buffer 中首次出现的位置
    *
    * @param {string} str 待查找数据，如果未指定 offset，默认从起始位开始
    * @param {number} [offset] 起始查找位置
    * @returns {boolean}
    * @memberof Buffer
    */
    indexOf(str: string, offset?: number): boolean;

    /**
     *比较缓存区的内容
     *
     * @param {Buffer} buf 待比较缓存对象
     * @returns {number} 内容比较结果
     * @memberof Buffer
     */
    compare(buf: Buffer): number;

    /**
     *从源缓存对象区域拷贝数据到目标缓存对象区域
     *
     * @param {Buffer} target 目标缓存对象
     * @param {number} [targetStart] 目标缓存对象开始拷贝字节位置，缺省为 0
     * @param {number} [sourceStart] 源缓存对象开始字节位置, 缺省为 0
     * @param {number} [sourceEnd] 源缓存对象结束字节位置, 缺省为 -1,表示源数据长度
     * @returns {number} 拷贝的数据字节长度
     * @memberof Buffer
     */
    copy(target: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;

    /**
     *从缓存对象读取一个 8 位无符号整型数值
     *
     * @param {number} [offset] 指定读取的起始位置，缺省为 0
     * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
     * @returns {number} 返回读取的整型数值
     * @memberof Buffer
     */
    readUInt8(offset?: number, noAssett?: boolean): number;

    /**
     *从缓存对象读取一个 16 位无符号整型数值，以低字节序的存储方式
     *
     * @param {number} [offset] 指定读取的起始位置，缺省为 0
     * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
     * @returns {number} 返回读取的整型数值
     * @memberof Buffer
     */
    readUInt16LE(offset?: number, noAssett?: boolean): number;

    /**
     *从缓存对象读取一个 16 位无符号整型数值，以高字节序的存储方式
     *
     * @param {number} [offset] 指定读取的起始位置，缺省为 0
     * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
     * @returns {number} 返回读取的整型数值
     * @memberof Buffer
     */
    readUInt16BE(offset?: number, noAssett?: boolean): number;

    /**
    *从缓存对象读取一个 32 位无符号整型数值，以低字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readUInt32LE(offset?: number, noAssett?: boolean): number;

    /**
    *从缓存对象读取一个 32 位无符号整型数值，以高字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readUInt32BE(offset?: number, noAssett?: boolean): number;

    /**
     *从缓存对象读取一个无符号整型数值，最大支持 48 位，以低字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readUIntLE(offset?: number, noAssett?: boolean): number;

    /**
     *从缓存对象读取一个无符号整型数值，最大支持 48 位，以高字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readUIntBE(offset?: number, noAssett?: boolean): number;

    /**
     *从缓存对象读取一个 8 位整型数值
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readInt8(offset?: number, noAssett?: boolean): number;

    /**
     *从缓存对象读取一个 16 位整型数值，以低字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readInt16LE(offset?: number, noAssett?: boolean): number;

    /**
    *从缓存对象读取一个 16 位整型数值，以高字节序的存储方式
   *
   * @param {number} [offset] 指定读取的起始位置，缺省为 0
   * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} 返回读取的整型数值
   * @memberof Buffer
   */
    readInt16BE(offset?: number, noAssett?: boolean): number;

    /**
   *从缓存对象读取一个 32 位整型数值，以低字节序的存储方式
  *
  * @param {number} [offset] 指定读取的起始位置，缺省为 0
  * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
  * @returns {number} 返回读取的整型数值
  * @memberof Buffer
  */
    readInt32LE(offset?: number, noAssett?: boolean): number;

    /**
     *从缓存对象读取一个 32 位整型数值，以高字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readInt32BE(offset?: number, noAssett?: boolean): number;

    /**
     *从缓存对象读取一个整型数值，最大支持 48 位，以低字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readIntLE(offset?: number, noAssett?: boolean): number;

    /**
    *从缓存对象读取一个整型数值，最大支持 48 位，以高字节序的存储方式
   *
   * @param {number} [offset] 指定读取的起始位置，缺省为 0
   * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} 返回读取的整型数值
   * @memberof Buffer
   */
    readIntBE(offset?: number, noAssett?: boolean): number;

    /**
   *从缓存对象读取一个 64 位整型数值，以低字节序的存储方式
  *
  * @param {number} [offset] 指定读取的起始位置，缺省为 0
  * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
  * @returns {Int64} 返回读取的整型数值
  * @memberof Buffer
  */
    readInt64LE(offset?: number, noAssett?: boolean): Int64;

    /**
     *从缓存对象读取一个 64 位整型数值，以低字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {Int64} 返回读取的整型数值
    * @memberof Buffer
    */
    readInt64BE(offset?: number, noAssett?: boolean): Int64;

    /**
     *从缓存对象读取一个浮点数，以低字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readFloatLE(offset?: number, noAssett?: boolean): number;

    /**
     *从缓存对象读取一个浮点数，以高字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readFloatBE(offset?: number, noAssett?: boolean): number;

    /**
    *从缓存对象读取一个双精度浮点数，以低字节序的存储方式
   *
   * @param {number} [offset] 指定读取的起始位置，缺省为 0
   * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} 返回读取的整型数值
   * @memberof Buffer
   */
    readDoubleLE(offset?: number, noAssett?: boolean): number;

    /**
     *从缓存对象读取一个双精度浮点数，以高字节序的存储方式
    *
    * @param {number} [offset] 指定读取的起始位置，缺省为 0
    * @param {boolean} [noAssett] 指定读取越界时不抛出错误，缺省为 flase，抛出
    * @returns {number} 返回读取的整型数值
    * @memberof Buffer
    */
    readDoubleBE(offset?: number, noAssett?: boolean): number;

    /**
     *向缓存对象写入一个 8 位无符号整型数值
     *
     * @param {number} value  指定写入的数值
     * @param {number} [offset] 指定写入的起始位置
     * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
     * @returns {number} offset 加上写入的字节数
     * @memberof Buffer
     */
    writeUInt8(value: number, offset?: number, noAssett?: boolean): number;

    /**
   *向缓存对象写入一个 16 位无符号整型数值，以低字节序的存储方式
   *
   * @param {number} value  指定写入的数值
   * @param {number} [offset] 指定写入的起始位置
   * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} offset 加上写入的字节数
   * @memberof Buffer
   */
    writeUInt16LE(value: number, offset?: number, noAssett?: boolean): number;

    /**
   *缓存对象写入一个 16 位无符号整型数值，以高字节序的存储方式
   *
   * @param {number} value  指定写入的数值
   * @param {number} [offset] 指定写入的起始位置
   * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} offset 加上写入的字节数
   * @memberof Buffer
   */
    writeUInt16BE(value: number, offset?: number, noAssett?: boolean): number;

    /**
     *向缓存对象写入一个 32 位无符号整型数值，以低字节序的存储方式
     *
     * @param {number} value  指定写入的数值
     * @param {number} [offset] 指定写入的起始位置
     * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
     * @returns {number} offset 加上写入的字节数
     * @memberof Buffer
     */
    writeUInt32LE(value: number, offset?: number, noAssett?: boolean): number;

    /**
   *向缓存对象写入一个 32 位无符号整型数值，以高字节序的存储方式
   *
   * @param {number} value  指定写入的数值
   * @param {number} [offset] 指定写入的起始位置
   * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} offset 加上写入的字节数
   * @memberof Buffer
   */
    writeUInt32BE(value: number, offset?: number, noAssett?: boolean): number;

    /**
   *向缓存对象写入一个无符号整型数值，最大支持 48 位，以低字节序的存储方式
   *
   * @param {number} value  指定写入的数值
   * @param {number} [offset] 指定写入的起始位置
   * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} offset 加上写入的字节数
   * @memberof Buffer
   */
    writeUIntLE(value: number, offset?: number, noAssett?: boolean): number;

    /**
   *向缓存对象写入一个无符号整型数值，最大支持 48 位，以高字节序的存储方式
   *
   * @param {number} value  指定写入的数值
   * @param {number} [offset] 指定写入的起始位置
   * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} offset 加上写入的字节数
   * @memberof Buffer
   */
    writeUIntBE(value: number, offset?: number, noAssett?: boolean): number;

    /**
  *向缓存对象写入一个 8 位整型数值
  *
  * @param {number} value  指定写入的数值
  * @param {number} [offset] 指定写入的起始位置
  * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
  * @returns {number} offset 加上写入的字节数
  * @memberof Buffer
  */
    writeInt8(value: number, offset?: number, noAssett?: boolean): number;


    /**
  *向缓存对象写入一个 16 位整型数值，以低字节序的存储方式
  *
  * @param {number} value  指定写入的数值
  * @param {number} [offset] 指定写入的起始位置
  * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
  * @returns {number} offset 加上写入的字节数
  * @memberof Buffer
  */
    writeInt16LE(value: number, offset?: number, noAssett?: boolean): number;

    /**
 *向缓存对象写入一个 16 位整型数值，以高字节序的存储方式
 *
 * @param {number} value  指定写入的数值
 * @param {number} [offset] 指定写入的起始位置
 * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
 * @returns {number} offset 加上写入的字节数
 * @memberof Buffer
 */
    writeInt16BE(value: number, offset?: number, noAssett?: boolean): number;

    /**
  *向缓存对象写入一个 32 位整型数值，以低字节序的存储方式
  *
  * @param {number} value  指定写入的数值
  * @param {number} [offset] 指定写入的起始位置
  * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
  * @returns {number} offset 加上写入的字节数
  * @memberof Buffer
  */
    writeInt32LE(value: number, offset?: number, noAssett?: boolean): number;

    /**
   *向缓存对象写入一个 32 位整型数值，以高字节序的存储方式
   *
   * @param {number} value  指定写入的数值
   * @param {number} [offset] 指定写入的起始位置
   * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} offset 加上写入的字节数
   * @memberof Buffer
   */
    writeInt32BE(value: number, offset?: number, noAssett?: boolean): number;

    /**
     *向缓存对象写入一个整型数值，最大支持 48 位，以低字节序的存储方式
     *
     * @param {number} value  指定写入的数值
     * @param {number} [offset] 指定写入的起始位置
     * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
     * @returns {number} offset 加上写入的字节数
     * @memberof Buffer
     */
    writeIntLE(value: number, offset?: number, noAssett?: boolean): number;

    /**
   *向缓存对象写入一个整型数值，最大支持 48 位，以高字节序的存储方式
   *
   * @param {number} value  指定写入的数值
   * @param {number} [offset] 指定写入的起始位置
   * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} offset 加上写入的字节数
   * @memberof Buffer
   */
    writeIntBE(value: number, offset?: number, noAssett?: boolean): number;

    /**
 *向缓存对象写入一个 64 位整型数值，以低字节序的存储方式
 *
 * @param {Int64 } value  指定写入的数值
 * @param {number} [offset] 指定写入的起始位置
 * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
 * @returns {number} offset 加上写入的字节数
 * @memberof Buffer
 */
    writeInt64LE(value: Int64, offset?: number, noAssett?: boolean): number;


    /**
 *向缓存对象写入一个 64 位整型数值，以高字节序的存储方式
 *
 * @param {Int64 } value  指定写入的数值
 * @param {number} [offset] 指定写入的起始位置
 * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
 * @returns {number} offset 加上写入的字节数
 * @memberof Buffer
 */
    writeInt64BE(value: Int64, offset?: number, noAssett?: boolean): number;

    /**
 *向缓存对象写入一个浮点数，以低字节序的存储方式
 *
 * @param {number} value  指定写入的数值
 * @param {number} [offset] 指定写入的起始位置
 * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
 * @returns {number} offset 加上写入的字节数
 * @memberof Buffer
 */
    writeFloatLE(value: number, offset?: number, noAssett?: boolean): number;


    /**
 *向缓存对象写入一个浮点数，以高字节序的存储方式
 *
 * @param {number} value  指定写入的数值
 * @param {number} [offset] 指定写入的起始位置
 * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
 * @returns {number} offset 加上写入的字节数
 * @memberof Buffer
 */
    writeFloatBE(value: number, offset?: number, noAssett?: boolean): number;

    /**
 *向缓存对象写入一个双精度浮点数，以低字节序的存储方式
 *
 * @param {number} value  指定写入的数值
 * @param {number} [offset] 指定写入的起始位置
 * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
 * @returns {number} offset 加上写入的字节数
 * @memberof Buffer
 */
    writeDoubleLE(value: number, offset?: number, noAssett?: boolean): number;

    /**
   *向缓存对象写入一个双精度浮点数，以高字节序的存储方式
   *
   * @param {number} value  指定写入的数值
   * @param {number} [offset] 指定写入的起始位置
   * @param {boolean} [noAssett] 指定写入越界时不抛出错误，缺省为 flase，抛出
   * @returns {number} offset 加上写入的字节数
   * @memberof Buffer
   */
    writeDoubleBE(value: number, offset?: number, noAssett?: boolean): number;

    /**
     *返回一个新缓存对象，包含指定起始到缓存结尾的数据
     *
     * @param {number} [start] 定范围的起始，缺省从头开始
     * @returns {Buffer}  返回新的缓存对象
     * @memberof Buffer
     */
    slice(start?: number): Buffer;

    /**
     *返回一个新缓存对象，包含指定范围的数据，若范围超出缓存，则只返回有效部分数据
     *
     * @param {number} start 指定范围的起始
     * @param {number} end  指定范围的结束
     * @returns {Buffer} 返回新的缓存对象
     * @memberof Buffer
     */
    slice(start: number, end: number): Buffer;

    /**
     *把当前对象中的所有元素放入一个字符串
     *
     * @param {string} [separator] String, 分割字符，缺省为 ","
     * @returns {string} 返回生成的字符串
     * @memberof Buffer
     */
    join(separator?: string): string;

    /**
     *返回一个新缓存对象，包含当前对象数据的倒序
     *
     * @returns {Buffer} 返回新的缓存对象
     * @memberof Buffer
     */
    reverse(): Buffer;

    /**
     *比较当前对象与给定的对象是否相等
     *
     * @param {object} expected 制定比较的目标对象
     * @returns {boolean} 返回对象比较的结果
     * @memberof Buffer
     */
    equals(expected: object): boolean;

    /**
     *使用 16 进制编码缓存对象内容
     *
     * @returns {string}
     * @memberof Buffer
     */
    hex(): string;

    /**
     *使用 base64 编码缓存对象内容
     *
     * @returns {string}
     * @memberof Buffer
     */
    base64(): string;

    /**
     *返回全部二进制数据的数组
     *
     * @returns {IterableIterator<number>}  返回包含对象数据索引的迭代器
     * @memberof Buffer
     */
    keys(): IterableIterator<number>;

    /**
     *返回全部二进制数据的数组
     *
     * @returns {IterableIterator<number>}  返回包含对象数据值的迭代器
     * @memberof Buffer 
     */
    values(): IterableIterator<number>;

    /**
     *返回包含对象数据 [index, byte] 对的迭代器
     *
     * @returns {IterableIterator<[number, number]>}
     * @memberof Buffer
     */
    entries(): IterableIterator<[number, number]>;

    /**
     * 返回全部二进制数据的数组
     *
     * @returns {Array<number>} 返回包含对象数据的数组
     * @memberof Buffer
     */
    toArray(): Array<number>;

    /**
     *返回对象的字符串表示
     *
     * @param {keyof Codec} codec 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
     * @param {number} [offset] 读取起始位置
     * @param {number} end 读取终止位置
     * @returns null
     * @memberof Buffer
     */
    toString(codec: keyof Codec, offset?: number, end?: number): string;

    /**
     *返回二进制数据的编码字符串
     *
     * @param {keyof Codec} codec 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
     * @param {number} [offset] 读取起始位置
     * @returns {string} 返回对象的字符串表示
     * @memberof Buffer
     */
    toString(codec: keyof Codec, offset?: number): string;

    /**
     *返回二进制数据的 utf8 编码字符串
     * 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
     *
     * @returns {string}
     * @memberof Buffer
     */
    toString(): string;

    /**
     *返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
     *
     * @param {string} [key]
     * @returns {FibJS.Object}
     * @memberof Buffer
     */
    toJSON(key?: string): FibJS.Object;
}

declare var Buffer: {

    /**
     * 缓存对象构造函数
     * @param {Array<any>} datas  初始化数据数组
     */
    new(datas: Array<any>): Buffer;

    /**
     * 缓存对象构造函数
     * @param {ArrayBuffer} datas  初始化数据数组
     */
    new(datas: ArrayBuffer): Buffer;

    /**
   * 缓存对象构造函数
   * @param {ArrayBufferView} datas  初始化数据数组
   */
    new(datas: ArrayBufferView): Buffer;

    /**
   * 缓存对象构造函数
   * @param {TypedArray} datas  初始化数据数组
   */
    new(datas: TypedArray): Buffer;

    /**
     * 缓存对象构造函数
     * @param {TypedArray} datas  初始化Buffer对象
     */
    new(buffer: Buffer): Buffer;

    /**
     * 缓存对象构造函数
     * @param {string} str  初始化字符串，字符串将以 utf-8 格式写入，缺省则创建一个空对象
     * @param {string} encoding 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
     */
    new(str: string, encoding?: string): Buffer;

    /**
     * 缓存对象构造函数
     * @param {number} size 初始化缓冲区大小
     */
    new(size: number): Buffer;

    /**
     * 检测给定的变量是否是 Buffer 对象
     * @param {any} obj 给定需要检测的变量
     */
    isBuffer(obj: any): obj is Buffer;

    /**
     * 通过其他 Buffer 创建 Buffer 对象
     *  @param {Buffer} buffer 给定 Buffer 类型变量用于创建 Buffer 对象
     * @param {number} byteOffset 指定数据起始位置，起始为 0
     * @param {number} length 指定数据长度，起始位 -1，表示剩余所有数据
     */
    from(buffer: Buffer, byteOffset?: number, length?: number): Buffer;

    /**
     * 通过其他 Buffer 创建 Buffer 对象
    *  @param {string} str  初始化字符串，字符串将以 utf-8 格式写入
     * @param {number} byteOffset 指定数据起始位置，起始为 0
     * @param {number} length 指定数据长度，起始位 -1，表示剩余所有数据
     */
    from(str: string, byteOffset?: number, length?: number): Buffer;

    /**
   * 通过其他 Buffer 创建 Buffer 对象
  *  @param {string} str  初始化字符串，字符串将以 utf-8 格式写入，缺省则创建一个空对象
   * @param {string} codec 指指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
   */
    from(str: string, codec?: string): Buffer;

    /**
     * 拼接多个缓存区中的数据
     *  @param {Array<buffer>} buflist 待拼接的Buffer数组
     * @param {number} cutLength 截取多少个Buffer对象
     */
    concat(buflist: Array<Buffer>, cutLength: number): Buffer;

    /**
     * 分配一个指定长度的新缓存区。如果大小为0，将创建一个零长度的缓存区。
     *  @param {number} size 缓冲区的所需长度
     * @param {number} fill 预先填充新缓冲区的值，可使用 string/buffer/integer 值类型。 默认值：0
     * @param {string} codec 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
     */
    alloc(size: number, fill?: number, codec?: keyof Codec): Buffer;

    /**
   * 分配一个指定长度的新缓存区。如果大小为0，将创建一个零长度的缓存区。
   *  @param {number} size 缓冲区的所需长度
   * @param {string} fill 预先填充新缓冲区的值，可使用 string/buffer/integer 值类型。 默认值：0
   * @param {string} codec 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
   */
    alloc(size: number, fill?: string, codec?: keyof Codec): Buffer;

    /**
   * 分配一个指定长度的新缓存区。如果大小为0，将创建一个零长度的缓存区。
   *  @param {number} size 缓冲区的所需长度
   * @param {Buffer} fill 预先填充新缓冲区的值，可使用 string/buffer/integer 值类型。 默认值：0
   * @param {string} codec 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
   */
    alloc(size: number, fill?: Buffer, codec?: keyof Codec): Buffer;

    /**
     * 分配一个指定长度的新缓存区。如果大小为0，将创建一个零长度的缓存区。
     * @param {number} size 缓冲区的所需长度
     */
    allocUnsafe(size: number): Buffer;

    /**
     * 分配一个指定长度的新缓存区。如果大小为0，将创建一个零长度的缓存区。
     * @param {number} size 缓冲区的所需长度
     */
    allocUnsafeSlow(size: number): Buffer;

    /**
     * 返回字符串的实际字节长度
     * @param {ArrayBuffer} str 取字节的字符串，如果str为 ArrayBuffer/TypedArray/DataView/Buffer 对象，则返回它们的实际长度
     * @param {string} codec 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
     */
    byteLength(str: ArrayBuffer, codec?: keyof Codec): number;

    /**
     * 返回字符串的实际字节长度
     * @param {string} str 取字节的字符串，如果str为 ArrayBuffer/TypedArray/DataView/Buffer 对象，则返回它们的实际长度
     * @param {string} codec 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
     */
    byteLength(str: string, codec?: keyof Codec): number;

    /**
    * 返回字符串的实际字节长度
    * @param {Buffer} str 取字节的字符串，如果str为 ArrayBuffer/TypedArray/DataView/Buffer 对象，则返回它们的实际长度
    * @param {string} codec 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
    */
    byteLength(str: Buffer, codec?: keyof Codec): number;

    /**
    * 检测编码格式是否被支持
    * @param {string} codec 待检测的编码格式
    */
    isEncoding(codec: string): boolean;
}


interface Int64 extends FibJS.Object {

    /**
     *高 32 位数值
     *
     * @type {number}
     * @memberof Int64
     */
    hi: number,

    /**
     * 低 32 位数值
     *
     * @type {number}
     * @memberof Int64
     */
    lo: number,

    /**
     *将 Int64 内的数值与给定数值比较大小
     *
     * @param {Int64} num 指定比较的数值
     * @returns {number} 返回 1 表示 Int64 内的数值比指定数值更大，0 表示相等，-1 表示更小
     * @memberof Int64
     */
    compare(num: Int64): number

    /**
     *将 Int64 内的数值左移相应的位数，此操作不影响 Int64 原有数值
     *
     * @param {number} bits 指定移动的位数
     * @returns {Int64} 返回包含移位以后数值的对象
     * @memberof Int64
     */
    shiftLeft(bits: number): Int64;

    /**
     *将 Int64 内的数值右移相应的位数，此操作不影响 Int64 原有数值
    *
    * @param {number} bits 指定移动的位数
    * @returns {Int64} 返回包含移位以后数值的对象
    * @memberof Int64
    */
    shiftRight(bits: number): Int64;


    /**
     *将 Int64 内的数值与给定的数值进行按位 and 操作，此操作不影响 Int64 原有数值
    *
    * @param {number} bits 指定移动的位数
    * @returns {Int64}返回包含预算以后数值的对象
    * @memberof Int64
    */
    and(bits: number): Int64;

    /**
      *将 Int64 内的数值与给定的数值进行按位 or 操作，此操作不影响 Int64 原有数值
     *
     * @param {number} bits 指定移动的位数
     * @returns {Int64}返回包含预算以后数值的对象
     * @memberof Int64
     */
    or(bits: number): Int64;

    /**
      *将 Int64 内的数值与给定的数值进行按位 xor 操作，此操作不影响 Int64 原有数值
     *
     * @param {number} bits 指定移动的位数
     * @returns {Int64}返回包含预算以后数值的对象
     * @memberof Int64
     */
    xor(bits: number): Int64;

    /**
      *将 Int64 内的数值与给定的数值进行加操作，此操作不影响 Int64 原有数值
     *
     * @param {number} bits 指定运算的数值
     * @returns {Int64}返回包含预算以后数值的对象
     * @memberof Int64
     */
    add(bits: number): Int64;

    /**
     *将 Int64 内的数值与给定的数值进行减操作，此操作不影响 Int64 原有数值
    *
    * @param {number} bits 指定运算的数值
    * @returns {Int64}返回包含预算以后数值的对象
    * @memberof Int64
    */
    sub(bits: number): Int64;

    /**
   *将 Int64 内的数值与给定的数值进行乘操作，此操作不影响 Int64 原有数值
  *
  * @param {number} bits 指定运算的数值
  * @returns {Int64}返回包含预算以后数值的对象
  * @memberof Int64
  */
    multi(bits: number): Int64;

    /**
*将 Int64 内的数值与给定的数值进行除操作，此操作不影响 Int64 原有数值
*
* @param {number} bits 指定运算的数值
* @returns {Int64}返回包含预算以后数值的对象
* @memberof Int64
*/
    div(bits: number): Int64;

    /**
*比较当前对象与给定的对象是否相等
*
* @param {number} bits 指定运算的数值
* @returns {boolean}返回对象比较的结果
* @memberof Int64
*/
    equals(bits: Int64): boolean;

    /**
     *转换成数字类型
     *
     * @returns {number}返回转换后的数字
     * @memberof Int64 
     */
    toNumber(): number;

    /**
     *转换成字符串类型
     *返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
     *
     * @param {number} [base] 字符串进制数，可以接受 2-16, 32, 64，默认为 10
     * @returns {string} 返回转换后的字符串
     * @memberof Int64
     */
    toString(base?: number): string;

    /**
     *返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
     *
     * @param {string} key 未使用
     * @returns {*}
     * @memberof Int64
     */
    toJSON(key?: string): FibJS.Object;
}

declare var Int64: {
    /**
     * Int64 构造函数
     */
    new(v?: number): Int64;

    /**
     * @param {number} hi 高32位数
     *  @param {number} lo 低32位数
     */
    new(hi: number, lo: number): Int64;

    /**
     * @param {Int64} num 初始化的值
     */
    new(num: Int64): Int64;

    /**
     * @param {string} num 数字字符串
     * @param {number} base 数字字符串的编码方式，可以接受 2-16, 32, 64，默认为 10，为 10 时自动识别 0x 编码
     */
    new(num: string, base?: number): Int64;
}

interface ConsType {
    "onsole", "syslog", "event", "file"
}

interface ConsModifier {
    "control", "alt", "shift", "command"
}

interface ConsKey extends ConsModifier {
    "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12",
    "up", "down", "left", "right", "home", "end", "pageup", "pagedown",
    "backspace", "delete", "insert", "enter", "tab", "escape", "space"
}

interface ConsMouseKey {
    "left", "right", "moddle"
}

interface Console {
    log(message?: any, ...optionalParams: any[]): void;

    /**
     *
     *
     * @param {keyof ConsType} type syslog 仅在 posix 平台有效： event 仅在 windows 平台有效：
     * @memberof Console
     */
    add(type: keyof ConsType): void;

    /**
     * 通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。
     * @example console.add({
     *              type: "event",
     *              levels: [console.INFO, console.ERROR]
     *   });
     * 
     * @example console.add({
    *               type: "file",
    *               levels: [console.INFO, console.ERROR],
    *               必选项，指定日志输出文件，可使用 s% 指定插入日期位置，不指定则添加在结尾
    *               path: "path/to/file_%s.log",
    *               选项，可选值为 "day", "hour", "minute", "###k", "###m", "###g"，缺省为 "1m"
    *               split: "30m",
    *               选项，可选范围为 2-128，缺省为 128
    *               count: 10
    *   });
     *
     * @param {Object} cfg
     * @memberof Console
     */
    add(cfg: Object): void;

    /**
     * 通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。
     * 
     *@example(["console", {
    *           type: "syslog",
    *           levels: [console.INFO, console.ERROR]
    *   }]
     *
     * @param {Array<any>} cfg
     * @memberof Console
     */
    add(cfg: Array<any>): void;

    /**
     *初始化到缺省设置，只在 console 输出信息
     *
     * @memberof Console
     */
    reset(): void;

    /**
     *记录警告日志信息
     *
     * @param {*} [message]
     * @param {...any[]} optionalParams
     * @memberof Console
     */
    notice(message?: any, ...optionalParams: any[]): void;

    /**
     *记录警告日志信息
     *
     * @param {*} [message]
     * @param {...any[]} optionalParams
     * @memberof Console
     */
    crit(message?: any, ...optionalParams: any[]): void;

    /**
    *记录警告日志信息
    * 记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。
    *
    * @param {*} [message]
    * @param {...any[]} optionalParams
    * @memberof Console
    */
    alert(message?: any, ...optionalParams: any[]): void;

    /**
     *用 JSON 格式输出对象
     *
     * @param {Object} obj
     * @memberof Console
     */
    dir(obj: Object): void;

    /**
     *记录警告日志信息
    * 记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。
    *
    * @param {*} [message]
    * @param {...any[]} optionalParams
    * @memberof Console
    */
    print(message?: any, ...optionalParams: any[]): void;

    /**
     *移动控制台光标到指定位置
     *
     * @param {number} row 指定新光标的行坐标
     * @param {number} column 指定新光标的列坐标
     * @memberof Console
     */
    moveTo(row: number, column: number): void;

    /**
     *隐藏控制台光标
     *
     * @memberof Console
     */
    hideCursor(): void;

    /**
     *显示控制台光标
     *
     * @memberof Console
     */
    showCursor(): void;

    /**
     *清除控制台
     *
     * @memberof Console
     */
    clear(): void;

    /**
     *指定按键，单字符直接传入，功能键传入名称
     *
     * @param {string} key
     * @param {string} [modifer]
     * @memberof Console
     */
    keyDown(key: keyof ConsKey, modifer?: keyof ConsModifier): void;

    /**
     *按下一个按键
     *
     * @param {keyof ConsKey} key
     * @param {Array<keyof ConsModifier>} modifers
     * @memberof Console
     */
    keyDown(key: keyof ConsKey, modifers: Array<keyof ConsModifier>): void;

    /**
     *松开一个按键
     *
     * @param {keyof ConsKey} key
     * @param {keyof ConsModifier} [modifer]
     * @memberof Console
     */
    keyUp(key: keyof ConsKey, modifer?: keyof ConsModifier): void;

    /**
     *松开一个按键
     *
     * @param {keyof ConsKey} key
     * @param {Array<keyof ConsModifier>} modifers
     * @memberof Console
     */
    keyUp(key: keyof ConsKey, modifers: Array<keyof ConsModifier>): void;

    /**
    *点击并松开一个按键
    *
    * @param {keyof ConsKey} key
    * @param {keyof ConsModifier} [modifer]
    * @memberof Console
    */
    keyTap(key: keyof ConsKey, modifer?: keyof ConsModifier): void;

    /**
     *点击并松开一个按键
     *
     * @param {keyof ConsKey} key
     * @param {Array<keyof ConsModifier>} modifers
     * @memberof Console
     */
    keyTap(key: keyof ConsKey, modifers: Array<keyof ConsModifier>): void;

    /**
     * 输入一个字符串
     *
     * @param {string} text 指定输入的字符串
     * @memberof Console
     */
    typeString(text: string): void;

    /**
     * 移动鼠标到指定的位置
     *
     * @param {number} x 指定 x 坐标
     * @param {number} y 指定 y 坐标
     * @memberof Console
     */
    moveMouse(x: number, y: number): void;

    /**
     *按下一个鼠标键
     *
     * @param {string} button
     * @memberof Console
     */
    mouseUp(button: keyof ConsMouseKey): void;

    /**
   *放开一个鼠标键
   *
   * @param {string} button
   * @memberof Console
   */
    mouseDown(button: keyof ConsMouseKey): void;

    /**
     *点击一个鼠标键
     *
     * @param {keyof ConsMouseKey} button
     * @param {boolean} [dbClick] 指定是否双击，缺省为 false
     * @memberof Console
     */
    clickMouse(button: keyof ConsMouseKey, dbClick?: boolean): void;

    /**
     *从控制台读取用户输入
     *
     * @async
     * @param {string} msg 提示信息
     * @returns {string} 返回用户输入的信息
     * @memberof Console
     */
    readLine(msg: string): string;

    /**
     *Integer, 输出级别，用以过滤输出信息，缺省为 NOTSET，全部输出。信息过滤之后才会输出给 add 设定的各个设备。
     *
     * @type {number}
     * @memberof Console
     */
    loglevel: number;

    /**
     *查询终端每行字符数
     *
     * @type {number}
     * @memberof Console
     */
    readonly width: number;

    /**
     *查询终端行数
     *
     * @type {number}
     * @memberof Console
     */
    readonly height: number;

    /**
     *loglevel 级别常量
     *
     * @type {number}
     * @memberof Console
     */
    FATAL: number;

    /**
     *loglevel 级别常量
     *
     * @type {number}
     * @memberof Console
     */
    ALERT: number;

    /**
     *loglevel 级别常量
     *
     * @type {number}
     * @memberof Console
     */
    CRIT: number;

    /**
     *loglevel 级别常量
     *
     * @type {number}
     * @memberof Console
     */
    ERROR: number;

    /**
   *loglevel 级别常量
   *
   * @type {number}
   * @memberof Console
   */
    WARN: number;

    /**
  *loglevel 级别常量
  *
  * @type {number}
  * @memberof Console
  */
    NOTICE: number;

    /**
 *loglevel 级别常量
 *
 * @type {number}
 * @memberof Console
 */
    INFO: number;

    /**
 *loglevel 级别常量
 *
 * @type {number}
 * @memberof Console
 */
    DEBUG: number;

    /**
  *loglevel 级别常量
  *
  * @type {number}
  * @memberof Console
  */
    PRINT: number;

    /**
  *loglevel 级别常量
  *
  * @type {number}
  * @memberof Console
  */
    NOTSET: number;
}

declare var console: Console;

declare module "process" {

}

declare var process: {

}

/**
 *运行一个脚本
 *
 * @param {string} fname 指定要运行的脚本路径
 * @param {Array<any>} args 指定要运行的参数，此参数可在脚本内使用 argv 获取
 */
declare function run(fname: string, args: Array<any>): void;
//#endregion

//#region===================================================coroutine========================================================
declare module "coroutine" {
    export var Lock: Lock;
    export var Semaphore: Semaphore;
    export var Condition: Condition;
    export var Event: Event;
    export var Worker:FibJS.Worker;

    /**
     *启动一个纤程并返回纤程对象
     *
     * @export
     * @param {Function} func 制定纤程执行的函数
     * @param {*} args 可变参数序列，此序列会在纤程内传递给函数
     * @returns {FibJS.Fiber}
     */
    export function start(func:Function,...args):FibJS.Fiber;

    /**
     *并行执行一组函数，并等待返回
     *
     * @export
     * @param {Array<Function>} funcs 并行执行的函数数组
     * @param {Integer} [fibers]  限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber
     * @returns {Array<Value>}
     */
    export function parallel(funcs:Array<Function>,fibers?:Integer):Array<Value>;

    /**
     *并行执行一个函数处理一组数据，并等待返回
     *
     * @export
     * @param {Array<Value>} datas 并行执行的数据数组
     * @param {Function} func 并行执行的函数
     * @param {Integer} [fibers] 限制并发 fiber 数量，缺省为 -1，启用与 datas 数量相同 fiber
     * @returns {Array<Value>}
     */
    export function parallel(datas:Array<Value>,func:Function,fibers?:Integer):Array<Value>;

    /**
     *并行执行一个函数多次，并等待返回
     *
     * @export
     * @param {Function} func 并行执行的函数数
     * @param {Integer} num  重复任务数量
     * @param {Integer} [fibers] 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber
     * @returns {Array<Value>}
     */
    export function parallel(func:Function,num:Integer,fibers?:Integer):Array<Value>;

    /**
     *并行执行一组函数，并等待返回
     *
     * @export
     * @param {...Array<Function>} funcs  一组并行执行的函数
     * @returns {Array<Value>}  返回函数执行结果的数组
     */
    export function parallel(...funcs:Array<Function>):Array<Value>;

    /**
     *返回当前纤程
     *
     * @export
     * @returns {FibJS.Fiber} 当前纤程对象
     */
    export function current():FibJS.Fiber;

    /**
     * 暂停当前纤程指定的时间
     *@async
     *
     * @export
     * @param {Integer} [ms] 指定要暂停的时间，以毫秒为单位，缺省为 0，即有空闲立即回恢复运行
     */
    export function sleep(ms?:Integer):void;

    /**
     * 返回当前正在运行的全部 fiber 数组
     */
    export const fibers:Array<FibJS.Fiber>;

    /**
     * 查询和设置空闲 Fiber 数量，服务器抖动较大时可适度增加空闲 Fiber 数量。缺省为 256
     */
    export const spareFibers:Integer;

    /**
     * 查询当前 vm 编号
     */
    export const vmid:Integer;

    /**
     * 修改和查询本 vm 的输出级别，用以过滤输出信息，缺省为 console.NOTSET，全部输出
     */
    export const loglevel:Integer;

    /**
     *不同于操作系统的锁，纤程锁是纯逻辑实现，加锁与解锁负荷很小
     *
     * @interface Lock
     */
    interface Lock extends FibJS.Object {

        /**
         * 不同于操作系统的锁，纤程锁是纯逻辑实现，加锁与解锁负荷很小
         */
        new(): Lock;

        /**
         *获取锁的拥有权
         *@see acquire 方法用于获取锁的拥有权，当锁处于可获取状态时，此方法立即返回 true。
         *   当锁不可获取，且 blocking 为 true，则当前纤程进入休眠，当其他纤程释放锁后，此方法返回 true。
         *   当锁不可获取，且 blocking 为 false，则方法返回 false。
         *
         * @param {boolean} [blocking] 指定是否等待，为 true 时等待，缺省为真   
         * @returns {boolean} 返回是否成功获取锁，为 true 表示成功获取
         * @memberof Lock
         */
        acquire(blocking?: boolean): boolean;

        /**
         *  释放锁的拥有权
         * 此方法将释放对锁的拥有权，如果当前纤程未拥有锁，此方法将抛出错误。
         *
         * @memberof Lock
         */
        release(): void;

        /**
         *查询当前等待任务数
         *
         * @returns {number}
         * @memberof Lock
         */
        count(): number;
    }

    /**
     *@see 对象 Semaphore
     *   纤程信号量对象
     *   信号量对象管理一个内部计数器，此计数器调用 acquire 或者 wait 后减一，调用 release 或者 post 后加一。 计数器不会减至负数，
     *   因为 acquire 和 wait 在发现数值为 0 的时候，会休眠当前纤程，直至其它纤程通过 release 或 post 增加计数器的值。
     *   信号量常用的场合是限制资源并发使用，以及生产者/消费者模式的应用。
     * 
     * @example 以数据库请求为例，限制资源并发使用的情形：
     * ```js
     *          var maxconnections = 5;
     *          var l = new coroutine.Semaphore(maxconnections);
     *          
    *             ......
     *
     *           l.acquire();
    *              var conn = connectdb()
     *             .....
     *          conn.close();
     *          l.release();
     * ```js
     * 
     * 生产者/消费者模式通常则将信号量与队列配合使用。生产者向队列中加入数据，并 post 一个信号，消费者则先 wait 信号，获取信号后去队查询取数据。
     *
     * @interface Semaphore
     * @extends {FibJS.Object}
     */
    interface Semaphore extends FibJS.Object {

        /**
         * @param {number} value 计数器初始数值
         */
        new(value?: number): Semaphore;

        /**
         *等待一个信号量，等同于 acquire(true)
         *
         * @memberof Semaphore
         */
        wait(): void;

        /**
         *释放一个信号量，等同于 release()
         *
         * @memberof Semaphore
         */
        post(): void;

        /**
         *尝试获取一个信号，如不能获取，则立即返回并返回 false，等同于 acquire(false)
         *
         * @memberof Semaphore
         */
        trywait(): void;

        /**
         *获取锁的拥有权
         *@see
         * acquire 方法用于获取锁的拥有权，当锁处于可获取状态时，此方法立即返回 true。
         * 当锁不可获取，且 blocking 为 true，则当前纤程进入休眠，当其他纤程释放锁后，此方法返回 true。
         * 当锁不可获取，且 blocking 为 false，则方法返回 false。
         *
         * @param {boolean} [blocking] 指定是否等待，为 true 时等待，缺省为真
         * @returns {boolean} 返回是否成功获取锁，为 true 表示成功获取
         * @memberof Semaphore
         */
        acquire(blocking?: boolean): boolean;

        /**
         *释放锁的拥有权
         *此方法将释放对锁的拥有权，如果当前纤程未拥有锁，此方法将抛出错误。
         *
         * @memberof Semaphore
         */
        release(): void;

        /**
         *查询当前等待任务数
         *
         * @returns {number}
         * @memberof Semaphore
         */
        count(): number;
    }

    /**
     *条件变量对象
     *@see
     * 条件变量是利用纤程间共享的全局变量来进行同步的一种机制，主要包括两个动作： 1）一个线程等待某个条件成立，而将自己挂起； 2）
     * 另一个线程使条件成立，并通知等待的纤程向下执行。
     * 
     * 为了防止竞争，每个条件变量都需要一个Lock的配合（Lock可自行显式创建并传递进来，也可交由fibjs为您创建）
     * 通过使用条件变量，可以利用一个条件变量控制一批纤程的开关；
     * 
     * @example
     * ```js
     * var coroutine = require("coroutine");
     * var cond = new coroutine.Condition();
     * var ready = false;
     * var state = "ready";
     * function funcwait() {
     *           cond.acquire();
     *           while (!ready)
     *               cond.wait();
     *            state = "go"
     *          cond.release();
     * }
     * 
     * coroutine.start(funcwait);
     * cond.acquire();
     * console.log(state)
     * ready = true;
     * cond.notify();
     * coroutine.sleep();
     * console.log(state);
     * 
     * ```js
     *
     * @interface Condition
     * @extends {FibJS.Object}
     */
    interface Condition extends Lock {


        new(lock?: Lock);

        /**
         *使纤程进入阻塞状态
         *
         * @memberof Condition
         */
        wait(): void;

        /**
         *通知一个被阻塞的纤程（最后加入纤程池的）向下继续执行
         *
         * @memberof Condition
         */
        notify(): void;

        /**
         *通知所有被阻塞的纤程向下继续执行
         *
         * @memberof Condition
         */
        notifyAll(): void;
    }

    /**
     *通过一个事件达到对一组纤程进行控制的目的（事件对象的状态为bool类型）
     *
     * @interface Event
     * @extends {Lock}
     */
    interface Event extends Lock {

        /**
         * e 指定是否等待，为 true 时等待，缺省为 false
         */
        new(e?: boolean): Event;

        /**
         *判断事件对象是否为真
         *
         * @returns {boolean}
         * @memberof Event
         */
        isSet(): boolean;

        /**
         *激活事件（将事件状态改为true），并调用pulse()
         *
         * @memberof Event
         */
        set(): void;

        /**
         *激活等待该事件的所有纤程
         *
         * @memberof Event
         */
        pulse(): void;

        /**
         *重置事件（将事件状态改为false）
         *
         * @memberof Event
         */
        clear(): void;
    }
}
//#endregion


//#region===================================================events=========================================================
declare module "events"{
    class internal extends FibJS.EventEmitter { }

    namespace internal {
        export class EventEmitter extends internal {
        
        }
    }

    export = internal;
}

//#endregion

//#region======================================================encoding=======================================================

declare module "base32" {
    /**
     *以 base32 方式编码数据
     *
     * @export
     * @param {Buffer} data 要编码的数据
     * @returns {string}返回编码的字符串
     */
    export function encode(data: Buffer): string;

    /**
     *以 base32 方式解码字符串为二进制数据
     *
     * @export
     * @param {string} data 要解码的字符串
     * @returns {Buffer}  返回解码的二进制数据
     */
    export function decode(data: string): Buffer;
}

declare module "base64" {

    /**
     *以 base64 方式编码数据
     *
     * @export
     * @param {Buffer} data 要编码的数据
     * @param {boolean} [url] 指定是否使用 url 安全字符编码
     * @returns {string} 返回编码的字符串
     */
    export function encode(data: Buffer, url?: boolean): string;

    /**
     *以 base64 方式解码字符串为二进制数据
     *
     * @export
     * @param {string} data 要解码的字符串
     * @returns {string}  返回解码的二进制数据
     */
    export function decode(data: string): string;
}

declare module "base64vlq" {
    /**
       *以 base64vlq 方式编码数据
       *
       * @export
       * @param {number} data 要编码的数据
       * @returns {string}返回编码的字符串
       */
    export function encode(data: Integer): string;

    /**
     *以 base64vlq 方式编码数据
     *
     * @export
     * @param {Array<any>} data 要编码的数据
     * @returns {string} 返回编码的字符串
     */
    export function encode(data: Array<any>): string;

    /**
     *以 base64vlq 方式解码字符串为二进制数据
     *
     * @export
     * @param {string} data 要解码的字符串
     * @returns {string}  返回解码的二进制数据
     */
    export function decode(data: string): string;
}

declare module "hex" {
    /**
         *以 hex 方式编码数据
         *
         * @export
         * @param {Buffer} data 要编码的数据
         * @returns {string}返回编码的字符串
         */
    export function encode(data: Buffer): string;

    /**
     *以 hex 方式解码字符串为二进制数据
     *
     * @export
     * @param {string} data 要解码的字符串
     * @returns {string}  返回解码的二进制数据
     */
    export function decode(data: string): Buffer;
}

declare module "iconv" {
    /**
     *用 iconv 将文本转换为二进制数据
     *
     * @export
     * @param {string} charset 指定字符集
     * @param {string} data 要转换的文本
     * @returns {Buffer} 返回解码的二进制数据
     */
    export function encode(charset: string, data: string): Buffer;

    /**
     *用 iconv 将 Buffer 内容转换为文本
     *
     * @export
     * @param {string} charset  指定字符集
     * @param {Buffer} data 要转换的二进制数据
     * @returns {string} 返回编码的字符串
     */
    export function decode(charset: string, data: Buffer): string;

    /**
     *检测字符集是否被支持
     *
     * @export
     * @param {string} charset 指定字符集
     * @returns {boolean} 返回是否支持该字符集
     */
    export function isEncoding(charset: string): boolean;
}

declare module "json" {
    /**
     *以 json 格式编码变量
     *
     * @export
     * @param {Value} data  要编码的变量
     * @returns {string} 返回编码的字符串
     */
    export function encode(data: Value): string;

    /**
     *以 json 方式解码字符串为一个变量
     *
     * @export
     * @param {string} data 要解码的字符串
     * @returns {Value} 返回解码的变量
     */
    export function decode(data: string): Value;
}

declare module "bson" {
    /**
      *以 bson 格式编码变量
      *
      * @export
      * @param {FibJS.Object} data 要编码的数据
      * @returns {Buffer}返回编码的二进制数据
      */
    export function encode(data: FibJS.Object): Buffer;

    /**
     *以 bson 方式解码字符串为一个变量
     *
     * @export
     * @param {Buffer} data 要解码的二进制数据
     * @returns {FibJS.Object}  返回解码的变量
     */
    export function decode(data: Buffer): FibJS.Object;
}

declare module "encoding" {
    import * as Base32 from "base32";
    import * as Base64 from "base64";
    import * as Base64vlq from "base64vlq";
    import * as Hex from "hex";
    import * as Iconv from "iconv";
    import * as Json from "json";
    import * as Bson from "base32";

    export var base32: typeof Base32;
    export var base64: typeof Base64;
    export var base64vlq: typeof Base64vlq;
    export var hex: typeof Hex;
    export var iconv: typeof Iconv;
    export var json: typeof Json;
    export var bson: typeof Bson;

    /**
     *将字符串编码为 javascript 转义字符串，用以在 javascript 代码中包含文本
     *
     * @export
     * @param {string} str 要编码的字符串
     * @param {boolean} [json] 是否生成json兼容字符串
     * @returns {string}返回编码的字符串
     */
    export function jsstr(str: string, json?: boolean): string;

    /**
     *url 字符串安全编码
     *
     * @export
     * @param {string} str 要编码的 url
     * @returns {string} 返回编码的字符串
     */
    export function encodeURI(str: string): string;

    /**
     *url 部件字符串安全编码
     *
     * @export
     * @param {string} url 要编码的 url
     * @returns {string} 返回编码的字符串
     */
    export function encodeURIComponent(url: string): string;

    /**
     *url 安全字符串解码
     *
     * @export
     * @param {string} url 要解码的 url
     * @returns {string} 返回解码的字符串
     */
    export function decodeURI(url: string): string;
}
//#endregion

//#region=====================================================constants============================================================
declare module "constants"{

}
//#endregion

//#region ===================================================net========================================================
declare module "net" {

    /**
     * 地址集常量，指定 ipv4
     */
    export var AF_INET: number;

    /**
     * 地址集常量，指定 ipv6
     */
    export const AF_INET6: number;

    /**
     * 协议族常量，指定 tcp
     */
    export const SOCK_STREAM: number;

    /**
     * 协议族常量，指定 udp
     */
    export const SOCK_DGRAM: number;

    /**
     * Socket 对象
     */
    export class Socket {

        /**
         *Creates an instance of Socket.
         * @param {number} [family] default AF_INET
         * @param {number} [type] default SOCK_STREAM
         * @memberof Socket
         */
        constructor(family?: number, type?: number);

        /**
         *查询当前 Socket 对象的地址集
         *
         * @type {number}
         * @memberof Socket
         */
        readonly family: number;

        /**
         *查询当前 Socket 对象的协议族
         *
         * @type {number}
         * @memberof Socket
         */
        readonly type: number;

        /**
         *查询当前连接的对方地址
         *
         * @type {string}
         * @memberof Socket
         */
        readonly remoteAddress: string;

        /**
         *查询当前连接的对方端口
         *
         * @type {number}
         * @memberof Socket
         */
        readonly remotePort: number;

        /**
         *查询当前连接的本地地址
         *
         * @type {string}
         * @memberof Socket
         */
        readonly localAddress: string;

        /**
         *查询当前连接的本地端口
         *
         * @type {number}
         * @memberof Socket
         */
        readonly localPort: number;

        /**
         *查询和设置超时时间 单位毫秒
         *
         * @type {number}
         * @memberof Socket
         */
        timeout: number;

        /**
         * 建立一个 tcp 连接
         * @async
         * @param host  指定对方地址或主机名
         * @param prot  指定对方端口
         */
        connect(host: string, prot: number): void;

        /**
        * 将当前 Socket 绑定至本地所有地址的指定端口
        * @param port  指定绑定的端口
        * @param allowIPv4  指定绑定的端口 default true
        */
        bind(port: number, allowIPv4?: boolean): void;

        /**
         *将当前 Socket 绑定至指定地址的指定端口
         *
         * @param {string} addr 指定绑定的地址
         * @param {number} port 指定绑定的端口
         * @param {boolean} [allowIPv4] 指定是否接受 ipv4 连接，缺省为 true。本参数在 ipv6 时有效，并依赖于操作系统
         * @memberof Socket
         */
        bind(addr: string, port: number, allowIPv4?: boolean): void;

        /**
         *开始监听连接请求
         *
         * @param {number} [backlog] 指定请求队列长度，超出的请求将被拒绝，缺省为 120
         * @memberof Socket
         */
        listen(backlog?: number): void;

        /**
         *等待并接受一个连接
         * @async
         * @memberof Socket
         */
        accept(): Socket;

        recv(): void;
    }
}
//#endregion