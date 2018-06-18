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
declare var process: FibJS.Process;

//type placeholder
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
    export function Function(actual?: Value, msg?: string);

    /**
     *测试数值为真，为假则断言失败
     *
     * @export
     * @param {Value} [actual]
     * @param {string} [msg]
     */
    export function ok(actual?: Value, msg?: string);

    /**
     *测试数值为假，为真则断言失败
     *
     * @export
     * @param {Value} [actual]
     * @param {string} [msg]
     */
    export function notOk(actual?: Value, msg?: string);

    /**
     *测试数值等于预期值，不相等则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {Value} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function equals(actual?: Value, expected?: Value, msg?: string);

    /**
     *测试数值等于预期值，不相等则断言失败
     *
     * @export
     * @param {Value} [actual] 要测试的数值
     * @param {Value} [expected]  预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notEqual(actual?: Value, expected?: Value, msg?: string);

    /**
     * 测试数值严格等于预期值，不相等则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {Value} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function strictEqual(actual?: Value, expected?: Value, msg?: string);

    /**
     *测试数值不严格等于预期值，相等则断言失
     *
     * @export
     * @param {Value} [actual] 要测试的数值
     * @param {Value} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notStrictEqual(actual?: Value, expected?: Value, msg?: string);

    /**
     *测试数值深度等于预期值，不相等则断言失败
     *
     * @export
     * @param {Value} [actual] 要测试的数值
     * @param {Value} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function deepEqual(actual?: Value, expected?: Value, msg?: string);


    /**
     *测试数值不深度等于预期值，相等则断言失败
     *
     * @export
     * @param {Value} [actual] 要测试的数值
     * @param {Value} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notDeepEqual(actual?: Value, expected?: Value, msg?: string);


    /**
     *测试数值近似等于预期值，否则断言失败
     *
     * @export
     * @param {Value} actual  要测试的数值
     * @param {Value} expected 预期的数值
     * @param {Value} delta 近似的小数精度
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function closeTo(actual: Value, expected: Value, delta: Value, msg?: string);

    /**
      *测试数值不近似等于预期值，否则断言失败
      *
      * @export
      * @param {Value} actual  要测试的数值
      * @param {Value} expected 预期的数值
      * @param {Value} delta 近似的小数精度
      * @param {string} [msg] 断言失败时的提示信息
      */
    export function notCloseTo(actual: Value, expected: Value, delta: Value, msg?: string);

    /**
    * 测试数值小于预期值，大于或等于则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {Value} [expected] 预期的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function lessThan(actual?: Value, expected?: Value, msg?: string);

    /**
    * 测试数值不小于预期值，小于则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {Value} [expected] 预期的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function notLessThan(actual?: Value, expected?: Value, msg?: string);

    /**
   * 测试数值大于预期值，小于或等于则断言失败
   *
   * @export
   * @param {Value} [actual]  要测试的数值
   * @param {Value} [expected] 预期的数值
   * @param {string} [msg] 断言失败时的提示信息
   */
    export function greaterThan(actual?: Value, expected?: Value, msg?: string);

    /**
     * 测试数值不大于预期值，大于则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {Value} [expected] 预期的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notGreaterThan(actual?: Value, expected?: Value, msg?: string);

    /**
     * 测试变量存在，为假则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function exist(actual?: Value, msg?: string);

    /**
     * 测试变量不存在，为真则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notExist(actual?: Value, msg?: string);

    /**
    *测试数值为布尔值真，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isTrue(actual?: Value, msg?: string);

    /**
     *测试数值不为布尔值真，否则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotTrue(actual?: Value, msg?: string);

    /**
     *测试数值不为布尔值真，否则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isFalse(actual?: Value, msg?: string);

    /**
     *测试数值不为布尔值假，否则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotFalse(actual?: Value, msg?: string);

    /**
    *测试数值为 Null，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isNull(actual?: Value, msg?: string);

    /**
     *测试数值不为 Null，否则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotNull(actual?: Value, msg?: string);

    /**
    *测试数值为 undefined，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isUndefined(actual?: Value, msg?: string);

    /**
    *测试数值不为 undefined，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isDefined(actual?: Value, msg?: string);

    /**
   *测试数值不为 undefined，否则断言失败
   *
   * @export
   * @param {Value} [actual]  要测试的数值
   * @param {string} [msg] 断言失败时的提示信息
   */
    export function isFunction(actual?: Value, msg?: string);

    /**
    *测试数值不为函数，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isNotFunction(actual?: Value, msg?: string);

    /**
     *测试数值为对象，否则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isObject(actual?: Value, msg?: string);

    /**
     *测试数值不为对象，否则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotObject(actual?: Value, msg?: string);

    /**
    *测试数值为数组，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isArray(actual?: Value, msg?: string);

    /**
    *测试数值不为数组，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isNotArray(actual?: Value, msg?: string);

    /**
    *测试数值为字符串，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isString(actual?: Value, msg?: string);

    /**
     *测试数值不为字符串，否则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotString(actual?: Value, msg?: string);

    /**
    *测试数值为数字，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isNumber(actual?: Value, msg?: string);

    /**
     *测试数值不为数字，否则断言失败
     *
     * @export
     * @param {Value} [actual]  要测试的数值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function isNotNumber(actual?: Value, msg?: string);

    /**
    *测试数值为布尔，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isBoolean(actual?: Value, msg?: string);


    /**
    *测试数值为布尔，否则断言失败
    *
    * @export
    * @param {Value} [actual]  要测试的数值
    * @param {string} [msg] 断言失败时的提示信息
    */
    export function isNotBoolean(actual?: Value, msg?: string);

    /**
     *测试数值为给定类型，否则断言失败
     *
     * @export
     * @param {Value} actual 要测试的数值
     * @param {string} type 指定的类型
     * @param {?string} msg 断言失败时的提示信息
     */
    export function typeOf(actual: Value, type: string, msg: string);

    /**
     *测试数值不为给定类型，否则断言失败
     *
     * @export
     * @param {Value} actual 要测试的数值
     * @param {string} type 指定的类型
     * @param {?string} msg 断言失败时的提示信息
     */
    export function notTypeOf(actual: Value, type: string, msg: string);

    /**
     *测试对象中包含指定属性，否则断言失败
     *
     * @export
     * @param {Value} value 要测试的对象
     * @param {Value} prop 要测试的属性
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function property(value: Value, prop: Value, msg?: string);

    /**
     *测试对象中不包含指定属性，否则断言失败
     *
     * @export
     * @param {Value} value 要测试的对象
     * @param {Value} prop 要测试的属性
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notProperty(value: Value, prop: Value, msg?: string);

    /**
     *深度测试对象中包含指定属性，否则断言失败
     *
     * @export
     * @param {Value} value 要测试的对象
     * @param {Value} prop 要测试的属性
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function deepProperty(value: Value, prop: Value, msg?: string);

    /**
     *深度测试对象中不包含指定属性，否则断言失败
     *
     * @export
     * @param {Value} value 要测试的对象
     * @param {Value} prop 要测试的属性
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function notDeepProperty(value: Value, prop: Value, msg?: string);

    /**
     *测试对象中指定属性的值为给定值，否则断言失败
     *
     * @export
     * @param {Value} obj 要测试的对象
     * @param {Value} prop 要测试的属性
     * @param {Value} value 给定的值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function propertyVal(obj: Value, prop: Value, value: Value, msg?: string);

    /**
     *测试对象中指定属性的值不为给定值，否则断言失败
     *
     * @export
     * @param {Value} obj 要测试的对象
     * @param {Value} prop 要测试的属性
     * @param {Value} value 给定的值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function propertyNotVal(obj: Value, prop: Value, value: Value, msg?: string);

    /**
     *深度测试对象中指定属性的值为给定值，否则断言失败
     *
     * @export
     * @param {Value} obj 要测试的对象
     * @param {Value} prop 要测试的属性，以“.”分割
     * @param {Value} value 给定的值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function deepPropertyVal(obj: Value, prop: Value, value: Value, msg?: string);

    /**
     *深度测试对象中指定属性的值不为给定值，否则断言失败
     *
     * @export
     * @param {Value} obj 要测试的对象
     * @param {Value} prop 要测试的属性，以“.”分割
     * @param {Value} value 给定的值
     * @param {string} [msg] 断言失败时的提示信息
     */
    export function deepPropertyNotVal(obj: Value, prop: Value, value: Value, msg?: string);

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
     * @param {Value} [obj]
     */
    export function ifError(obj?: Value);
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
    export var it: {
        (name: string, block: Function): void;
        /**
         *test.setup 后可使用 it.skip 调用
         *
         * @param {string} name
         * @param {Function} block
         */
        skip(name: string, block: Function): void;
        /**
         *test.setup 后可使用 it.only 调用
         *
         * @param {string} name
         * @param {Function} block
         */
        only(name: string, block: Function): void;
    }

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
        process: Process;
        setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => any;
        setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => FibJS.Timer;
        setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => FibJS.Timer;
        undefined: typeof undefined;
        unescape: (str: string) => string;
        argv: Array<any>;
        gc: () => void;
        v8debug?: any;
    }
    //SIGINT 在终端运行时，可以被所有平台支持，通常可以通过 CTRL+C 触发。
    //SIGTERM 当进程被 kill 时触发此信号。Windows 下不支持。
    type Signals =
        "SIGINT" | "SIGTERM";
    type BeforeExitListener = (code: number) => void;
    type ExitListener = (code: number) => void;
    type SignalsListener = (signal: Signals) => void;
    export interface Process extends EventEmitter {
        /**
         *返回当前进程的命令行参数
         *
         * @type {ReadonlyArray<string>}
         * @memberof Process
         */
        argv: ReadonlyArray<string>;

        /**
         *返回当前进程的特殊命令行参数，这些参数被 fibjs 用于设置运行环境
         *
         * @type {ReadonlyArray<string>}
         * @memberof Process
         */
        execArgv: ReadonlyArray<string>;

        /**
         *返回 fibjs 版本字符串
         *
         * @type {Readonly<string>}
         * @memberof Process
         */
        version:Readonly<string>;

        /**
         *返回 fibjs 及组件的版本信息
         *
         * @type {Readonly<Object>}
         * @memberof Process
         */
        versions:Readonly<Object>;

        /**
         *查询当前运行执行文件完整路径
         *
         * @type {string}
         * @memberof Process
         */
        execPath: string;

        /**
         *查询当前进程的环境变量
         *
         * @type {string}
         * @memberof Process
         */
        env:string;

        /**
         * 查询当前 cpu 环境
         *
         * @type {keyof  'amd64'}
         * @memberof Process
         */
        arch:keyof { 'amd64', 'arm', 'arm64', 'ia32'};
        platform:keyof { 'darwin', 'freebsd', 'linux',"win32"};
        stdin:any;
        stdout:any;
        stderr:any;
        exitCode:Integer;

        addListener(event: "beforeExit", listener: BeforeExitListener): this;
        addListener(event: "exit", listener: BeforeExitListener): this;
        addListener(event: Signals, listener: SignalsListener): this;

		/**
			* 
			* @brief 改变当前的 umask，Windows 不支持此方法
			* @param mask 指定新的掩码
			* @return 返回之前的 mask
			* 
			* 
			* 
			*/
        umask(mask: number): number;

		/**
			* 
			* @brief 改变当前的 umask，Windows 不支持此方法
			* @param mask 指定新的掩码， 字符串类型八进制(e.g: "0664")
			* @return 返回之前的 mask
			* 
			* 
			* 
			*/
        umask(mask: string): number;

		/**
			* 
			* @brief 返回当前的 umask，Windows 不支持此方法
			* @return 返回当前的 mask 值
			* 
			* 
			* 
			*/
        umask(): number;

		/**
			* 
			* @brief 返回系统高精度时间，此时间与当前时间无关，仅用于高精度计时
			* @param diff 用于比较的初始时间
			* @return 返回计时时间，格式为 [seconds, nanoseconds]
			* 
			* 
			* 
			*/
        hrtime(diff?: any[]/** = v8::Array::New(isolate)*/): any[];

		/**
			* 
			* @brief 退出当前进程，并返回 exitCode 作为进程结果
			* 
			* 
			*/
        exit(): void;

		/**
			* 
			* @brief 退出当前进程，并返回结果
			* @param code 返回进程结果
			* 
			* 
			* 
			*/
        exit(code: number): void;

		/**
			* 
			* @brief 返回操作系统当前工作路径
			* @return 返回当前系统路径
			* 
			* 
			* 
			*/
        cwd(): string;

		/**
			* 
			* @brief 修改操作系统当前工作路径
			* @param directory 指定设定的新路径
			* 
			* 
			* 
			*/
        chdir(directory: string): void;

		/**
			* 
			* @brief 查询运行环境运行时间，以秒为单位
			* @return 返回表示时间的数值
			* 
			* 
			* 
			*/
        uptime(): number;

		/**
			* 
			* @brief 查询当前进程内存使用报告
			* 
			* 内存报告生成类似以下结果：
			* ```JavaScript
			* {
			* "rss": 8622080,
			* "heapTotal": 4083456,
			* "heapUsed": 1621800
			* }
			* ```
			* 其中：
			* - rss 返回进程当前占用物理内存大小
			* - heapTotal 返回 v8 引擎堆内存大小
			* - heapUsed 返回 v8 引擎正在使用堆内存大小
			* @return 返回包含内存报告
			* 
			* 
			* 
			*/
        memoryUsage(): Object;

		/**
			* 
			* @brief 启动一个纤程
			* @param func 制定纤程执行的函数
			* @param args 可变参数序列，此序列会在纤程内传递给函数
			* 
			* 
			* 
			*/
        nextTick(func: Function, ...args: any[]): void;

		/**
			* 
			* @brief 运行指定的命令行，接管进程输入输出流，并返回进程对象
			* 
			* opts 支持的选项如下：
			* ```JavaScript
			* {
			* "timeout": 100, // 单位为 ms
			* "envs": [] // 进程环境变量
			* }
			* ```
			* @param command 指定运行的命令行
			* @param args 指定运行的参数列表
			* @param opts 指定运行的选项
			* @return 返回包含运行结果的进程对象
			* 
			* 
			* 
			*/
        open(command: string, args: any[], opts?: Object/** = v8::Object::New(isolate)*/): SubProcess;

		/**
			* 
			* @brief 运行指定的命令行，接管进程输入输出流，并返回进程对象
			* 
			* opts 支持的选项如下：
			* ```JavaScript
			* {
			* "timeout": 100, // 单位为 ms
			* "envs": [] // 进程环境变量
			* }
			* ```
			* @param command 指定运行的命令行
			* @param opts 指定运行的选项
			* @return 返回包含运行结果的进程对象
			* 
			* 
			* 
			*/
        open(command: string, opts?: Object/** = v8::Object::New(isolate)*/): SubProcess;

		/**
			* 
			* @brief 运行指定的命令行，并返回进程对象
			* 
			* opts 支持的选项如下：
			* ```JavaScript
			* {
			* "timeout": 100, // 单位为 ms
			* "envs": [] // 进程环境变量
			* }
			* ```
			* @param command 指定运行的命令行
			* @param args 指定运行的参数列表
			* @param opts 指定运行的选项
			* @return 返回包含运行结果的进程对象
			* 
			* 
			* 
			*/
        start(command: string, args: any[], opts?: Object/** = v8::Object::New(isolate)*/): SubProcess;

		/**
			* 
			* @brief 运行指定的命令行，并返回进程对象
			* 
			* opts 支持的选项如下：
			* ```JavaScript
			* {
			* "timeout": 100, // 单位为 ms
			* "envs": [] // 进程环境变量
			* }
			* ```
			* @param command 指定运行的命令行
			* @param opts 指定运行的选项
			* @return 返回包含运行结果的进程对象
			* 
			* 
			* 
			*/
        start(command: string, opts?: Object/** = v8::Object::New(isolate)*/): SubProcess;

		/**
			* 
			* @brief 运行指定的命令行，并返回进程的结束代码
			* 
			* opts 支持的选项如下：
			* ```JavaScript
			* {
			* "timeout": 100, // 单位为 ms
			* "envs": [] // 进程环境变量
			* }
			* ```
			* @param command 指定运行的命令行
			* @param args 指定运行的参数列表
			* @param opts 指定运行的选项
			* @return 返回命令的运行结果
			* 
			* 
			* 
			*/
        run(command: string, args: any[], opts?: Object/** = v8::Object::New(isolate)*/): number;

		/**
			* 
			* @brief 运行指定的命令行，并返回进程的结束代码
			* 
			* opts 支持的选项如下：
			* ```JavaScript
			* {
			* "timeout": 100, // 单位为 ms
			* "envs": [] // 进程环境变量
			* }
			* ```
			* @param command 指定运行的命令行
			* @param opts 指定运行的选项
			* @return 返回命令的运行结果
			* 
			* 
			* 
			*/
        run(command: string, opts?: Object/** = v8::Object::New(isolate)*/): number;
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
    export interface BufferedStream extends Stream {


        /**
         * class prop 
         *
         * 
         * @brief 查询创建缓存对象时的流对象
         * 
         * @readonly
         * @type Stream
         */

        stream: FibJS.Stream

        /**
         * class prop 
         *
         * 
         * @brief 查询和设置当前对象处理文本时的字符集，缺省为 utf-8
         * 
         * 
         * @type String
         */

        charset: string

        /**
         * class prop 
         *
         * 
         * @brief 查询和设置行结尾标识，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"
         * 
         * 
         * @type String
         */

        EOL: string

        /**
         * 
         * @brief BufferedStream 构造函数
         * @param stm BufferedStream 的二进制基础流对象
         * 
         * 
         * 
         */
        new(stm: FibJS.Stream);

        /**
         * 
         * @brief 读取指定字符的文本
         * @param size 指定读取的文本字符个数，以 utf8 或者指定的编码字节数为准
         * @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
         * 
         * 
         * @async
         */
        readText(size: number): string;

        /**
         * 
         * @brief 读取一行文本，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"
         * @param maxlen 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数
         * @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
         * 
         * 
         * @async
         */
        readLine(maxlen?: number/** = -1*/): string;

        /**
         * 
         * @brief 以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"
         * @param maxlines 指定此次读取的最大行数，缺省读取全部文本行
         * @return 返回读取的文本行数组，若无数据可读，或者连接中断，空数组
         * 
         * 
         * 
         */
        readLines(maxlines?: number/** = -1*/): any[];

        /**
         * 
         * @brief 读取一个文本字符串，以指定的字节为结尾
         * @param mk 指定结尾的字符串
         * @param maxlen 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数
         * @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
         * 
         * 
         * @async
         */
        readUntil(mk: string, maxlen?: number/** = -1*/): string;

        /**
         * 
         * @brief 写入一个字符串
         * @param txt 指定写入的字符串
         * 
         * 
         * @async
         */
        writeText(txt: string): void;

        /**
         * 
         * @brief 写入一个字符串，并写入换行符
         * @param txt 指定写入的字符串
         * 
         * 
         * @async
         */
        writeLine(txt: string): void;
    }
    export interface SubProcess extends BufferedStream {

        /**
            * 
            * @brief 杀掉当前对象指向的进程，并传递信号
            * @param signal 传递的信号
            * 
            * 
            * 
            */
        kill(signal: number): void;

        /**
            * 
            * @brief 等待当前对象指向的进程结束，并返回进程结束代码
            * @return 进程的结束代码
            * 
            * 
            * @async
            */
        wait(): number;

        /**
            * 
            * @brief 查询当前对象所指向的进程是否存在指定名称的窗口，仅限 windows
            * @param name 窗口名称
            * @return 窗口存在则返回窗口的 rect，否则返回 undefined
            * 
            * 
            * 
            */
        findWindow(name: string): any;
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
        onmessage(): void;

        /**
         *向 Master 或 Worker 发送消息，
         *
         * @param {Value} data 指定发送的消息内容
         * @memberof Worker
         */
        postMessage(data: Value): void;
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

    class Fiber extends Object {

        /**
         *查询纤程的唯一 id
         *
         * @type {Long}
         * @memberof Fiber
         */
        id: Long;

        /**
         *查询纤程的调用纤程
         *
         * @type {Fiber}
         * @memberof Fiber
         */
        caller: Fiber;

        /**
         *询纤程的调用堆栈
         *
         * @type {string}
         * @memberof Fiber
         */
        stack: string;

        /**
         *等待纤程结束
         *
         * @memberof Fiber
         */
        join(): void;
    }

    export interface Handler {

        /**
            * 
            * @brief 构造一个消息处理器链处理对象
            * @param hdlrs 处理器数组
            * 
            * 
            * 
            */
        constructor(hdlrs: any[]);

        /**
            * 
            * @brief 创建一个消息处理器路由对象
            * @param map 初始化路由参数
            * 
            * 
            * 
            */
        constructor(map: Object);

        /**
            * 
            * @brief 创建一个 JavaSvript 消息处理器
            * @param hdlr JavaScript 处理器函数
            * 
            * 
            * 
            */
        constructor(hdlr: Function);

        /**
            * 
            * @brief 处理一个消息或对象
            * @param v 指定处理的消息或对象
            * @return 返回下一步的处理器
            * 
            * 
            * @async
            */
        invoke(v: object): Handler;
    }
    export interface HandlerEx extends Handler {

        /**
            * 
            * @brief 设置错误处理器
            * 
            * 使用方式：
            * ```JavaScript
            * hdlr.onerror({
            * "404": function(v)
            * {
            * ...
            * },
            * "500": new mq.Routing(...)
            * })
            * ```
            * @param hdlrs 指定不同的错误的处理器，key 是错误号，value 是处理器，可以是内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * 
            * 
            * 
            */
        onerror(hdlrs: Object): void;
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
    export = process;
}

/**
 *运行一个脚本
 *
 * @param {string} fname 指定要运行的脚本路径
 * @param {Array<any>} args 指定要运行的参数，此参数可在脚本内使用 argv 获取
 */
declare function run(fname: string, args: Array<any>): void;
//#endregion

interface PKeyCurve {
    "secp521r1", "brainpoolP512r1", "secp384r1", "brainpoolP384r1", "secp256r1", "secp256k1", "brainpoolP256r1", "secp224r1", "secp224k1", "secp192r1", "secp192k1"
}

//#region===================================================crypto==========================================================
declare module "crypto" {

    export var Cipher: Cipher;
    export var PKey: PKey;
    export var X509Cert: X509Cert;
    export var X509Crl: X509Crl;
    export var X509Req: X509Req;

    /**
		 * 
		 * @brief 指定对称加密算法 AES，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM
		 * 
		 * 
		 */
    export const AES = 1;

    /**
     * 
     * @brief 指定对称加密算法 CAMELLIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM
     * 
     * 
     */
    export const CAMELLIA = 2;

    /**
     * 
     * @brief 指定对称加密算法 DES，支持 64 位 key，分组密码工作模式支持 ECB, CBC
     * 
     * 
     */
    export const DES = 3;

    /**
     * 
     * @brief 指定对称加密算法 DES-EDE，支持 128 位 key，分组密码工作模式支持 ECB, CBC
     * 
     * 
     */
    export const DES_EDE = 4;

    /**
     * 
     * @brief 指定对称加密算法 DES-EDE3，支持 192 位 key，分组密码工作模式支持 ECB, CBC
     * 
     * 
     */
    export const DES_EDE3 = 5;

    /**
     * 
     * @brief 指定对称加密算法 BLOWFISH，支持 192 位 key，分组密码工作模式支持 ECB, CBC, CFB64, CTR
     * 
     * 
     */
    export const BLOWFISH = 6;

    /**
     * 
     * @brief 指定对称加密算法 ARC4，支持 40, 56, 64, 128 位 key
     * 
     * 
     */
    export const ARC4 = 7;

    /**
     * 
     * @brief 指定分组密码工作模式支持 ECB
     * 
     * 
     */
    export const ECB = 1;

    /**
     * 
     * @brief 指定分组密码工作模式支持 CBC
     * 
     * 
     */
    export const CBC = 2;

    /**
     * 
     * @brief 指定分组密码工作模式支持 CFB64
     * 
     * 
     */
    export const CFB64 = 3;

    /**
     * 
     * @brief 指定分组密码工作模式支持 CFB128
     * 
     * 
     */
    export const CFB128 = 4;

    /**
     * 
     * @brief 指定分组密码工作模式支持 OFB
     * 
     * 
     */
    export const OFB = 5;

    /**
     * 
     * @brief 指定分组密码工作模式支持 CTR
     * 
     * 
     */
    export const CTR = 6;

    /**
     * 
     * @brief 指定分组密码工作模式支持 GCM
     * 
     * 
     */
    export const GCM = 7;

    /**
     * 
     * @brief 指定流密码模式
     * 
     * 
     */
    export const STREAM = 8;

    /**
     * 
     * @brief 指定分组密码工作模式支持 CCM
     * 
     * 
     */
    export const CCM = 9;

    /**
     * 
     * @brief 指定填充模式为 PKCS7
     * 
     * 
     */
    export const PKCS7 = 0;

    /**
     * 
     * @brief 指定填充模式为 ONE_AND_ZEROS
     * 
     * 
     */
    export const ONE_AND_ZEROS = 1;

    /**
     * 
     * @brief 指定填充模式为 ZEROS_AND_LEN
     * 
     * 
     */
    export const ZEROS_AND_LEN = 2;

    /**
     * 
     * @brief 指定填充模式为 ZEROS
     * 
     * 
     */
    export const ZEROS = 3;

    /**
     * 
     * @brief 指定填充模式为 NOPADDING
     * 
     * 
     */
    export const NOPADDING = 4;


    interface Digest {

        /**
         * class prop 
         *
         * 
         * @brief 查询当前信息摘要算法的摘要字节数
         * 
         * @readonly
         * @type Integer
         */

        size: number



        /**
         * 
         * @brief 更新二进制摘要信息
         * @param data 二进制数据块
         * @return 返回信息摘要对象本身
         * 
         * 
         * 
         */
        update(data: Buffer): Digest;

        /**
         * 
         * @brief 计算并返回摘要
         * @param data 二进制数据块，此数据块将在计算前更新进摘要
         * @return 返回摘要的二进制数据
         * 
         * 
         * 
         */
        digest(data: Buffer): Buffer;

        /**
         * 
         * @brief 计算并返回摘要
         * @return 返回摘要的二进制数据
         * 
         * 
         * 
         */
        digest(): Buffer;
    }

    /**
		 * 
		 * @brief 根据给定的算法名称创建一个信息摘要对象
		 * @param algo 指定信息摘要对象的算法
		 * @return 返回信息摘要对象
		 * 
		 * 
		 * 
		 */
    export function createHash(algo: string): Digest;

    /**
     * 
     * @brief 根据给定的算法名称创建一个 hmac 信息摘要对象
     * @param algo 指定信息摘要对象的算法
     * @param key 二进制签名密钥
     * @return 返回信息摘要对象
     * 
     * 
     * 
     */
    export function createHmac(algo: string, key: Buffer): Digest;

    /**
     * 
     * @brief 加载一个 PEM/DER 格式的密钥文件
     * @param filename 密钥文件名
     * @param password 解密密码
     * @return 返回包含密钥的对象
     * 
     * 
     * 
     */
    export function loadPKey(filename: string, password?: string/** = ""*/): PKey;

    /**
     * 
     * @brief 加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用
     * 
     * loadFile 加载 mozilla 的 certdata,txt， 可于 http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用
     * @param filename 证书文件名
     * @return 返回包含证书的对象
     * 
     * 
     * 
     */
    export function loadCert(filename: string): X509Cert;

    /**
     * 
     * @brief 加载一个 PEM/DER 格式的撤销证书，可多次调用
     * @param filename 撤销证书文件名
     * @return 返回包含撤销证书的对象
     * 
     * 
     * 
     */
    export function loadCrl(filename: string): X509Crl;

    /**
     * 
     * @brief 加载一个 PEM/DER 格式的证书请求，可多次调用
     * @param filename 证书请求文件名
     * @return 返回包含请求证书的对象
     * 
     * 
     * 
     */
    export function loadReq(filename: string): X509Req;

    /**
     * 
     * @brief 生成指定尺寸的随机数，使用 havege 生成器
     * @param size 指定生成的随机数尺寸
     * @return 返回生成的随机数
     * 
     * 
     * @async
     */
    export function randomBytes(size: number): Buffer;

    /**
     * 
     * @brief 生成指定尺寸的低强度随机数，使用快速的算法
     * @param size 指定生成的随机数尺寸
     * @return 返回生成的随机数
     * 
     * 
     * @async
     */
    export function simpleRandomBytes(size: number): Buffer;

    /**
     * 
     * @brief 生成指定尺寸的伪随机数，使用 entropy 生成器
     * @param size 指定生成的随机数尺寸
     * @return 返回生成的随机数
     * 
     * 
     * @async
     */
    export function pseudoRandomBytes(size: number): Buffer;

    /**
     * 
     * @brief 生成给定数据的可视化字符图像
     * @param data 指定要展示的数据
     * @param title 指定字符图像的标题，多字节字符会导致宽度错误
     * @param size 字符图像尺寸
     * @return 返回生成的可视化字符串图像
     * 
     * 
     * 
     */
    export function randomArt(data: Buffer, title: string, size?: number/** = 8*/): string;

    /**
     * 
     * @brief 依据 pbkdf1 根据明文 password 生成要求的二进制钥匙
     * @param password 指定使用的密码
     * @param salt 指定 hmac 使用的 salt
     * @param iterations 指定迭代次数
     * @param size 指定钥匙尺寸
     * @param algo 指定要使用的 hash 算法，详见 hash 模块
     * @return 返回生成的二进制钥匙
     * 
     * 
     * @async
     */
    export function pbkdf1(password: Buffer, salt: Buffer, iterations: number, size: number, algo: number): Buffer;

    /**
     * 
     * @brief 依据 pbkdf1 根据明文 password 生成要求的二进制钥匙
     * @param password 指定使用的密码
     * @param salt 指定 hmac 使用的 salt
     * @param iterations 指定迭代次数
     * @param size 指定钥匙尺寸
     * @param algoName 指定要使用的 hash 算法，详见 hash 模块
     * @return 返回生成的二进制钥匙
     * 
     * 
     * @async
     */
    export function pbkdf1(password: Buffer, salt: Buffer, iterations: number, size: number, algoName: string): Buffer;

    /**
     * 
     * @brief 依据 rfc2898 根据明文 password 生成要求的二进制钥匙
     * @param password 指定使用的密码
     * @param salt 指定 hmac 使用的 salt
     * @param iterations 指定迭代次数
     * @param size 指定钥匙尺寸
     * @param algo 指定要使用的 hash 算法，详见 hash 模块
     * @return 返回生成的二进制钥匙
     * 
     * 
     * @async
     */
    export function pbkdf2(password: Buffer, salt: Buffer, iterations: number, size: number, algo: number): Buffer;

    /**
     * 
     * @brief 依据 rfc2898 根据明文 password 生成要求的二进制钥匙
     * @param password 指定使用的密码
     * @param salt 指定 hmac 使用的 salt
     * @param iterations 指定迭代次数
     * @param size 指定钥匙尺寸
     * @param algoName 指定要使用的 hash 算法，详见 hash 模块
     * @return 返回生成的二进制钥匙
     * 
     * 
     * @async
     */
    export function pbkdf2(password: Buffer, salt: Buffer, iterations: number, size: number, algoName: string): Buffer;

    interface X509Req extends FibJS.Object {

        /**
         * class prop 
         *
         * 
         * @brief 获取证书的主题可分辨名称
         * 
         * @readonly
         * @type String
         */

        subject: Readonly<string>;

        /**
         * class prop 
         *
         * 
         * @brief 获取证书的公钥
         * 
         * @readonly
         * @type PKey
         */

        publicKey: Readonly<PKey>;

        /**
         * 
         */
        new();

        /**
         * 
         * @brief X509Req 构造函数，根据给定的信息创建一个证书请求
         * 
         * @param subject 证书的主题可分辨名称
         * @param key 证书的公钥
         * @param hash 证书摘要算法，缺省为 hash.SHA1
         * 
         * 
         * 
         */
        new(subject: string, key: PKey, hash?: number/** = undefined*/);

        /**
         * 
         * @brief 加载一个 DER 格式的证书请求
         * @param derReq DER 格式的证书请求
         * 
         * 
         * 
         */
        load(derReq: Buffer): void;

        /**
         * 
         * @brief 加载一个 PEM 格式的证书请求
         * @param pemReq PEM 格式的证书请求
         * 
         * 
         * 
         */
        load(pemReq: string): void;

        /**
         * 
         * @brief 加载一个 PEM/DER 格式的证书请求，可多次调用
         * @param filename 证书请求文件名
         * 
         * 
         * 
         */
        loadFile(filename: string): void;

        /**
         * 
         * @brief 返回当前证书请求的 PEM 格式编码
         * @return 当前证书请求的 PEM 格式编码
         * 
         * 
         * 
         */
        exportPem(): string;

        /**
         * 
         * @brief 返回当前证书请求的 DER 格式编码
         * @return 当前证书请求的 DER 格式编码
         * 
         * 
         * 
         */
        exportDer(): Buffer;

        /**
         * 
         * @brief 签名当前证书请求为正式证书
         * 
         * opts 接收的字段如下：
         * ```JavaScript
         * {
         * ca: false,      // 证书为 ca，缺省为 false
         * pathlen: -1,    // 证书深度，缺省为 -1
         * notBefore: "",  // 证书生效时间，缺省为当前时间
         * notAfter: "",   // 证书失效时间，缺省为 notBefore 后一年
         * usage: "",      // 证书使用范围，接收：digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign
         * type: ""        // 证书 Netscape 证书类型，接收：client, server, email, objsign, reserved, sslCA, emailCA, objCA
         * }
         * ```
         * @param issuer 签名机构的可分辨名称
         * @param key 签名机构的私钥
         * @param opts 其他可选参数
         * @return 返回签名后的正式证书
         * 
         * 
         * @async
         */
        sign(issuer: string, key: PKey, opts?: {
            ca: boolean,
            pathlen: number,
            notBefore: string,
            notAfter: string,
            usage: string,
            type: string
        }): X509Cert;
    }

    interface X509Crl extends FibJS.Object {
        new(): X509Crl;

        /**
	 * 
	 * @brief 加载一个 DER 格式的撤销证书，可多次调用
	 * @param derCrl DER 格式的撤销证书
	 * 
	 * 
	 * 
	 */
        load(derCrl: Buffer): void;

        /**
         * 
         * @brief 加载一个 PEM 格式的撤销证书，可多次调用
         * @param pemCrl PEM 格式的撤销证书
         * 
         * 
         * 
         */
        load(pemCrl: string): void;

        /**
         * 
         * @brief 加载一个 PEM/DER 格式的撤销证书，可多次调用
         * @param filename 撤销证书文件名
         * 
         * 
         * 
         */
        loadFile(filename: string): void;

        /**
         * 
         * @brief 导出已经加载的撤销证书
         * @return 以数组方式导出撤销证书链
         * 
         * 
         * 
         */
        dump(): any[];

        /**
         * 
         * @brief 清空已经加载的撤销证书
         * 
         * 
         * 
         */
        clear(): void;
    }

    interface X509Cert extends FibJS.Object {
        new(): X509Cert;
        /**
         * class prop 
         *
         * 
         * @brief 获取证书的版本
         * 
         * @readonly
         * @type Integer
         */
        version: Readonly<number>;

        /**
         *
         *
         * @type {string}
         * @memberof X509Cert
         */
        serial: Readonly<string>

        /**
         * class prop 
         *
         * 
         * @brief 获取证书颁发者的可分辨名称
         * 
         * @readonly
         * @type String
         */

        issuer: Readonly<string>

        /**
         * class prop 
         *
         * 
         * @brief 获取证书的主题可分辨名称
         * 
         * @readonly
         * @type String
         */

        subject: Readonly<string>

        /**
         * class prop 
         *
         * 
         * @brief 获取证书的生效时间
         * 
         * @readonly
         * @type Date
         */

        notBefore: Readonly<Date>

        /**
         * class prop 
         *
         * 
         * @brief 获取证书的到期时间
         * 
         * @readonly
         * @type Date
         */

        notAfter: Readonly<Date>

        /**
         * class prop 
         *
         * 
         * @brief 获取证书是否是 ca 证书
         * 
         * @readonly
         * @type Boolean
         */

        ca: Readonly<boolean>

        /**
         * class prop 
         *
         * 
         * @brief 获取证书的 pathlen
         * 
         * @readonly
         * @type Integer
         */

        pathlen: Readonly<number>

        /**
         * class prop 
         *
         * 
         * @brief 获取证书的使用范围
         * 
         * 结果为全部或部分以下内容：digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign
         * 
         * 
         * @readonly
         * @type String
         */

        usage: Readonly<string>

        /**
         * class prop 
         *
         * 
         * @brief 获取证书的 Netscape 证书类型
         * 
         * 结果为全部或部分以下内容：client, server, email, objsign, reserved, sslCA, emailCA, objCA
         * 
         * 
         * @readonly
         * @type String
         */

        type: Readonly<string>

        /**
         * class prop 
         *
         * 
         * @brief 获取证书的公钥
         * 
         * @readonly
         * @type PKey
         */

        publicKey: Readonly<PKey>

        /**
         * class prop 
         *
         * 
         * @brief 获取证书链中得下一个证书
         * 
         * @readonly
         * @type X509Cert
         */

        next: Readonly<X509Cert>;

        /**
         * 
         * @brief 加载一个 DER 格式的证书，可多次调用
         * @param derCert DER 格式的证书
         * 
         * 
         * 
         */
        load(derCert: Buffer): void;

        /**
         * 
         * @brief 加载一个 CRT/PEM/TXT 格式的证书，可多次调用
         * 
         * load 加载 mozilla 的 certdata,txt， 可于 http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用
         * @param txtCert PEM 格式的证书
         * 
         * 
         * 
         */
        load(txtCert: string): void;

        /**
         * 
         * @brief 加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用
         * 
         * loadFile 加载 mozilla 的 certdata,txt， 可于 http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用
         * @param filename 证书文件名
         * 
         * 
         * 
         */
        loadFile(filename: string): void;

        /**
         * 
         * @brief 加载自带的缺省根证书
         * 此证书内容源自：http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt
         * 
         * 
         */
        loadRootCerts(): void;

        /**
         * 
         * @brief 使用当前证书链验证给定的证书
         * @param cert 给定需要验证的证书
         * @return 如果验证成功则返回 True
         * 
         * 
         * @async
         */
        verify(cert: X509Cert): boolean;

        /**
         * 
         * @brief 导出已经加载的证书
         * @return 以数组方式导出证书链
         * 
         * 
         * 
         */
        dump(): any[];

        /**
         * 
         * @brief 清空已经加载的证书
         * 
         * 
         */
        clear(): void;
    }

    /**
     *@example
     * RSA 私钥：
     *   {
     *       "kty": "RSA",
     *       "n": "0m5lvKpWqy9JS7tV2HIPqHCYHLquSuxIC3F8strIQLJKO3rZmTT96KTnhsOfBO7Y1bI7mnT0PB3_vcHd9ekWMEoZJQw7MuB8KeM_Wn54-elJr5DNLk5bMppSGxX7ZnumiXGG51_X3Yp-_EbGtDG80GxXXix7Mucyo7K25uE0uW8=",
     *       "e": "AQAB",
     *       "d": "agN2O9NxMHL1MTMi75WfL9Pxvl-KWXKqZSF6mjzAsF9iKI8euyHIXYFepzU8kual1RsjDhCnzvWqFvZplW8lXqrHf_P-rS_9Y4gBUw6pjnI_DnFIRwWHRvrUHHSCfWOdTCIKdOTkgLZuGFuhEY3RMIW0WSYejjLtftwy0RVxAzk=",
     *       "p": "6a4G1qmfwWmn1biigN7IVFlkbLf9oVe6g7rOmHxI-hn1GRxKDSVuAUrmR1IhuAnca9M0y7SD-7TUs6wjOxWxaw==",
     *       "q": "5ofkxFKdPBD0CQHMb9q13AMHUVe0rJ-hSjqqIBrmqApUOneyAcMV76M0QyIQnI2p3POa4Qu_7XChDwRVl7LlDQ==",
     *       "dp": "2mXGiGwCHl8j-FBWuID-1C6z-BRB3MBEVoeKPOOzxOPruatB3mWEGXsqG7A8SWgV9URxTI2K6P3J6Z7RUpBkvw==",
     *       "dq": "oagn5vfb5NQqnOpS9xkSsD67cfIj821ZSFlNFYhnuOzNVda7z_qCtnHm4zDPH0lEFXoKYMfBhfqWJpaugttjPQ==",
     *       "qi": "dqEQgxNmOVFrF4s776hTqeC6oEDila8EvpVb2F2ZvwAOLjCQ66OiAZK1BiYGHqUy0NeqNmtlsLSuBEZQZvqZwg=="
     *     }
     * 
     * RSA 公钥：
     *  {
     *       "kty": "RSA",
     *       "n": "0m5lvKpWqy9JS7tV2HIPqHCYHLquSuxIC3F8strIQLJKO3rZmTT96KTnhsOfBO7Y1bI7mnT0PB3_vcHd9ekWMEoZJQw7MuB8KeM_Wn54-elJr5DNLk5bMppSGxX7ZnumiXGG51_X3Yp-_EbGtDG80GxXXix7Mucyo7K25uE0uW8=",
     *       "e": "AQAB"
     *   }
     * 
     * EC 私钥：
     * {
     *       "kty": "EC",
     *       "crv": "P-521",
     *       "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
     *       "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU",
     *       "d": "AfkIbUHXfW41njdpoKuqqKludcoLJS8D_oMEwkj-GVaXFNKccIoF5iKGu2c69kNDjo83R_7wyGlfRczsklkik1ST"
     *   }
     * 
     * EC 公钥：
     * {
     *       "kty": "EC",
     *       "crv": "P-521",
     *       "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
     *       "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU"
     *   }
     *
     * @interface PKey
     */
    interface PKey {
        new(): PKey;
        /**
         * @param DerKey DER 格式的密钥;
         * @param password 解密密码
         */
        new(DerKey: Buffer, password: string): PKey;

        /**
         * 通过 PEM 格式的密钥构造 PKey
         * @param PEM 格式的密钥
         * @param password, 解密密码
         */
        new(pemKey: string, password: string): PKey;

        /**
         * 
         * @param json 
         * @example
         *
         */
        new(jsonKey: Object): PKey;

        /**
         *返回当前算法名称
         *
         * @type {Readonly<string>}
         * @memberof PKey
         */
        name: Readonly<string>;

        /**
         *返回当前密钥的公钥
         *
         * @type {Readonly<PKey>}
         * @memberof PKey
         */
        publicKey: Readonly<PKey>;

        /**
         *生成一个 RSA 私钥
         * 
         * @param {Integer} size 指定 RSA 密钥长度，bit 为单位
         * @memberof PKey
         */
        genRsaKey(size: Integer): Value;

        /**
         *生成一个 EC 私钥
         *
         * @param {string} [cure]  指定预置椭圆曲线
         * @memberof PKey
         */
        genEcKey(cure?: keyof PKeyCurve): Value;

        /**
         *查询当前密钥是否为私钥
         *
         * @returns {boolean} , 为 True 表示为私钥
         * @memberof PKey
         */
        isPrivate(): boolean;

        /**
         *复制当前密钥
         *
         * @returns {PKey} 当前密钥的复制对象
         * @memberof PKey
         */
        clone(): PKey;

        /**
         *加载一个 DER 格式的密钥
         *
         * @param {Buffer} DerKey DER 格式的密钥
         * @param {string} password  解密密码
         * @memberof PKey
         */
        importKey(DerKey: Buffer, password?: string): void;

        /**
         *加载一个 PEM 格式的密钥
         *
         * @param {string} pemKey PEM 格式的密钥
         * @param {string} [password] 解密密码
         * @memberof PKey
         */
        importKey(pemKey: string, password?: string): void;

        /**
       * 
       * @brief 加载一个 JSON 格式的密钥
       * 
       * jsonKey 的格式支持以下四种，RSA 私钥：
       * @example
       * ```JavaScript
       * {
       * "kty": "RSA",
       * "n": "0m5lvKpWqy9JS7tV2HIPqHCYHLquSuxIC3F8strIQLJKO3rZmTT96KTnhsOfBO7Y1bI7mnT0PB3_vcHd9ekWMEoZJQw7MuB8KeM_Wn54-elJr5DNLk5bMppSGxX7ZnumiXGG51_X3Yp-_EbGtDG80GxXXix7Mucyo7K25uE0uW8=",
       * "e": "AQAB",
       * "d": "agN2O9NxMHL1MTMi75WfL9Pxvl-KWXKqZSF6mjzAsF9iKI8euyHIXYFepzU8kual1RsjDhCnzvWqFvZplW8lXqrHf_P-rS_9Y4gBUw6pjnI_DnFIRwWHRvrUHHSCfWOdTCIKdOTkgLZuGFuhEY3RMIW0WSYejjLtftwy0RVxAzk=",
       * "p": "6a4G1qmfwWmn1biigN7IVFlkbLf9oVe6g7rOmHxI-hn1GRxKDSVuAUrmR1IhuAnca9M0y7SD-7TUs6wjOxWxaw==",
       * "q": "5ofkxFKdPBD0CQHMb9q13AMHUVe0rJ-hSjqqIBrmqApUOneyAcMV76M0QyIQnI2p3POa4Qu_7XChDwRVl7LlDQ==",
       * "dp": "2mXGiGwCHl8j-FBWuID-1C6z-BRB3MBEVoeKPOOzxOPruatB3mWEGXsqG7A8SWgV9URxTI2K6P3J6Z7RUpBkvw==",
       * "dq": "oagn5vfb5NQqnOpS9xkSsD67cfIj821ZSFlNFYhnuOzNVda7z_qCtnHm4zDPH0lEFXoKYMfBhfqWJpaugttjPQ==",
       * "qi": "dqEQgxNmOVFrF4s776hTqeC6oEDila8EvpVb2F2ZvwAOLjCQ66OiAZK1BiYGHqUy0NeqNmtlsLSuBEZQZvqZwg=="
       * }
       * ```
       * RSA 公钥：
       * ```JavaScript
       * {
       * "kty": "RSA",
       * "n": "0m5lvKpWqy9JS7tV2HIPqHCYHLquSuxIC3F8strIQLJKO3rZmTT96KTnhsOfBO7Y1bI7mnT0PB3_vcHd9ekWMEoZJQw7MuB8KeM_Wn54-elJr5DNLk5bMppSGxX7ZnumiXGG51_X3Yp-_EbGtDG80GxXXix7Mucyo7K25uE0uW8=",
       * "e": "AQAB"
       * }
       * ```
       * EC 私钥：
       * ```JavaScript
       * {
       * "kty": "EC",
       * "crv": "P-521",
       * "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
       * "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU",
       * "d": "AfkIbUHXfW41njdpoKuqqKludcoLJS8D_oMEwkj-GVaXFNKccIoF5iKGu2c69kNDjo83R_7wyGlfRczsklkik1ST"
       * }
       * ```
       * EC 公钥：
       * ```JavaScript
       * {
       * "kty": "EC",
       * "crv": "P-521",
       * "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
       * "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU"
       * }
       * ```
       * @param jsonKey JSON 格式的密钥
       * 
       * 
       * 
       */
        importKey(jsonKey: Object): void;

        /**
         *加载一个 PEM/DER 格式的密钥文件
         *
         * @param {string} filename 密钥文件名
         * @param {string} [password] 解密密码
         * @memberof PKey
         */
        importFile(filename: string, password?: string): void;

        /**
         * 
         * @brief 返回当前 key 的 PEM 格式编码
         * @return 当前 key 的 PEM 格式编码
         * 
         * 
         * 
         */
        exportPem(): string;

        /**
         * 
         * @brief 返回当前 key 的 DER 格式编码
         * @return 当前 key 的 DER 格式编码
         * 
         * 
         * 
         */
        exportDer(): Buffer;

        /**
         * 
         * @brief 返回当前 key 的 DER 格式编码
         * @return 当前 key 的 DER 格式编码
         * 
         * 
         * 
         */
        exportJson(): Object;

        /**
         * 
         * @brief 使用当前算法密码公钥加密数据
         * @param data 指定要加密的数据
         * @return 返回加密后的数据
         * 
         * 
         * @async
         */
        encrypt(data: Buffer): Buffer;

        /**
         * 
         * @brief 使用当前算法密码私钥解密数据
         * @param data 指定要解密的数据
         * @return 返回解密后的数据
         * 
         * 
         * @async
         */
        decrypt(data: Buffer): Buffer;

        /**
         * 
         * @brief 使用当前算法密码私钥签名数据
         * @param data 指定要签名的数据
         * @param alg 指定要签名的算法, 默认0. 支持算法: 0=NONE,1=MD2,2=MD4,3=MD5,4=SHA1,5=SHA224,6=SHA256,7=SHA384,8=SHA512,9=RIPEMD160
         * @return 返回签名后的数据
         * 
         * 
         * @async
         */
        sign(data: Buffer, alg?: number/** = 0*/): Buffer;

        /**
         * 
         * @brief 使用当前算法密码公钥验证数据
         * @param data 指定要验证的数据
         * @param sign 指定要验证的签名
         * @param alg 指定要签名的算法, 默认0. 支持算法: 0=NONE,1=MD2,2=MD4,3=MD5,4=SHA1,5=SHA224,6=SHA256,7=SHA384,8=SHA512,9=RIPEMD160
         * @return 返回验证后的结果
         * 
         * 
         * @async
         */
        verify(data: Buffer, sign: Buffer, alg?: number/** = 0*/): boolean;
    }

    /**
     * 对称加密算法对象
     */
    interface Cipher extends FibJS.Object {
        /**
         * Cipher 构造函数，仅用于 ARC4 初始化
         * @param {Integer} provider 指定加密算法
         * @param {Buffer} key 指定加密解密密码
         */
        new(provider: Integer, key: Buffer): Cipher;
        /**
         * Cipher 构造函数
         * @param {Integer} provider 指定加密算法
         * @param {Integer} mode 指定分组密码工作模式
         * @param {Buffer} key 指定加密解密密码
         */
        new(provider: Integer, mode: Integer, key: Buffer): Cipher;
        /**
        * Cipher 构造函数
        * @param {Integer} provider 指定加密算法
        * @param {Integer} mode 指定分组密码工作模式
        * @param {Buffer} key 指定加密解密密码
        * @param {Buffer} iv 指定初始向量
        */
        new(provider: Integer, mode: Integer, key: Buffer, iv: Buffer): Cipher;

        /**
         *返回当前算法名称
         *
         * @type {Readonly<string>}
         * @memberof Cipher
         */
        name: Readonly<string>;

        /**
         *  返回当前算法密码长度，以位为单位
         *
         * @type {Readonly<Integer>}
         * @memberof Cipher
         */
        keySize: Readonly<Integer>;

        /**
         *返回当前算法初始向量长度，以字节为单位
         *
         * @type {Readonly<Integer>}
         * @memberof Cipher
         */
        ivSize: Readonly<Integer>;

        /**
         *返回当前算法数据块长度，以字节为单位
         *
         * @type {Readonly<Integer>}
         * @memberof Cipher
         */
        blockSize: Readonly<Integer>;

        /**
         *使用填充模式
         *
         * @param {Integer} mode 指定填充模式，缺省为 PADDING_PKCS7
         * @memberof Cipher
         */
        paddingMode(mode: Integer): void;

        /**
         *使用当前算法密码加密数据
         *
         * @param {Buffer} data 指定要加密的数据
         * @returns 返回加密后的数据
         * @memberof Cipher
         */
        encrypt(data: Buffer): Buffer;

        /**
         *使用当前算法密码解密数据
         *
         * @param {Buffer} data 指定要解密的数据
         * @returns {Buffer} , 返回解密后的数据
         * @memberof Cipher
         */
        decrypt(data: Buffer): Buffer;
    }
}
//#endregion

//#region======================================================db=========================================================
declare module "db" {

    interface DbConnection {
        /**
 * class prop 
 *
 * 
 * @brief 查询当前连接数据库类型
 * 
 * @readonly
 * @type String
 */

        type: Readonly<string>



        /**
         * 
         * @brief 关闭当前数据库连接
         * 
         * @async
         */
        close(): void;

        /**
         * 
         * @brief 在当前数据库连接上启动一个事务
         * 
         * @async
         */
        begin(): void;

        /**
         * 
         * @brief 提交当前数据库连接上的事务
         * 
         * @async
         */
        commit(): void;

        /**
         * 
         * @brief 回滚当前数据库连接上的事务
         * 
         * @async
         */
        rollback(): void;

        /**
         * 
         * @brief 进入事务执行一个函数，并根据函数执行情况提交或者回滚
         * func 执行有三种结果：
         * * 函数正常返回，包括运行结束和主动 return，此时事务将自动提交
         * * 函数返回 false，此时事务将回滚
         * * 函数运行错误，事务自动回滚
         * 
         * @param func 以事务方式执行的函数
         * @return 返回事务是否提交，正常 commit 时返回 true, rollback 时返回 false，如果事务出错则抛出错误
         * 
         * 
         * 
         */
        trans(func: Function): boolean;

        /**
         * 
         * @brief 执行一个 sql 命令，并返回执行结果，可根据参数格式化字符串
         * 
         * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
         * @param args 可选参数列表
         * @return 返回包含结果记录的数组，如果请求是 UPDATE 或者 INSERT，返回结果还会包含 affected 和 insertId，mssql 不支持 insertId。
         * 
         * 
         * @async
         */
        execute(sql: string, ...args: any[]): any[];

        /**
         * 
         * @brief 格式化一个 sql 命令，并返回格式化结果
         * 
         * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
         * @param args 可选参数列表
         * @return 返回格式化之后的 sql 命令
         * 
         * 
         * 
         */
        format(sql: string, ...args: any[]): string;
    }

    interface MySQL extends DbConnection {
        /**
	 * class prop 
	 *
	 * 
	 * @brief 数据库连接接收缓存尺寸
	 * 
	 * 
	 * @type Integer
	 */

        rxBufferSize: number

        /**
         * class prop 
         *
         * 
         * @brief 数据库连接发送缓存尺寸
         * 
         * 
         * @type Integer
         */

        txBufferSize: number



        /**
         * 
         * @brief 选择当前数据库连接的缺省数据库
         * @param dbName 指定数据库名
         * 
         * 
         * @async
         */
        use(dbName: string): void;
    }

    interface MSSQL extends DbConnection {

        /**
         * 
         * @brief 选择当前数据库连接的缺省数据库
         * @param dbName 指定数据库名
         * 
         * 
         * @async
         */
        use(dbName: string): void;
    }

    interface SQLite extends DbConnection {
        /**
	 * class prop 
	 *
	 * 
	 * @brief 当前数据库文件名
	 * 
	 * @readonly
	 * @type String
	 */

        fileName: Readonly<string>

        /**
         * class prop 
         *
         * 
         * @brief 查询和设置数据库超时时间，以毫秒为单位
         * 
         * 
         * @type Integer
         */

        timeout: number



        /**
         * 
         * @brief 备份当前数据库到新文件
         * @param fileName 指定备份的数据库文件名
         * 
         * @async
         */
        backup(fileName: string): void;
    }

    interface LevelDB {


        /**
         * 
         * @brief 检查数据库内是否存在指定键值的数据
         * @param key 指定要检查的键值
         * @return 返回键值是否存在
         * 
         * 
         * @async
         */
        has(key: Buffer): boolean;

        /**
         * 
         * @brief 查询指定键值的值
         * @param key 指定要查询的键值
         * @return 返回键值所对应的值，若不存在，则返回 null
         * 
         * 
         * @async
         */
        get(key: Buffer): Buffer;

        /**
         * 
         * @brief 查询一组指定键值的值
         * @param keys 指定要查询的键值数组
         * @return 返回包含键值得数组
         * 
         * 
         * 
         */
        mget(keys: any[]): any[];

        /**
         * 
         * @brief 设定一个键值数据，键值不存在则插入新数据
         * @param key 指定要设定的键值
         * @param value 指定要设定的数据
         * 
         * 
         * @async
         */
        set(key: Buffer, value: Buffer): void;

        /**
         * 
         * @brief 设定一组键值数据，键值不存在则插入新数据
         * @param map 指定要设定的键值数据字典
         * 
         * 
         * 
         */
        mset(map: Object): void;

        /**
         * 
         * @brief 删除一组指定键值的值
         * @param keys 指定要删除的键值数组
         * 
         * 
         * 
         */
        mremove(keys: any[]): void;

        /**
         * 
         * @brief 删除指定键值的全部值
         * @param key 指定要删除的键值
         * 
         * 
         * @async
         */
        remove(key: Buffer): void;

        /**
         * 
         * @brief 枚举数据库中所有的键值对
         * 
         * 回调函数有两个参数，(value, key)
         * 
         * ```JavaScript
         * var db = require("db");
         * var test = new db.openLevelDB("test.db");
         * 
         * test.forEach(function(value, key){
         * ...
         * });
         * ```
         * @param func 枚举回调函数
         * 
         * 
         * 
         */
        forEach(func: Function): void;

        /**
         * 
         * @brief 枚举数据库中键值在 from 和 to 之间的键值对
         * 
         * 回调函数有两个参数，(value, key)
         * 
         * ```JavaScript
         * var db = require("db");
         * var test = new db.openLevelDB("test.db");
         * 
         * test.between("aaa", "bbb", function(value, key){
         * ...
         * });
         * ```
         * @param from 枚举的最小键值，枚举时包含此键值
         * @param to 枚举的最大键值，枚举时不包含此键值
         * @param func 枚举回调函数
         * 
         * 
         * 
         */
        between(from: Buffer, to: Buffer, func: Function): void;

        /**
         * 
         * @brief 在当前数据库上开启一个事务
         * @return 返回一个开启的事务对象
         * 
         * 
         */
        begin(): LevelDB;

        /**
         * 
         * @brief 提交当前事务
         * 
         * 
         */
        commit(): void;

        /**
         * 
         * @brief 关闭当前数据库连接或事务
         * 
         * @async
         */
        close(): void;
    }

    interface MongoCursor {
        /** 
        * @brief 指定返回结果时跳过的记录数
        * @param num 记录数
        * @return 返回游标对象本身便于链式调用
        * 
        * 
        * @async
        */
        skip(num: number): MongoCursor;

        /**
         * 
         * @brief 指定返回结果的最大记录数
         * @param size 记录数
         * @return 返回游标对象本身便于链式调用
         * 
         * 
         * @async
         */
        limit(size: number): MongoCursor;

        /**
         * 
         * @brief 设定返回结果的排序
         * @param opts 指定排序条件
         * @return 返回游标对象本身便于链式调用
         * 
         * 
         * 
         */
        sort(opts: Object): MongoCursor;

        /**
         * 
         * @brief 查询当前游标是否有下一条记录
         * @return 有记录则返回 true
         * 
         * 
         * 
         */
        hasNext(): boolean;

        /**
         * 
         * @brief 返回当前游标的下一条记录
         * @return 记录对象，无记录则返回 null
         * 
         * 
         * 
         */
        next(): Object;

        /**
         * 
         * @brief 查询游标的记录总数
         * @param applySkipLimit 指定是否查询 skip 和 limit 后的记录数，缺省为 false，查询全部记录数
         * @return 返回记录总数
         * 
         * 
         * 
         */
        count(applySkipLimit?: boolean/** = false*/): number;

        /**
         * 
         * @brief 查询游标的记录总数，相当于 count(true)
         * @return 返回记录总数
         * 
         * 
         * 
         */
        size(): number;

        /**
         * 
         * @brief 遍历全部记录并回调处理函数
         * @param func 指定处理函数
         * 
         * 
         * 
         */
        forEach(func: Function): void;

        /**
         * 
         * @brief 遍历处理全部记录，并返回处理结果
         * @param func 指定处理函数
         * @return 返回处理结果数组
         * 
         * 
         * 
         */
        map(func: Function): any[];

        /**
         * 
         * @brief 返回当前游标全部记录的数组
         * @return 返回包含全部数据的 Javascript 数组
         * 
         * 
         * 
         */
        toArray(): any[];

        /**
         * 
         * @brief 修改 mongodb 服务器缺省索引策略，使用指定的索引进行查询
         * @param opts 指定强制使用的索引
         * @return 返回游标对象本身便于链式调用
         * 
         * 
         * 
         */
        hint(opts: Object): MongoCursor;
    }

    interface MongoCollection {
        /**
	 * 
	 * @brief 根据给定的查询条件和返回字段设定，建立游标对象
	 * @param query 指定查询条件的对象
	 * @param projection 指定返回字段的对象
	 * @return 返回游标对象
	 * 
	 * 
	 * 
	 */
        find(query?: Object/** = v8::Object::New(isolate)*/, projection?: Object/** = v8::Object::New(isolate)*/): MongoCursor;

        /**
         * 
         * @brief 根据给定的查询条件和返回字段设定，查询一条结果
         * @param query 指定查询条件的对象
         * @param projection 指定返回字段的对象
         * @return 返回第一条结果
         * 
         * 
         * 
         */
        findOne(query?: Object/** = v8::Object::New(isolate)*/, projection?: Object/** = v8::Object::New(isolate)*/): Object;

        /**
         * 
         * @brief 查询并修改
         * @param query 指定查询条件，修改数据
         * @return 返回修改前的结果及其他信息
         * 
         * 
         * 
         */
        findAndModify(query: Object): Object;

        /**
         * 
         * @brief 插入一组数据
         * @param documents 指定要插入的数据数组
         * 
         * 
         * 
         */
        insert(documents: any[]): void;

        /**
         * 
         * @brief 插入一条数据
         * @param document 指定要插入的数据
         * 
         * 
         * 
         */
        insert(document: Object): void;

        /**
         * 
         * @brief 保存一条数据，若数据包含 _id 字段，则为更新，否则为插入
         * @param document 指定要保存的数据
         * 
         * 
         * 
         */
        save(document: Object): void;

        /**
         * 
         * @brief 根据给定的查询条件更新数据
         * @param query 指定查询条件的对象
         * @param document 指定要更新的数据
         * @param upsert 数据不存在时，插入一条新数据，缺省为 false，不插入
         * @param multi 当符合条件的数据多于一条时，更新所有数据，缺省为 false，只更新第一条
         * 
         * 
         * 
         */
        update(query: Object, document: Object, upsert?: boolean/** = false*/, multi?: boolean/** = false*/): void;

        /**
         * 
         * @brief 根据给定的查询条件更新数据
         * @param query 指定查询条件的对象
         * @param document 指定要更新的数据
         * @param options 以对象字段传递的 upsert 和 multi 选项
         * 
         * 
         * 
         */
        update(query: Object, document: Object, options: Object): void;

        /**
         * 
         * @brief 根据给定的查询条件删除数据
         * @param query 指定查询条件的对象
         * 
         * 
         * 
         */
        remove(query: Object): void;

        /**
         * 
         * @brief 执行数据库命令
         * @param cmd 给定命令对象
         * @return 返回命令返回结果
         * 
         * 
         * 
         */
        runCommand(cmd: Object): Object;

        /**
         * 
         * @brief 执行数据库命令
         * @param cmd 给定命令名称
         * @param arg 给定命令参数选项
         * @return 返回命令返回结果
         * 
         * 
         * 
         */
        runCommand(cmd: string, arg?: Object/** = v8::Object::New(isolate)*/): Object;

        /**
         * 
         * @brief 删除当前集合
         * 
         * 
         */
        drop(): void;

        /**
         * 
         * @brief 在当前集合上创建索引
         * @param keys 给定索引字段、顺序和方向
         * @param options 给定索引的选项，唯一索引等
         * 
         * 
         * 
         */
        ensureIndex(keys: Object, options?: Object/** = v8::Object::New(isolate)*/): void;

        /**
         * 
         * @brief 重建当前集合的索引
         * @return 返回命令执行结果
         * 
         * 
         * 
         */
        reIndex(): Object;

        /**
         * 
         * @brief 删除当前集合指定名称的索引
         * @param name 给定要删除的索引名称
         * @return 返回命令执行结果
         * 
         * 
         * 
         */
        dropIndex(name: string): Object;

        /**
         * 
         * @brief 删除当前集合全部索引
         * @return 返回命令执行结果
         * 
         * 
         * 
         */
        dropIndexes(): Object;

        /**
         * 
         * @brief 查询当前集合全部索引
         * @return 返回包含索引的结果集
         * 
         * 
         * 
         */
        getIndexes(): MongoCursor;

        /**
         * 
         * @brief 获取当前集合子命名空间的集合对象
         * @param name 子命名空间名称
         * @return 返回新集合对象
         * 
         * 
         * 
         */
        getCollection(name: string): MongoCollection;
    }

    interface MongoID extends FibJS.Object { }

    interface MongoDB extends DbConnection {


        /**
         * 
         * @brief 获取指定集合访问对象
         * @param name 指定集合的名称
         * @return 返回指定的集合对象
         * 
         * 
         * 
         */
        getCollection(name: string): MongoCollection;

        /**
         * 
         * @brief 指定一个 MongoDB 数据库命令
         * @param cmd 指定命令和参数的字典对象
         * @return 返回命令执行结果
         * 
         * 
         * 
         */
        runCommand(cmd: Object): Object;

        /**
         * 
         * @brief 指定一个简单的 MongoDB 数据库命令
         * @param cmd 指定命令名
         * @param arg 指定命令参数
         * @return 返回命令执行结果
         * 
         * 
         * 
         */
        runCommand(cmd: string, arg: any): Object;

        /**
         * 
         * @brief 生成一个 mongodb _objectid 对象
         * @param hexStr 初始化 16 进制字符串，缺省生成新的 id
         * @return 新 _objectid 对象
         * 
         * 
         * 
         */
        oid(hexStr?: string/** = ""*/): MongoID;

        /**
         * 
         * @brief 关闭当前数据库连接
         * 
         * @async
         */
        close(): void;
    }

    interface RedisSortedSet {
        /**
	 * 
	 * @brief 将一个或多个 member 元素及其 score 值加入到有序集当中
	 * @param sms 指定要添加的 member/score 对象
	 * @return 被成功添加的新成员的数量，不包括那些被更新的、已经存在的成员
	 * 
	 * 
	 */
        add(sms: Object): number;

        /**
         * 
         * @brief 将一个或多个 member 元素及其 score 值加入到有序集当中
         * @param sms 指定要添加的 member/score 列表
         * @return 被成功添加的新成员的数量，不包括那些被更新的、已经存在的成员
         * 
         * 
         */
        add(...sms: any[]): number;

        /**
         * 
         * @brief 返回有序集中，成员 member 的 score 值
         * @param member 指定要查询的 member
         * @return member 成员的 score 值，以字符串形式表示
         * 
         * 
         */
        score(member: Buffer): Buffer;

        /**
         * 
         * @brief 为有序集的成员 member 的 score 值加上增量 num
         * @param member 指定要修改的 member
         * @param num 指定要加上的数值
         * @return member 成员的新 score 值，以字符串形式表示
         * 
         * 
         */
        incr(member: Buffer, num?: number/** = 1*/): Buffer;

        /**
         * 
         * @brief 移除有序集中的一个或多个 member 元素
         * @param members 指定要移除的元素数组
         * @return 被成功移除的元素的数量，不包括被忽略的元素
         * 
         * 
         */
        remove(members: any[]): number;

        /**
         * 
         * @brief 移除有序集中的一个或多个 member 元素
         * @param members 指定要移除的元素列表
         * @return 被成功移除的元素的数量，不包括被忽略的元素
         * 
         * 
         */
        remove(...members: any[]): number;

        /**
         * 
         * @brief 返回有序集中元素的数量
         * @return 返回有序集的长度
         * 
         * 
         */
        len(): number;

        /**
         * 
         * @brief 返回有序集中， score 值在 min 和 max 之间(默认包括 score 值等于 min 或 max )的成员的数量
         * @param min 指定统计的最小 score
         * @param max 指定统计的最大 score
         * @return score 值在 min 和 max 之间的成员的数量
         * 
         * 
         */
        count(min: number, max: number): number;

        /**
         * 
         * @brief 返回有序集中，指定区间内的成员，成员的位置按 score 值递增(从小到大)来排序
         * @param start 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
         * @param stop 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素
         * @param withScores 指定是否在结果中包含 score
         * @return 指定区间内，带有 score 值(可选)的有序集成员的列表
         * 
         * 
         */
        range(start: number, stop: number, withScores?: boolean/** = false*/): any[];

        /**
         * 
         * @brief 返回有序集中，指定区间内的成员，成员的位置按 score 值递减(从大到小)来排序
         * @param start 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
         * @param stop 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素
         * @param withScores 指定是否在结果中包含 score
         * @return 指定区间内，带有 score 值(可选)的有序集成员的列表
         * 
         * 
         */
        rangeRev(start: number, stop: number, withScores?: boolean/** = false*/): any[];

        /**
         * 
         * @brief 有序集中成员 member 的排名。其中有序集成员按 score 值递增(从小到大)顺序排列
         * @param member 指定要查询的 member
         * @return member 如果 member 是有序集 key 的成员，返回 member 的排名。如果 member 不是有序集 key 的成员，返回 nil
         * 
         * 
         */
        rank(member: Buffer): number;

        /**
         * 
         * @brief 有序集中成员 member 的排名。其中有序集成员按 score 值递减(从大到小)顺序排列
         * @param member 指定要查询的 member
         * @return member 如果 member 是有序集 key 的成员，返回 member 的排名。如果 member 不是有序集 key 的成员，返回 nil
         * 
         * 
         */
        rankRev(member: Buffer): number;
    }

    interface RedisSet {


        /**
         * 
         * @brief 将一个或多个 member 元素加入到集合 key 当中，已经存在于集合的 member 元素将被忽略
         * @param members 指定要添加的元素数组
         * @return 被添加到集合中的新元素的数量，不包括被忽略的元素
         * 
         * 
         */
        add(members: any[]): number;

        /**
         * 
         * @brief 同时将多个 field-value (域-值)对设置到哈希表中，此命令会覆盖哈希表中已存在的域
         * @param members 指定要添加的元素列表
         * @return 被添加到集合中的新元素的数量，不包括被忽略的元素
         * 
         * 
         */
        add(...members: any[]): number;

        /**
         * 
         * @brief 移除集合中的一个或多个 member 元素
         * @param members 指定要移除的元素数组
         * @return 被成功移除的元素的数量，不包括被忽略的元素
         * 
         * 
         */
        remove(members: any[]): number;

        /**
         * 
         * @brief 移除集合中的一个或多个 member 元素
         * @param members 指定要移除的元素列表
         * @return 被成功移除的元素的数量，不包括被忽略的元素
         * 
         * 
         */
        remove(...members: any[]): number;

        /**
         * 
         * @brief 返回集合中元素的数量
         * @return 返回集合的长度
         * 
         * 
         */
        len(): number;

        /**
         * 
         * @brief 判断 member 元素是否集合的成员
         * @param member 指定检查的 member
         * @return 如果 member 元素是集合的成员，返回 true
         * 
         * 
         */
        exists(member: Buffer): boolean;

        /**
         * 
         * @brief 返回集合中的所有成员
         * @return 集合中所有成员的列表
         * 
         * 
         */
        members(): any[];

        /**
         * 
         * @brief 移除并返回集合中的一个随机元素
         * @return 被移除的随机元素。当集合是空集时，返回 null
         * 
         * 
         */
        pop(): Buffer;

        /**
         * 
         * @brief 从集合中获取随机的一个元素
         * @return 返回一个元素；如果集合为空，返回 null
         * 
         * 
         */
        randMember(): any;

        /**
         * 
         * @brief 从集合中获取随机的若干元素
         * @param count 指定返回的元素个数。正数，返回一个包含 count 个元素的数组；负数，返回一个数组，数组中的元素可能会重复出现多次，而数组的长度为 count 的绝对值
         * @return 返回一个列表；如果集合为空，返回空列表
         * 
         * 
         */
        randMember(count: number): any;
    }

    interface RedisList {

        /**
         * 
         * @brief 将一个或多个值 value 插入到列表的表头
         * @param values 指定要插入的数据
         * @return 插入后，列表的长度
         * 
         * 
         */
        push(values: any[]): number;

        /**
         * 
         * @brief 将一个或多个值 value 插入到列表的表头
         * @param values 指定要插入的数据
         * @return 插入后，列表的长度
         * 
         * 
         */
        push(...values: any[]): number;

        /**
         * 
         * @brief 移除并返回列表 key 的头元素
         * @return 列表的头元素，如果列表为空则返回 null
         * 
         * 
         */
        pop(): Buffer;

        /**
         * 
         * @brief 将一个或多个值 value 插入到列表的表尾(最右边)
         * @param values 指定要插入的数据
         * @return 插入后，列表的长度
         * 
         * 
         */
        rpush(values: any[]): number;

        /**
         * 
         * @brief 将一个或多个值 value 插入到列表的表尾(最右边)
         * @param values 指定要插入的数据
         * @return 插入后，列表的长度
         * 
         * 
         */
        rpush(...values: any[]): number;

        /**
         * 
         * @brief 移除并返回列表 key 的表尾(最右边)元素
         * @return 列表的头元素，如果列表为空则返回 null
         * 
         * 
         */
        rpop(): Buffer;

        /**
         * 
         * @brief 将列表下标为 index 的元素的值设置为 value
         * @param index 指定要修改的下标
         * @param value 指定要修改的数据
         * 
         * 
         */
        set(index: number, value: Buffer): void;

        /**
         * 
         * @brief 返回列表中，下标为 index 的元素
         * @param index 指定要查询的下标
         * @return 列表中下标为 index 的元素
         * 
         * 
         */
        get(index: number): Buffer;

        /**
         * 
         * @brief 将值 value 插入到列表当中，位于值 pivot 之前
         * @param pivot 指定插入时查找的数据
         * @param value 指定要插入的数据
         * @return 插入后，列表的长度
         * 
         * 
         */
        insertBefore(pivot: Buffer, value: Buffer): number;

        /**
         * 
         * @brief 将值 value 插入到列表当中，位于值 pivot 之后
         * @param pivot 指定插入时查找的数据
         * @param value 指定要插入的数据
         * @return 插入后，列表的长度
         * 
         * 
         */
        insertAfter(pivot: Buffer, value: Buffer): number;

        /**
         * 
         * @brief 根据参数 count 的值，移除列表中与参数 value 相等的元素
         * @param count 指定删除的元素数量
         * @param value 指定要删除的数值
         * @return 被移除元素的数量
         * 
         * 
         */
        remove(count: number, value: Buffer): number;

        /**
         * 
         * @brief 对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除
         * @param start 指定修剪的起始下标，0 表示第一个元素，-1 表示最后一个元素
         * @param stop 指定修剪的结束下标，0 表示第一个元素，-1 表示最后一个元素
         * 
         * 
         */
        trim(start: number, stop: number): void;

        /**
         * 
         * @brief 返回列表的长度
         * @return 返回列表的长度
         * 
         * 
         */
        len(): number;

        /**
         * 
         * @brief 返回列表中指定区间内的元素，区间以偏移量 start 和 stop 指定，包含 start 和 stop 的元素
         * @param start 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
         * @param stop 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素
         * @return 包含指定区间内的元素的数组
         * 
         * 
         */
        range(start: number, stop: number): any[];
    }

    interface RedisHash {



        /**
         * 
         * @brief 将哈希表中的域 field 的值设为 value，如果域 field 已经存在于哈希表中，旧值将被覆盖
         * @param field 指定要修改的 field
         * @param value 指定要修改的数据
         * 
         * 
         */
        set(field: Buffer, value: Buffer): void;

        /**
         * 
         * @brief 将哈希表中的域 field 的值设置为 value ，当且仅当域 field 不存在。若域 field 已经存在，该操作无效
         * @param field 指定要修改的 field
         * @param value 指定要修改的数据
         * 
         * 
         */
        setNX(field: Buffer, value: Buffer): void;

        /**
         * 
         * @brief 同时将多个 field-value (域-值)对设置到哈希表中，此命令会覆盖哈希表中已存在的域
         * @param kvs 指定要设置的 field/value 对象
         * 
         * 
         */
        mset(kvs: Object): void;

        /**
         * 
         * @brief 同时将多个 field-value (域-值)对设置到哈希表中，此命令会覆盖哈希表中已存在的域
         * @param kvs 指定要设置的 field/value 列表
         * 
         * 
         */
        mset(...kvs: any[]): void;

        /**
         * 
         * @brief 返回哈希表中给定域 field 的值
         * @param field 指定要查询的 field
         * @return 给定域的值，当给定域不存在或是给定 key 不存在时，返回 null
         * 
         * 
         */
        get(field: Buffer): Buffer;

        /**
         * 
         * @brief 返回哈希表中，一个或多个给定域的值
         * @param fields 指定要查询的域数组
         * @return 一个包含所有给定域的值的列表
         * 
         * 
         */
        mget(fields: any[]): any[];

        /**
         * 
         * @brief 返回哈希表中，一个或多个给定域的值
         * @param fields 指定要查询的域列表
         * @return 一个包含所有给定域的值的列表
         * 
         * 
         */
        mget(...fields: any[]): any[];

        /**
         * 
         * @brief 将域所储存的值加上增量
         * @param field 指定要修改的域
         * @param num 指定要加上的数值
         * @return 加上 num 之后，域的值
         * 
         * 
         */
        incr(field: Buffer, num?: number/** = 1*/): number;

        /**
         * 
         * @brief 返回哈希表中，所有的域和值
         * @return 返回一个包含哈希表中所有域的列表
         * 
         * 
         */
        getAll(): any[];

        /**
         * 
         * @brief 返回哈希表中的所有域
         * @return 返回值里，紧跟每个域名(field name)之后是域的值(value)，所以返回值的长度是哈希表大小的两倍
         * 
         * 
         */
        keys(): any[];

        /**
         * 
         * @brief 返回哈希表中域的数量
         * @return 返回哈希表中域的数量
         * 
         * 
         */
        len(): number;

        /**
         * 
         * @brief 查看哈希表中，给定域 field 是否存在
         * @param field 指定要查询的 field
         * @return 如果哈希表含有给定域，返回 true，如果哈希表不含有给定域，或 key 不存在，返回 false
         * 
         * 
         */
        exists(field: Buffer): boolean;

        /**
         * 
         * @brief 删除哈希表中的一个或多个指定域，不存在的域将被忽略
         * @param fields 指定要删除的域数组
         * @return 被删除域的数量
         * 
         * 
         */
        del(fields: any[]): number;

        /**
         * 
         * @brief 删除哈希表中的一个或多个指定域，不存在的域将被忽略
         * @param fields 指定要删除的域列表
         * @return 被删除域的数量
         * 
         * 
         */
        del(...fields: any[]): number;
    }

    interface Redis {

        /**
         * class prop 
         *
         * 
         * @brief 查询和设置错误处理函数，当 sub 出现错误或者网络中断时回调，当回调发生后，本对象的一切 sub 都将中止
         * 
         * 
         * 
         * @type Function
         */

        onsuberror: Function



        /**
         * 
         * @brief redis 基础命令方法
         * @param cmd 指定发送的命令
         * @param args 指定发送的参数
         * @return 返回服务器返回的结果
         * 
         * 
         */
        command(cmd: string, ...args: any[]): any;

        /**
         * 
         * @brief 将字符串值 value 关联到 key，如果 key 已经持有其他值， SET 就覆写旧值，无视类型
         * @param key 指定要关联的 key
         * @param value 指定要关联的数据
         * @param ttl 以毫秒为单位为 key 设置生存时间；如果 ttl 为 0 ，那么不设置生存时间
         * 
         * 
         */
        set(key: Buffer, value: Buffer, ttl?: number/** = 0*/): void;

        /**
         * 
         * @brief 将 key 的值设为 value ，当且仅当 key 不存在。若给定的 key 已经存在，则 SETNX 不做任何动作。
         * @param key 指定要关联的 key
         * @param value 指定要关联的数据
         * @param ttl 以毫秒为单位为 key 设置生存时间；如果 ttl 为 0 ，那么不设置生存时间
         * 
         * 
         */
        setNX(key: Buffer, value: Buffer, ttl?: number/** = 0*/): void;

        /**
         * 
         * @brief 将 key 的值设为 value，只在键已经存在时，才对键进行设置操作。
         * @param key 指定要关联的 key
         * @param value 指定要关联的数据
         * @param ttl 以毫秒为单位为 key 设置生存时间；如果 ttl 为 0 ，那么不设置生存时间
         * 
         * 
         */
        setXX(key: Buffer, value: Buffer, ttl?: number/** = 0*/): void;

        /**
         * 
         * @brief 同时设置一个或多个 key-value 对。如果某个给定 key 已经存在，那么 MSET 会用新值覆盖原来的旧值
         * @param kvs 指定要设置的 key/value 对象
         * 
         * 
         */
        mset(kvs: Object): void;

        /**
         * 
         * @brief 同时设置一个或多个 key-value 对。如果某个给定 key 已经存在，那么 MSET 会用新值覆盖原来的旧值
         * @param kvs 指定要设置的 key/value 列表
         * 
         * 
         */
        mset(...kvs: any[]): void;

        /**
         * 
         * @brief 同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在
         * @param kvs 指定要设置的 key/value 对象
         * 
         * 
         */
        msetNX(kvs: Object): void;

        /**
         * 
         * @brief 同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在
         * @param kvs 指定要设置的 key/value 列表
         * 
         * 
         */
        msetNX(...kvs: any[]): void;

        /**
         * 
         * @brief 如果 key 已经存在并且是一个字符串，append 命令将 value 追加到 key 原来的值的末尾。如果 key 不存在，append 就简单地将给定 key 设为 value
         * @param key 指定要追加的 key
         * @param value 指定要追加的数据
         * @return 追加 value 之后， key 中字符串的长度
         * 
         * 
         */
        append(key: Buffer, value: Buffer): number;

        /**
         * 
         * @brief 用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始
         * @param key 指定要修改的 key
         * @param offset 指定修改的字节偏移
         * @param value 指定要覆盖的数据
         * @return 被修改之后，字符串的长度
         * 
         * 
         */
        setRange(key: Buffer, offset: number, value: Buffer): number;

        /**
         * 
         * @brief 返回 key 中字符串值的子字符串，字符串的截取范围由 start 和 end 两个偏移量决定(包括 start 和 end 在内)
         * @param key 指定要查询的 key
         * @param start 指定查询的起始字节偏移
         * @param end 指定查询的结束字节偏移
         * @return 截取得出的子字符串
         * 
         * 
         */
        getRange(key: Buffer, start: number, end: number): Buffer;

        /**
         * 
         * @brief 返回 key 所储存的字符串值的长度。当 key 储存的不是字符串值时，返回一个错误
         * @param key 指定要计算的 key
         * @return 字符串值的长度。当 key 不存在时，返回 0
         * 
         * 
         */
        strlen(key: Buffer): number;

        /**
         * 
         * @brief 计算给定字符串中，被设置为 1 的比特位的数量
         * @param key 指定要计算的 key
         * @param start 指定要计算的起始字节，可以使用负数值，-1 表示最后一个字节，而 -2 表示倒数第二个字节，以此类推
         * @param end 指定要计算的结束字节，可以使用负数值，-1 表示最后一个字节，而 -2 表示倒数第二个字节，以此类推
         * @return 被设置为 1 的位的数量
         * 
         * 
         */
        bitcount(key: Buffer, start?: number/** = 0*/, end?: number/** = -1*/): number;

        /**
         * 
         * @brief 返回 key 所关联的字符串值，如果 key 不存在那么返回特殊值 Null
         * @param key 指定要关联的 key
         * @return 当 key 不存在时，返回 Null ，否则，返回 key 的值
         * 
         * 
         */
        get(key: Buffer): Buffer;

        /**
         * 
         * @brief 返回所有(一个或多个)给定 key 的值。如果给定的 key 里面，有某个 key 不存在，那么这个 key 返回特殊值 nil 。
         * @param keys 指定要查询的 key 数组
         * @return 一个包含所有给定 key 的值的列表
         * 
         * 
         */
        mget(keys: any[]): any[];

        /**
         * 
         * @brief 返回所有(一个或多个)给定 key 的值。如果给定的 key 里面，有某个 key 不存在，那么这个 key 返回特殊值 nil 。
         * @param keys 指定要查询的 key 列表
         * @return 一个包含所有给定 key 的值的列表
         * 
         * 
         */
        mget(...keys: any[]): any[];

        /**
         * 
         * @brief 将给定 key 的值设为 value ，并返回 key 的旧值(old value)
         * @param key 指定要查询修改的 key
         * @param value 指定修改的数值
         * @return 返回给定 key 的旧值
         * 
         * 
         */
        getset(key: Buffer, value: Buffer): Buffer;

        /**
         * 
         * @brief 将 key 所储存的值减去减量
         * @param key 指定要修改的 key
         * @param num 指定要减去的数值
         * @return 减去 num 之后，key 的值
         * 
         * 
         */
        decr(key: Buffer, num?: number/** = 1*/): number;

        /**
         * 
         * @brief 将 key 所储存的值加上增量
         * @param key 指定要修改的 key
         * @param num 指定要加上的数值
         * @return 加上 num 之后，key 的值
         * 
         * 
         */
        incr(key: Buffer, num?: number/** = 1*/): number;

        /**
         * 
         * @brief 对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)
         * @param key 指定要修改的 key
         * @param offset 指定修改的位偏移
         * @param value 指定设置或清除的参数，可以是 0 也可以是 1
         * @return 指定偏移量原来储存的位
         * 
         * 
         */
        setBit(key: Buffer, offset: number, value: number): number;

        /**
         * 
         * @brief 对 key 所储存的字符串值，获取指定偏移量上的位(bit)
         * @param key 指定要查询的 key
         * @param offset 指定查询的位偏移
         * @return 字符串值指定偏移量上的位(bit)
         * 
         * 
         */
        getBit(key: Buffer, offset: number): number;

        /**
         * 
         * @brief 检查给定 key 是否存在
         * @param key 指定要关联的 key
         * @return 若 key 存在，返回 True，否则返回 False
         * 
         * 
         */
        exists(key: Buffer): boolean;

        /**
         * 
         * @brief 返回 key 所储存的值的类型
         * @param key 指定要查询的 key
         * @return 返回 key 所储存的值的类型，可能的值为 none(key不存在) string(字符串) list(列表) set(集合) zset(有序集) hash(哈希表)
         * 
         * 
         */
        type(key: Buffer): string;

        /**
         * 
         * @brief 查找所有符合给定模式 pattern 的 key
         * @param pattern 指定查询模式
         * @return 符合给定模式的 key 列表
         * 
         * 
         */
        keys(pattern: string): any[];

        /**
         * 
         * @brief 删除给定的一个或多个 key，不存在的 key 会被忽略
         * @param keys 指定要删除的 key 数组
         * @return 被删除 key 的数量
         * 
         * 
         */
        del(keys: any[]): number;

        /**
         * 
         * @brief 删除给定的一个或多个 key，不存在的 key 会被忽略
         * @param keys 指定要删除的 key 列表
         * @return 被删除 key 的数量
         * 
         * 
         */
        del(...keys: any[]): number;

        /**
         * 
         * @brief 为给定 key 设置生存时间，当 key 过期时，它会被自动删除
         * @param key 指定要设定的 key
         * @param ttl 以毫秒为单位为 key 设置生存时间
         * @return 若 key 存在，返回 True，否则返回 False
         * 
         * 
         */
        expire(key: Buffer, ttl: number): boolean;

        /**
         * 
         * @brief 返回给定 key 的剩余生存时间
         * @param key 指定要查询的 key
         * @return 以毫秒为单位，返回 key 的剩余生存时间，当 key 不存在时，返回 -2，当 key 存在但没有设置剩余生存时间时，返回 -1
         * 
         * 
         */
        ttl(key: Buffer): number;

        /**
         * 
         * @brief 移除给定 key 的生存时间，将这个 key 从『易失的』(带生存时间 key )转换成『持久的』(一个不带生存时间、永不过期的 key)
         * @param key 指定要设定的 key
         * @return 若 key 存在，返回 True，否则返回 False
         * 
         * 
         */
        persist(key: Buffer): boolean;

        /**
         * 
         * @brief 将 key 改名为 newkey，当 key 和 newkey 相同，或者 key 不存在时，返回一个错误
         * @param key 指定要改名的 key
         * @param newkey 指定要改名的目的 key
         * 
         * 
         */
        rename(key: Buffer, newkey: Buffer): void;

        /**
         * 
         * @brief 当且仅当 newkey 不存在时，将 key 改名为 newkey，当 key 不存在时，返回一个错误
         * @param key 指定要改名的 key
         * @param newkey 指定要改名的目的 key
         * @return 修改成功时，返回 True，如果 newkey 已经存在，返回 False
         * 
         * 
         */
        renameNX(key: Buffer, newkey: Buffer): boolean;

        /**
         * 
         * @brief 订阅给定的一个频道的信息，当消息发生时自动调用 func，func 包含两个参数，依次为 channel 和 message，同一频道同一函数只会回调一次
         * @param channel 指定订阅的频道名称
         * @param func 指定回调函数
         * 
         * 
         * 
         */
        sub(channel: Buffer, func: Function): void;

        /**
         * 
         * @brief 订阅给定的一组频道的信息，当消息发生时自动调用相应的回调函数，同一频道同一函数只会回调一次
         * @param map 指定频道映射关系，对象属性名称将作为频道名称，属性的值将作为回调函数
         * 
         * 
         * 
         */
        sub(map: Object): void;

        /**
         * 
         * @brief 退订给定的频道的全部回调
         * @param channel 指定退订的频道名称
         * 
         * 
         * 
         */
        unsub(channel: Buffer): void;

        /**
         * 
         * @brief 退订给定的频道的指定回调函数
         * @param channel 指定退订的频道名称
         * @param func 指定退订的回调函数
         * 
         * 
         * 
         */
        unsub(channel: Buffer, func: Function): void;

        /**
         * 
         * @brief 退订一组给定的频道的全部回调
         * @param channels 指定退订的频道数组
         * 
         * 
         * 
         */
        unsub(channels: any[]): void;

        /**
         * 
         * @brief 退订给定的一组频道的指定回调函数
         * @param map 指定频道映射关系，对象属性名称将作为频道名称，属性的值将作为回调函数
         * 
         * 
         * 
         */
        unsub(map: Object): void;

        /**
         * 
         * @brief 按照模板订阅一组频道的信息，当消息发生时自动调用 func，func 包含三个参数，依次为 channel，message 和 pattern，同一模板同一函数只会回调一次
         * @param pattern 指定订阅的频道模板
         * @param func 指定回调函数
         * 
         * 
         * 
         */
        psub(pattern: string, func: Function): void;

        /**
         * 
         * @brief 订阅给定的一组频道模板的信息，当消息发生时自动调用相应的 func，同一频道同一函数只会回调一次
         * @param map 指定频道映射关系，对象属性名称将作为频道模板，属性的值将作为回调函数
         * 
         * 
         * 
         */
        psub(map: Object): void;

        /**
         * 
         * @brief 退订给定模板的频道的全部回调
         * @param pattern 指定退订的频道模板
         * 
         * 
         * 
         */
        unpsub(pattern: string): void;

        /**
         * 
         * @brief 退订给定模板的频道的指定回调函数
         * @param pattern 指定退订的频道模板
         * @param func 指定退订的回调函数
         * 
         * 
         * 
         */
        unpsub(pattern: string, func: Function): void;

        /**
         * 
         * @brief 退订一组给定模板的频道的全部回调
         * @param patterns 指定发布的频道模板数组
         * 
         * 
         * 
         */
        unpsub(patterns: any[]): void;

        /**
         * 
         * @brief 退订一组模板的频道的指定回调函数
         * @param map 指定频道映射关系，对象属性名称将作为频道模板，属性的值将作为回调函数
         * 
         * 
         * 
         */
        unpsub(map: Object): void;

        /**
         * 
         * @brief 将信息 message 发送到指定的频道 channel
         * @param channel 指定发布的频道
         * @param message 指定发布的消息
         * @return 接收此消息的客户端数量
         * 
         * 
         * 
         */
        pub(channel: Buffer, message: Buffer): number;

        /**
         * 
         * @brief 获取指定 key 的 Hash 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
         * @param key 指定要获取的 key
         * @return 返回包含指定 key 的 Hash 对象
         * 
         * 
         */
        getHash(key: Buffer): RedisHash;

        /**
         * 
         * @brief 获取指定 key 的 List 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
         * @param key 指定要获取的 key
         * @return 返回包含指定 key 的 List 对象
         * 
         * 
         */
        getList(key: Buffer): RedisList;

        /**
         * 
         * @brief 获取指定 key 的 Set 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
         * @param key 指定要获取的 key
         * @return 返回包含指定 key 的 Set 对象
         * 
         * 
         */
        getSet(key: Buffer): RedisSet;

        /**
         * 
         * @brief 获取指定 key 的 SortedSet 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
         * @param key 指定要获取的 key
         * @return 返回包含指定 key 的 SortedSet 对象
         * 
         * 
         */
        getSortedSet(key: Buffer): RedisSortedSet;

        /**
         * 
         * @brief 序列化给定 key ，并返回被序列化的值，使用 restore 命令可以将这个值反序列化为 Redis 键
         * @param key 指定要序列化的 key
         * @return 返回序列化之后的值，如果 key 不存在，那么返回 null
         * 
         * 
         */
        dump(key: Buffer): Buffer;

        /**
         * 
         * @brief 反序列化给定的序列化值，并将它和给定的 key 关联
         * @param key 指定要反序列化的 key
         * @param data 指定要反序列化的数据
         * @param ttl 以毫秒为单位为 key 设置生存时间；如果 ttl 为 0 ，那么不设置生存时间
         * 
         * 
         */
        restore(key: Buffer, data: Buffer, ttl?: number/** = 0*/): void;

        /**
         * 
         * @brief 关闭当前数据库连接或事务
         * 
         * 
         */
        close(): void;
    }

    /**
     * 
     * @brief 打开一个数据库，此方法为通用入口，根据提供的 connString 不同调用不同的引擎
     * @param connString 数据库描述，如：mysql://user:pass\@host/db
     * @return 返回数据库连接对象
     * 
     * 
     * @async
     */
    export function open(connString: string): FibJS.Object;

    /**
     * 
     * @brief 打开一个 mysql 数据库
     * @param connString 数据库描述，如：mysql://user:pass\@host/db
     * @return 返回数据库连接对象
     * 
     * 
     * @async
     */
    export function openMySQL(connString: string): MySQL;

    /**
     * 
     * @brief 打开一个 mysql 数据库
     * @param connString 数据库描述，如：mssql://user:pass\@host/db
     * @return 返回数据库连接对象
     * 
     * 
     * @async
     */
    export function openMSSQL(connString: string): MSSQL;

    /**
     * 
     * @brief 打开一个 sqlite 数据库
     * @param connString 数据库描述，如：sqlite:test.db 或者 test.db
     * @return 返回数据库连接对象
     * 
     * 
     * @async
     */
    export function openSQLite(connString: string): SQLite;

    /**
     * 
     * @brief 打开一个 mongodb 数据库
     * @param connString 数据库描述
     * @return 返回数据库连接对象
     * 
     * 
     * @async
     */
    export function openMongoDB(connString: string): MongoDB;

    /**
     * 
     * @brief 打开一个 leveldb 数据库
     * @param connString 数据库描述，如：level:test.db 或者 test.db
     * @return 返回数据库对象
     * 
     * 
     * @async
     */
    export function openLevelDB(connString: string): LevelDB;

    /**
     * 
     * @brief 打开一个 Redis 数据库
     * @param connString 数据库描述，如：redis://server:port 或者 "server"
     * @return 返回数据库连接对象
     * 
     * 
     * @async
     */
    export function openRedis(connString: string): Redis;

    /**
     * 
     * @brief 格式化一个 sql 命令，并返回格式化结果
     * 
     * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
     * @param args 可选参数列表
     * @return 返回格式化之后的 sql 命令
     * 
     * 
     * 
     */
    export function format(sql: string, ...args: any[]): string;

    /**
     * 
     * @brief 格式化一个 mysql 命令，并返回格式化结果
     * 
     * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
     * @param args 可选参数列表
     * @return 返回格式化之后的 sql 命令
     * 
     * 
     * 
     */
    export function formatMySQL(sql: string, ...args: any[]): string;

    /**
     * 
     * @brief 格式化一个 mssql 命令，并返回格式化结果
     * 
     * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
     * @param args 可选参数列表
     * @return 返回格式化之后的 sql 命令
     * 
     * 
     * 
     */
    export function formatMSSQL(sql: string, ...args: any[]): string;

    /**
     * 
     * @brief 将字符串编码为 SQL 安全编码字符串
     * @param str 要编码的字符串
     * @param mysql 指定 mysql 编码，缺省为 false
     * @return 返回编码后的字符串
     * 
     * 
     * 
     */
    export function escape(str: string, mysql?: boolean/** = false*/): string;
}
//#endregion==============================================================================================================

declare module "dns" {

    /**
     * 
     * @brief 查询给定的主机名的地址
     * @param name 指定主机名
     * @return 返回查询的 ip 字符串数组
     * 
     * 
     * @async
     */
    export function resolve(name: string): any[];

    /**
     * 
     * @brief 查询给定的主机名的地址
     * @param name 指定主机名
     * @return 返回查询的 ip 字符串
     * 
     * 
     * @async
     */
    export function lookup(name: string): string;
}

declare module "fs" {

    interface SeekableStream {


        /**
         * 
         * @brief 移动文件当前操作位置
         * @param offset 指定新的位置
         * @param whence 指定位置基准，允许的值为：SEEK_SET, SEEK_CUR, SEEK_END
         * 
         * 
         * 
         */
        seek(offset: number, whence: number): void;

        /**
         * 
         * @brief 查询流当前位置
         * @return 返回流当前位置
         * 
         * 
         * 
         */
        tell(): number;

        /**
         * 
         * @brief 移动当前位置到流开头
         * 
         * 
         */
        rewind(): void;

        /**
         * 
         * @brief 查询流尺寸
         * @return 返回流尺寸
         * 
         * 
         * 
         */
        size(): number;

        /**
         * 
         * @brief 从流内读取剩余的全部数据
         * @return 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null
         * 
         * 
         * @async
         */
        readAll(): Buffer;

        /**
         * 
         * @brief 修改文件尺寸，如果新尺寸小于原尺寸，则文件被截断
         * @param bytes 新的文件尺寸
         * 
         * 
         * @async
         */
        truncate(bytes: number): void;

        /**
         * 
         * @brief 查询文件是否到结尾
         * @return 返回 True 表示结尾
         * 
         * 
         * 
         */
        eof(): boolean;

        /**
         * 
         * @brief 查询当前文件的基础信息
         * @return 返回 Stat 对象描述文件信息
         * 
         * 
         * @async
         */
        stat(): Stat;
    }


    interface Stat {

        /**
         * class prop 
         *
         * 
         * @brief 文件名称
         * 
         * @readonly
         * @type String
         */

        name: string

        /**
         * class prop 
         *
         * 
         * @brief 文件尺寸
         * 
         * @readonly
         * @type Long
         */

        size: number

        /**
         * class prop 
         *
         * 
         * @brief 文件权限，Windows 不支持此属性
         * 
         * @readonly
         * @type Integer
         */

        mode: number

        /**
         * class prop 
         *
         * 
         * @brief 文件最后修改时间
         * 
         * @readonly
         * @type Date
         */

        mtime: Date

        /**
         * class prop 
         *
         * 
         * @brief 文件最后访问时间
         * 
         * @readonly
         * @type Date
         */

        atime: Date

        /**
         * class prop 
         *
         * 
         * @brief 文件创建时间
         * 
         * @readonly
         * @type Date
         */

        ctime: Date

        /**
         * class prop 
         *
         * 
         * @brief 文件拥有者的id
         * 
         * @readonly
         * @type Integer
         */

        uid: number

        /**
         * class prop 
         *
         * 
         * @brief 文件所属的组id
         * 
         * @readonly
         * @type Integer
         */

        gid: number

        /**
         * 
         * @brief 查询文件是否有写入权限
         * @return 为 true 则有写入权限
         * 
         * 
         * 
         */
        isWritable(): boolean;

        /**
         * 
         * @brief 查询文件是否有读权限
         * @return 为 true 则有读权限
         * 
         * 
         * 
         */
        isReadable(): boolean;

        /**
         * 
         * @brief 查询文件是否有执行权限
         * @return 为 true 则有执行权限
         * 
         * 
         * 
         */
        isExecutable(): boolean;

        /**
         * 
         * @brief 查询文件是否隐藏
         * @return 为 true 则隐藏
         * 
         * 
         * 
         */
        isHidden(): boolean;

        /**
         * 
         * @brief 查询文件是否是目录
         * @return 为 true 则是目录
         * 
         * 
         * 
         */
        isDirectory(): boolean;

        /**
         * 
         * @brief 查询文件是否是文件
         * @return 为 true 则是文件
         * 
         * 
         * 
         */
        isFile(): boolean;

        /**
         * 
         * @brief 查询文件是否是符号链接
         * @return 为 true 则是符号链接
         * 
         * 
         * 
         */
        isSymbolicLink(): boolean;

        /**
         * 
         * @brief 查询文件是否是内存文件
         * @return 为 true 则是内存文件
         * 
         * 
         * 
         */
        isMemory(): boolean;

        /**
         * 
         * @brief 查询文件是否是 Socket
         * @return 为 true 则是 Socket
         * 
         * 
         * 
         */
        isSocket(): boolean;
    }

    interface File extends SeekableStream{
            
        /**
            * 
            * @brief 查询当前文件的访问权限，Windows 不支持此方法
            * @param mode 指定设定的访问权限
            * 
            * 
            * @async
            */
        chmod(mode: number): void;
    }

    /**
		 * 
		 * @brief seek 方式常量，移动到绝对位置
		 * 
		 * 
		 */
    export const SEEK_SET = 0;

    /**
     * 
     * @brief seek 方式常量，移动到当前位置的相对位置
     * 
     * 
     */
    export const SEEK_CUR = 1;

    /**
     * 
     * @brief seek 方式常量，移动到文件结尾的相对位置
     * 
     * 
     */
    export const SEEK_END = 2;

    /**
     * 
     * @brief 查询指定的文件或目录是否存在
     * @param path 指定要查询的路径
     * @return 返回 True 表示文件或目录存在
     * 
     * 
     * @async
     */
    export function exists(path: string): boolean;

    /**
     * 
     * @brief 查询用户对指定的文件的权限
     * @param path 指定要查询的路径
     * @param mode 指定查询的权限,默认为文件是否存在
     * 
     * 
     * @async
     */
    export function access(path: string, mode?: number/** = 0*/): void;

    /**
     * 
     * @brief 创建硬链接文件, windows 下不支持此方法
     * @param oldPath 源文件
     * @param newPath 将要被创建的文件
     * 
     * 
     * @async
     */
    export function link(oldPath: string, newPath: string): void;

    /**
     * 
     * @brief 删除指定的文件
     * @param path 指定要删除的路径
     * 
     * 
     * @async
     */
    export function unlink(path: string): void;

    /**
     * 
     * @brief 创建一个目录
     * @param path 指定要创建的目录名
     * @param mode 指定文件权限，Windows 忽略此参数
     * 
     * 
     * @async
     */
    export function mkdir(path: string, mode?: number/** = 0777*/): void;

    /**
     * 
     * @brief 删除一个目录
     * @param path 指定要删除的目录名
     * 
     * 
     * @async
     */
    export function rmdir(path: string): void;

    /**
     * 
     * @brief 重新命名一个文件
     * @param from 指定更名的文件
     * @param to 指定要修改的新文件名
     * 
     * 
     * @async
     */
    export function rename(from: string, to: string): void;

    /**
     * 
     * @brief 复制一个文件
     * @param from 指定更名的文件
     * @param to 指定要修改的新文件名
     * 
     * 
     * @async
     */
    export function copy(from: string, to: string): void;

    /**
     * 
     * @brief 设置指定文件的访问权限，Windows 不支持此方法
     * @param path 指定操作的文件
     * @param mode 指定设定的访问权限
     * 
     * 
     * @async
     */
    export function chmod(path: string, mode: number): void;

    /**
     * 
     * @brief 设置指定文件的访问权限，若文件是软连接则不改变指向文件的权限，只在macOS、BSD 系列平台上可用
     * @param path 指定操作的文件
     * @param mode 指定设定的访问权限
     * 
     * 
     * @async
     */
    export function lchmod(path: string, mode: number): void;

    /**
     * 
     * @brief 设置指定文件的拥有者，Windows 不支持此方法
     * @param path 指定设置的文件
     * @param uid 文件拥有者用户id
     * @param gid 文件拥有者组id
     * 
     * 
     * @async
     */
    export function chown(path: string, uid: number, gid: number): void;

    /**
     * 
     * @brief 设置指定文件的拥有者，如果指定的文件是软连接则不会改变其指向文件的拥有者，Windows 不支持此方法
     * @param path 指定设置的文件
     * @param uid 文件拥有者用户id
     * @param gid 文件拥有者组id
     * 
     * 
     * @async
     */
    export function lchown(path: string, uid: number, gid: number): void;

    /**
     * 
     * @brief 查询指定文件的基础信息
     * @param path 指定查询的文件
     * @return 返回文件的基础信息
     * 
     * 
     * @async
     */
    export function stat(path: string): Stat;

    /**
     * 
     * @brief 查询指定文件的基础信息, 和stat不同的是, 当path是一个软连接的时候，返回的将是这个软连接的信息而不是指向的文件的信息
     * @param path 指定查询的文件
     * @return 返回文件的基础信息
     * 
     * 
     * @async
     */
    export function lstat(path: string): Stat;

    /**
     * 
     * @brief 读取指定的软连接文件, windows 下不支持此方法
     * @param path 指定读取的软连接文件
     * @return 返回软连接指向的文件名
     * 
     * 
     * @async
     */
    export function readlink(path: string): string;

    /**
     * 
     * @brief 返回指定路径的绝对路径，如果指定路径中包含相对路径也会被展开
     * @param path 指定读取的路径
     * @return 返回处理后的绝对路径
     * 
     * 
     * @async
     */
    export function realpath(path: string): string;

    /**
     * 
     * @brief 创建软连接文件
     * @param target 目标文件，可以是文件、目录、或不存在的路径
     * @param linkpath 将被创建的软连接文件
     * @param type 创建的软连接类型, 可选类型为'file', 'dir', 'junction', 默认为'file', 该参数只在windows上有效，当为'junction'的时候将要创建的目标路径linkpath必须为绝对路径, 而target则会被自动转化为绝对路径。
     * 
     * 
     * @async
     */
    export function symlink(target: string, linkpath: string, type?: string/** = "file"*/): void;

    /**
     * 
     * @brief 修改文件尺寸,如果指定的长度大于源文件大小则用'\0'填充，否则多于的文件内容将丢失
     * @param path 指定被修改文件的路径
     * @param len 指定修改后文件的大小
     * 
     * 
     * @async
     */
    export function truncate(path: string, len: number): void;

    /**
     * 
     * @brief 根据文件描述符，读取文件内容
     * @param fd 文件描述符
     * @param buffer 读取结果写入的 Buffer 对象
     * @param offset Buffer 写入偏移量， 默认为 0
     * @param length 文件读取字节数，默认为 0
     * @param position 文件读取位置，默认为当前文件位置
     * @return 实际读取的字节数
     * 
     * 
     * @async
     */
    export function read(fd: number, buffer: Buffer, offset?: number/** = 0*/, length?: number/** = 0*/, position?: number/** = -1*/): number;

    /**
     * 
     * @brief 根据文件描述符，改变文件模式。只在 POSIX 系统有效。
     * @param fd 文件描述符
     * @param mode 文件的模式
     * 
     * 
     * @async
     */
    export function fchmod(fd: number, mode: number): void;

    /**
     * 
     * @brief 根据文件描述符，改变所有者。只在 POSIX 系统有效。
     * @param fd 文件描述符
     * @param uid 用户id
     * @param gid 组id
     * 
     * 
     * @async
     */
    export function fchown(fd: number, uid: number, gid: number): void;

    /**
     * 
     * @brief 根据文件描述符，同步数据到磁盘
     * @param fd 文件描述符
     * 
     * 
     * @async
     */
    export function fdatasync(fd: number): void;

    /**
     * 
     * @brief 根据文件描述符，同步数据到磁盘
     * @param fd 文件描述符
     * 
     * 
     * @async
     */
    export function fsync(fd: number): void;

    /**
     * 
     * @brief 读取指定目录的文件信息
     * @param path 指定查询的目录
     * @return 返回目录的文件信息数组
     * 
     * 
     * @async
     */
    export function readdir(path: string): any[];

    /**
     * 
     * @brief 打开文件，用于读取，写入，或者同时读写
     * 
     * 参数 flags 支持的方式如下：
     * - 'r' 只读方式，文件不存在则抛出错误。
     * - 'r+' 读写方式，文件不存在则抛出错误。
     * - 'w' 只写方式，文件不存在则自动创建，存在则将被清空。
     * - 'w+' 读写方式，文件不存在则自动创建。
     * - 'a' 只写添加方式，文件不存在则自动创建。
     * - 'a+' 读写添加方式，文件不存在则自动创建。
     * @param fname 指定文件名
     * @param flags 指定文件打开方式，缺省为 "r"，只读方式
     * @return 返回打开的文件对象
     * 
     * 
     * @async
     */
    export function openFile(fname: string, flags?: string/** = "r"*/): SeekableStream;
    export function openFile(fname:string):File;

    /**
     * 
     * @brief 打开文件描述符
     * 
     * 参数 flags 支持的方式如下：
     * - 'r' 只读方式，文件不存在则抛出错误。
     * - 'r+' 读写方式，文件不存在则抛出错误。
     * - 'w' 只写方式，文件不存在则自动创建，存在则将被清空。
     * - 'w+' 读写方式，文件不存在则自动创建。
     * - 'a' 只写添加方式，文件不存在则自动创建。
     * - 'a+' 读写添加方式，文件不存在则自动创建。
     * @param fname 指定文件名
     * @param flags 指定文件打开方式，缺省为 "r"，只读方式
     * @param mode 当创建文件的时候，指定文件的模式，默认 0666
     * @return 返回打开的文件描述符
     * 
     * 
     * @async
     */
    export function open(fname: string, flags?: string/** = "r"*/, mode?: number/** = 0666*/): number;

    /**
     * 
     * @brief 关闭文件描述符
     * @param fd 文件描述符
     * 
     * 
     * @async
     */
    export function close(fd: number): void;

    /**
     * 
     * @brief 打开文本文件，用于读取，写入，或者同时读写
     * 
     * 参数 flags 支持的方式如下：
     * - 'r' 只读方式，文件不存在则抛出错误。
     * - 'r+' 读写方式，文件不存在则抛出错误。
     * - 'w' 只写方式，文件不存在则自动创建，存在则将被清空。
     * - 'w+' 读写方式，文件不存在则自动创建。
     * - 'a' 只写添加方式，文件不存在则自动创建。
     * - 'a+' 读写添加方式，文件不存在则自动创建。
     * @param fname 指定文件名
     * @param flags 指定文件打开方式，缺省为 "r"，只读方式
     * @return 返回打开的文件对象
     * 
     * 
     * @async
     */
    export function openTextStream(fname: string, flags?: string/** = "r"*/): FibJS.BufferedStream;

    /**
     * 
     * @brief 打开文本文件，并读取内容
     * @param fname 指定文件名
     * @return 返回文件文本内容
     * 
     * 
     * @async
     */
    export function readTextFile(fname: string): string;

    /**
     * 
     * @brief 打开二进制文件，并读取内容
     * @param fname 指定文件名
     * @param encoding 指定解码方式，缺省不解码
     * @return 返回文件文本内容
     * 
     * 
     * @async
     */
    export function readFile(fname: string, encoding?: string/** = ""*/): any;

    /**
     * 
     * @brief 打开文件，以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:"\n"；windows:"\r\n"
     * @param fname 指定文件名
     * @param maxlines 指定此次读取的最大行数，缺省读取全部文本行
     * @return 返回读取的文本行数组，若无数据可读，或者连接中断，空数组
     * 
     * 
     * 
     */
    export function readLines(fname: string, maxlines?: number/** = -1*/): any[];

    /**
     * 
     * @brief 创建文本文件，并写入内容
     * @param fname 指定文件名
     * @param txt 指定要写入的字符串
     * 
     * 
     * @async
     */
    export function writeTextFile(fname: string, txt: string): void;

    /**
     * 
     * @brief 创建二进制文件，并写入内容
     * @param fname 指定文件名
     * @param data 指定要写入的二进制数据
     * 
     * 
     * @async
     */
    export function writeFile(fname: string, data: Buffer): void;

    /**
     * 
     * @brief 创建二进制文件，并写入内容
     * @param fname 指定文件名
     * @param data 指定要写入的二进制数据
     * 
     * 
     * @async
     */
    export function appendFile(fname: string, data: Buffer): void;
}

declare module "gd" {
    import { SeekableStream, Stat } from "fs";

    /**
        * 
        * @brief 图像格式常量，标示当前图像来源为未知
        * 
        * 
        */
    export const NONE = 0;

    /**
        * 
        * @brief 图像格式常量，标示当前图像来源为 jpeg 格式数据
        * 
        * 
        */
    export const JPEG = 1;

    /**
        * 
        * @brief 图像格式常量，标示当前图像来源为 gif 格式数据
        * 
        * 
        */
    export const GIF = 2;

    /**
        * 
        * @brief 图像格式常量，标示当前图像来源为 png 格式数据
        * 
        * 
        */
    export const PNG = 3;

    /**
        * 
        * @brief 图像格式常量，标示当前图像来源为 tiff 格式数据
        * 
        * 
        */
    export const TIFF = 4;

    /**
        * 
        * @brief 图像格式常量，标示当前图像来源为 bmp 格式数据
        * 
        * 
        */
    export const BMP = 5;

    /**
        * 
        * @brief 图像格式常量，标示当前图像来源为 webp 格式数据
        * 
        * 
        */
    export const WEBP = 6;

    /**
        * 
        * @brief 图像类型常量，标示当前图像为真彩色图像
        * 
        * 
        */
    export const TRUECOLOR = 0;

    /**
        * 
        * @brief 图像类型常量，标示当前图像为调色板图像
        * 
        * 
        */
    export const PALETTE = 1;

    /**
        * 
        * @brief 扇形绘制样式，绘制一条连接开始和结束点的圆弧
        * 
        * 
        */
    export const ARC = 0;

    /**
        * 
        * @brief 扇形绘制样式，绘制一条连接原点，开始和结束点的直线
        * 
        * 
        */
    export const CHORD = 1;

    /**
        * 
        * @brief 扇形绘制样式，绘制不填充的扇形
        * 
        * 
        */
    export const NOFILL = 2;

    /**
        * 
        * @brief 扇形绘制样式，绘制一条连接起点和终点的弧和连接原点的直线
        * 
        * 
        */
    export const EDGED = 4;

    /**
        * 
        * @brief 镜像方向，横向做镜像处理
        * 
        * 
        */
    export const HORIZONTAL = 1;

    /**
        * 
        * @brief 镜像方向，纵向做镜像处理
        * 
        * 
        */
    export const VERTICAL = 2;

    /**
        * 
        * @brief 镜像方向，横向和纵向都做镜像处理
        * 
        * 
        */
    export const BOTH = 3;

    /**
        * 
        * @brief 旋转方向，向左旋转
        * 
        * 
        */
    export const LEFT = 1;

    /**
        * 
        * @brief 旋转方向，向右旋转
        * 
        * 
        */
    export const RIGHT = 2;

    /**
        * 
        * @brief 滤波器类型：用平均移除法来达到轮廓效果
        * 
        * 
        */
    export const MEAN_REMOVAL = 0;

    /**
        * 
        * @brief 滤波器类型：用边缘检测来突出图像的边缘
        * 
        * 
        */
    export const EDGEDETECT = 1;

    /**
        * 
        * @brief 滤波器类型：使图像浮雕化
        * 
        * 
        */
    export const EMBOSS = 2;

    /**
        * 
        * @brief 滤波器类型：模糊图像
        * 
        * 
        */
    export const SELECTIVE_BLUR = 3;

    /**
        * 
        * @brief 滤波器类型：用高斯算法模糊图像
        * 
        * 
        */
    export const GAUSSIAN_BLUR = 4;

    /**
        * 
        * @brief 滤波器类型：将图像中所有颜色反转
        * 
        * 
        */
    export const NEGATE = 5;

    /**
        * 
        * @brief 滤波器类型：将图像转换为灰度图
        * 
        * 
        */
    export const GRAYSCALE = 6;

    /**
        * 
        * @brief 滤波器类型：使图像更柔滑，用arg1设定柔滑级别
        * 
        * 
        */
    export const SMOOTH = 7;

    /**
        * 
        * @brief 滤波器类型：改变图像的亮度，用arg1设定亮度级别，取值范围是-255~255
        * 
        * 
        */
    export const BRIGHTNESS = 8;

    /**
        * 
        * @brief 滤波器类型：改变图像的对比度，用arg1设定对比度级别，取值范围是0~100
        * 
        * 
        */
    export const CONTRAST = 9;

    /**
        * 
        * @brief 滤波器类型：改变图像的色调，用arg1、arg2、arg3分别指定red、blue、green，每种颜色范围是0~255，arg4为透明度，取值返回是0~127
        * 
        * 
        */
    export const COLORIZE = 10;

    /**
        * 
        * @brief 创建一个新图像
        * @param width 指定图像宽度
        * @param height 指定图像高度
        * @param color 指定图像类型，允许值为 gd.TRUECOLOR 或 gd.PALETTE
        * @return 返回创建成功的图像对象
        * 
        * 
        * @async
        */
    export function create(width: number, height: number, color?: number/** = undefined*/): Image;

    /**
        * 
        * @brief 从格式数据中解码图像
        * @param data 给定解码的图像数据
        * @return 返回解码成功的图像对象
        * 
        * 
        * @async
        */
    export function load(data: Buffer): Image;

    /**
        * 
        * @brief 从流对象中解码图像
        * @param stm 给定图像数据所在的流对象
        * @return 返回解码成功的图像对象
        * 
        * 
        * @async
        */
    export function load(stm: SeekableStream): Image;

    /**
        * 
        * @brief 从指定文件中解码图像
        * @param fname 指定文件名
        * @return 返回解码成功的图像对象
        * 
        * 
        * @async
        */
    export function load(fname: string): Image;

    /**
        * 
        * @brief 通过 rgb 颜色分量生成组合颜色
        * @param red 红色分量，范围为 0-255
        * @param green 绿色分量，范围为 0-255
        * @param blue 蓝色分量，范围为 0-255
        * @return 返回组合颜色
        * 
        * 
        * 
        */
    export function rgb(red: number, green: number, blue: number): number;

    /**
        * 
        * @brief 通过 rgba 颜色分量生成组合颜色
        * @param red 红色分量，范围为 0-255
        * @param green 绿色分量，范围为 0-255
        * @param blue 蓝色分量，范围为 0-255
        * @param alpha 透明分量，范围为 0.0-1.0
        * @return 返回组合颜色
        * 
        * 
        * 
        */
    export function rgba(red: number, green: number, blue: number, alpha: number): number;

    /**
        * 
        * @brief 通过 hsl 颜色分量生成组合颜色
        * @param hue 色相分量，范围为 0-360
        * @param saturation 饱和度分量，范围为 0.0-1.0
        * @param lightness 亮度分量，范围为 0.0-1.0
        * @return 返回组合颜色
        * 
        * 
        * 
        */
    export function hsl(hue: number, saturation: number, lightness: number): number;

    /**
        * 
        * @brief 通过 hsla 颜色分量生成组合颜色
        * @param hue 色相分量，范围为 0-360
        * @param saturation 饱和度分量，范围为 0.0-1.0
        * @param lightness 亮度分量，范围为 0.0-1.0
        * @param alpha 透明分量，范围为 0.0-1.0
        * @return 返回组合颜色
        * 
        * 
        * 
        */
    export function hsla(hue: number, saturation: number, lightness: number, alpha: number): number;

    /**
        * 
        * @brief 通过 hsb 颜色分量生成组合颜色
        * @param hue 色相分量，范围为 0-360
        * @param saturation 饱和度分量，范围为 0.0-1.0
        * @param brightness 明亮程度分量，范围为 0.0-1.0
        * @return 返回组合颜色
        * 
        * 
        * 
        */
    export function hsb(hue: number, saturation: number, brightness: number): number;

    /**
        * 
        * @brief 通过 hsba 颜色分量生成组合颜色
        * @param hue 色相分量，范围为 0-360
        * @param saturation 饱和度分量，范围为 0.0-1.0
        * @param brightness 明亮程度分量，范围为 0.0-1.0
        * @param alpha 透明分量，范围为 0.0-1.0
        * @return 返回组合颜色
        * 
        * 
        * 
        */
    export function hsba(hue: number, saturation: number, brightness: number, alpha: number): number;

    /**
        * 
        * @brief 通过字符串生成组合颜色
        * @param color 指定颜色的字符串，如："#ff0000", "ff0000", "#f00", "f00"
        * @return 返回组合颜色
        * 
        * 
        * 
        */
    export function color(color: string): number;

    interface Image {

        /**
            * 
            * @brief 按照指定的格式返回图像数据
            * @param format 指定返回数据的格式，允许值为 gd.PNG, gd.JPEG, gd.GIF, gd.BMP, gd.WEBP, 缺省为 gd.PNG
            * @param quality 当格式为 gd.JPEG 或 gd.WEBP 时用于指定压缩质量，缺省为 85，其他格式忽略此参数
            * @return 返回格式化的数据
            * 
            * 
            * @async
            */
        getData(format?: number/** = undefined*/, quality?: number/** = 85*/): Buffer;

        /**
            * 
            * @brief 按照指定的格式将图像数据存入流对象
            * @param stm 指定要存入的流对象
            * @param format 指定返回数据的格式，允许值为 gd.PNG, gd.JPEG, gd.GIF, gd.BMP, gd.WEBP, 缺省为 gd.PNG
            * @param quality 当格式为 gd.JPEG 或 gd.WEBP 时用于指定压缩质量，缺省为 85，其他格式忽略此参数
            * 
            * 
            * @async
            */
        save(stm: FibJS.Stream, format?: number/** = undefined*/, quality?: number/** = 85*/): void;

        /**
            * 
            * @brief 按照指定的格式将图像数据存入指定文件，文件将被强制覆盖
            * @param fname 指定文件名
            * @param format 指定返回数据的格式，允许值为 gd.PNG, gd.JPEG, gd.GIF, gd.BMP, gd.WEBP, 缺省为 gd.PNG
            * @param quality 当格式为 gd.JPEG 时用于指定压缩质量，缺省为 85，其他格式忽略此参数
            * 
            * 
            * @async
            */
        save(fname: string, format?: number/** = undefined*/, quality?: number/** = 85*/): void;

        /**
            * 
            * @brief 为指定的颜色申请一个颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
            * @param red 红色分量，范围为 0-255
            * @param green 绿色分量，范围为 0-255
            * @param blue 蓝色分量，范围为 0-255
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorAllocate(red: number, green: number, blue: number): number;

        /**
            * 
            * @brief 为指定的颜色申请一个颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
            * @param color 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorAllocate(color: number): number;

        /**
            * 
            * @brief 为指定的颜色及透明申请一个颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
            * @param red 红色分量，范围为 0-255
            * @param green 绿色分量，范围为 0-255
            * @param blue 蓝色分量，范围为 0-255
            * @param alpha 透明分量，范围为 0-1.0
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorAllocateAlpha(red: number, green: number, blue: number, alpha: number): number;

        /**
            * 
            * @brief 为指定的颜色及透明申请一个颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
            * @param color 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorAllocateAlpha(color: number): number;

        /**
            * 
            * @brief 为指定的颜色查找一个最接近的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
            * @param red 红色分量，范围为 0-255
            * @param green 绿色分量，范围为 0-255
            * @param blue 蓝色分量，范围为 0-255
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorClosest(red: number, green: number, blue: number): number;

        /**
            * 
            * @brief 为指定的颜色查找一个最接近的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
            * @param color 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorClosest(color: number): number;

        /**
            * 
            * @brief 为指定的颜色查找一个最接近的颜色号，此方法使用 Hue/White/Black 计算查找最接近颜色，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
            * @param red 红色分量，范围为 0-255
            * @param green 绿色分量，范围为 0-255
            * @param blue 蓝色分量，范围为 0-255
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorClosestHWB(red: number, green: number, blue: number): number;

        /**
            * 
            * @brief 为指定的颜色查找一个最接近的颜色号，此方法使用 Hue/White/Black 计算查找最接近颜色，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
            * @param color 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorClosestHWB(color: number): number;

        /**
            * 
            * @brief 为指定的颜色及透明查找一个最接近的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
            * @param red 红色分量，范围为 0-255
            * @param green 绿色分量，范围为 0-255
            * @param blue 蓝色分量，范围为 0-255
            * @param alpha 透明分量，范围为 0-1.0
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorClosestAlpha(red: number, green: number, blue: number, alpha: number): number;

        /**
            * 
            * @brief 为指定的颜色及透明查找一个最接近的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
            * @param color 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorClosestAlpha(color: number): number;

        /**
            * 
            * @brief 查找指定的颜色对应的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
            * @param red 红色分量，范围为 0-255
            * @param green 绿色分量，范围为 0-255
            * @param blue 蓝色分量，范围为 0-255
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorExact(red: number, green: number, blue: number): number;

        /**
            * 
            * @brief 查找指定的颜色对应的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
            * @param color 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorExact(color: number): number;

        /**
            * 
            * @brief 查找指定的颜色及透明对应的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
            * @param red 红色分量，范围为 0-255
            * @param green 绿色分量，范围为 0-255
            * @param blue 蓝色分量，范围为 0-255
            * @param alpha 透明分量，范围为 0-1.0
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorExactAlpha(red: number, green: number, blue: number, alpha: number): number;

        /**
            * 
            * @brief 查找指定的颜色及透明对应的颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
            * @param color 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorExactAlpha(color: number): number;

        /**
            * 
            * @brief 查找指定的颜色对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
            * @param red 红色分量，范围为 0-255
            * @param green 绿色分量，范围为 0-255
            * @param blue 蓝色分量，范围为 0-255
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorResolve(red: number, green: number, blue: number): number;

        /**
            * 
            * @brief 查找指定的颜色对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgb 编码数值
            * @param color 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorResolve(color: number): number;

        /**
            * 
            * @brief 查找指定的颜色及透明对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
            * @param red 红色分量，范围为 0-255
            * @param green 绿色分量，范围为 0-255
            * @param blue 蓝色分量，范围为 0-255
            * @param alpha 透明分量，范围为 0-1.0
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorResolveAlpha(red: number, green: number, blue: number, alpha: number): number;

        /**
            * 
            * @brief 查找指定的颜色及透明对应的颜色号，如果颜色不存在，则为其申请一个新颜色号，对于 gd.PALETTE 图像，颜色号为调色板索引，对于 gd.TRUECOLOR 图像，颜色号为 rgba 编码数值
            * @param color 组合颜色值，可由 gd.color, gb.rgb, gd.rgba 等函数生成
            * @return 返回颜色号，不成功返回 -1
            * 
            * 
            * 
            */
        colorResolveAlpha(color: number): number;

        /**
            * 
            * @brief 释放指定的颜色号，释放的颜色号将会被再次申请后替换
            * @param color 指定要释放的颜色号
            * 
            * 
            * 
            */
        colorDeallocate(color: number): void;

        /**
            * 
            * @brief 设定绘图的剪切窗口，设定后，所有的绘制将被剪切在窗口内部
            * @param x1 剪切窗口的左上 x 坐标
            * @param y1 剪切窗口的左上 y 坐标
            * @param x2 剪切窗口的右下 x 坐标
            * @param y2 剪切窗口的右下 y 坐标
            * 
            * 
            * 
            */
        clip(x1: number, y1: number, x2: number, y2: number): void;

        /**
            * 
            * @brief 查询指定位置点的颜色
            * @param x 指定查询的 x 坐标
            * @param y 指定查询的 y 坐标
            * @return 返回指定点的颜色号
            * 
            * 
            * 
            */
        getPixel(x: number, y: number): number;

        /**
            * 
            * @brief 查询指定位置点的真彩色颜色
            * @param x 指定查询的 x 坐标
            * @param y 指定查询的 y 坐标
            * @return 返回指定点的颜色号
            * 
            * 
            * 
            */
        getTrueColorPixel(x: number, y: number): number;

        /**
            * 
            * @brief 在指定位置画一个点
            * @param x 指定画点的 x 坐标
            * @param y 指定画点的 y 坐标
            * @param color 指定画点的颜色号
            * 
            * 
            * 
            */
        setPixel(x: number, y: number, color: number): void;

        /**
            * 
            * @brief 设定画线的宽度，line, rectangle, arc 等方法画线时缺省宽度为一个像素，可使用此方法改变线的宽度
            * @param thickness 画线的宽度
            * 
            * 
            * 
            */
        setThickness(thickness: number): void;

        /**
            * 
            * @brief 在指定的位置画一条线
            * @param x1 指定画线的起始 x 坐标
            * @param y1 指定画线的起始 y 坐标
            * @param x2 指定画线的结束 x 坐标
            * @param y2 指定画线的结束 y 坐标
            * @param color 指定画线的颜色号
            * 
            * 
            * 
            */
        line(x1: number, y1: number, x2: number, y2: number, color: number): void;

        /**
            * 
            * @brief 在指定的位置画一个矩形
            * @param x1 指定左上角 x 坐标
            * @param y1 指定左上角 y 坐标
            * @param x2 指定右下角 x 坐标
            * @param y2 指定右下角 y 坐标
            * @param color 指定矩形的颜色号
            * 
            * 
            * 
            */
        rectangle(x1: number, y1: number, x2: number, y2: number, color: number): void;

        /**
            * 
            * @brief 在指定的位置画一个填充的矩形
            * @param x1 指定左上角 x 坐标
            * @param y1 指定左上角 y 坐标
            * @param x2 指定右下角 x 坐标
            * @param y2 指定右下角 y 坐标
            * @param color 指定矩形的颜色号
            * 
            * 
            * 
            */
        filledRectangle(x1: number, y1: number, x2: number, y2: number, color: number): void;

        /**
            * 
            * @brief 根据给定的点绘制一个多边形
            * @param points 包含多边形点的数组，如 [[1, 1], [1, 10], [10, 15], [10, 20]]
            * @param color 指定矩形的颜色号
            * 
            * 
            * 
            */
        polygon(points: any[], color: number): void;

        /**
            * 
            * @brief 根据给定的点绘制一个开放多边形
            * @param points 包含多边形点的数组，如 [[1, 1], [1, 10], [10, 15], [10, 20]]
            * @param color 指定矩形的颜色号
            * 
            * 
            * 
            */
        openPolygon(points: any[], color: number): void;

        /**
            * 
            * @brief 根据给定的点绘制一个填充多边形
            * @param points 包含多边形点的数组，如 [[1, 1], [1, 10], [10, 15], [10, 20]]
            * @param color 指定矩形的颜色号
            * 
            * 
            * 
            */
        filledPolygon(points: any[], color: number): void;

        /**
            * 
            * @brief 画一个椭圆
            * @param x 椭圆中心的 x 坐标
            * @param y 椭圆中心的 y 坐标
            * @param width 椭圆的宽度
            * @param height 椭圆的高度
            * @param color 指定矩形的颜色号
            * 
            * 
            * 
            */
        ellipse(x: number, y: number, width: number, height: number, color: number): void;

        /**
            * 
            * @brief 画一个填充的椭圆
            * @param x 椭圆中心的 x 坐标
            * @param y 椭圆中心的 y 坐标
            * @param width 椭圆的宽度
            * @param height 椭圆的高度
            * @param color 指定矩形的颜色号
            * 
            * 
            * 
            */
        filledEllipse(x: number, y: number, width: number, height: number, color: number): void;

        /**
            * 
            * @brief 画一个扇形
            * @param x 扇形中心的 x 坐标
            * @param y 扇形中心的 y 坐标
            * @param width 扇形所在椭圆的宽度
            * @param height 扇形所在椭圆的高度
            * @param start 扇形开始的角度，范围为 0-360
            * @param end 扇形结束的角度，范围为 0-360
            * @param color 指定矩形的颜色号
            * 
            * 
            * 
            */
        arc(x: number, y: number, width: number, height: number, start: number, end: number, color: number): void;

        /**
            * 
            * @brief 画一个填充扇形
            * @param x 扇形中心的 x 坐标
            * @param y 扇形中心的 y 坐标
            * @param width 扇形所在椭圆的宽度
            * @param height 扇形所在椭圆的高度
            * @param start 扇形开始的角度，范围为 0-360
            * @param end 扇形结束的角度，范围为 0-360
            * @param color 指定矩形的颜色号
            * @param style 指定扇形的样式，允许的值有 gd.ARC, gd.CHORD, gd.NOFILL, gd.EDGED 及其组合
            * 
            * 
            * 
            */
        filledArc(x: number, y: number, width: number, height: number, start: number, end: number, color: number, style?: number/** = undefined*/): void;

        /**
            * 
            * @brief 从指定的点开始填充封闭区域
            * @param x 开始填充的 x 坐标
            * @param y 开始填充的 y 坐标
            * @param color 指定填充的颜色号
            * 
            * 
            * 
            */
        fill(x: number, y: number, color: number): void;

        /**
            * 
            * @brief 从指定的点开始在指定颜色的边框内填充封闭区域
            * @param x 开始填充的 x 坐标
            * @param y 开始填充的 y 坐标
            * @param borderColor 指定边框的颜色号
            * @param color 指定填充的颜色号
            * 
            * 
            * 
            */
        fillToBorder(x: number, y: number, borderColor: number, color: number): void;

        /**
            * 
            * @brief 替换图像中指定的颜色为新颜色
            * @param src 指定要替换的颜色
            * @param dst 指定新颜色
            * 
            * 
            * @async
            */
        colorReplace(src: number, dst: number): void;

        /**
            * 
            * @brief 复制当前图像为一个新图像
            * @return 返回复制的新图像对象
            * 
            * 
            * @async
            */
        clone(): Image;

        /**
            * 
            * @brief 根据图像拉伸生成一个新尺寸的图像
            * @param width 指定拉伸的宽度
            * @param height 指定拉伸的高度
            * @return 返回新图像对象
            * 
            * 
            * @async
            */
        resample(width: number, height: number): Image;

        /**
            * 
            * @brief 剪切图像的一部分为一个新的图像
            * @param x 剪切窗口的左上 x 坐标
            * @param y 剪切窗口的左上 y 坐标
            * @param width 剪切窗口的宽度
            * @param height 剪切窗口的高度
            * @return 返回剪切出的图像
            * 
            * 
            * @async
            */
        crop(x: number, y: number, width: number, height: number): Image;

        /**
            * 
            * @brief 镜像当前图像
            * @param dir 镜像方向，允许值为 gd.BOTH,gd.HORIZONTAL, gd.VERTICAL, 缺省为 gd.HORIZONTAL
            * 
            * 
            * @async
            */
        flip(dir?: number/** = undefined*/): void;

        /**
            * 
            * @brief 旋转当前图像
            * @param dir 旋转方向，允许值为 gd.LEFT, gd.RIGHT
            * 
            * 
            * @async
            */
        rotate(dir: number): void;

        /**
            * 
            * @brief 转换当前图像类型
            * @param color 指定图像类型，允许值为 gd.TRUECOLOR 或 gd.PALETTE
            * 
            * 
            * @async
            */
        convert(color?: number/** = undefined*/): void;

        /**
            * 
            * @brief 从一个图像中复制一个区域到指定的位置
            * @param source 源图像对象
            * @param dstX 指定复制目标的 x 坐标
            * @param dstY 指定复制目标的 y 坐标
            * @param srcX 指定复制源左上角的 x 坐标
            * @param srcY 指定复制源左上角的 y 坐标
            * @param width 指定复制的宽度
            * @param height 指定复制的高度
            * 
            * 
            * @async
            */
        copy(source: Image, dstX: number, dstY: number, srcX: number, srcY: number, width: number, height: number): void;

        /**
            * 
            * @brief 从一个图像中复制一个区域覆盖到指定的位置
            * @param source 源图像对象
            * @param dstX 指定复制目标的 x 坐标
            * @param dstY 指定复制目标的 y 坐标
            * @param srcX 指定复制源左上角的 x 坐标
            * @param srcY 指定复制源左上角的 y 坐标
            * @param width 指定复制的宽度
            * @param height 指定复制的高度
            * @param percent 指定覆盖的透明度
            * 
            * 
            * @async
            */
        copyMerge(source: Image, dstX: number, dstY: number, srcX: number, srcY: number, width: number, height: number, percent: number): void;

        /**
            * 
            * @brief 从一个图像中复制一个区域的灰度覆盖到指定的位置
            * @param source 源图像对象
            * @param dstX 指定复制目标的 x 坐标
            * @param dstY 指定复制目标的 y 坐标
            * @param srcX 指定复制源左上角的 x 坐标
            * @param srcY 指定复制源左上角的 y 坐标
            * @param width 指定复制的宽度
            * @param height 指定复制的高度
            * @param percent 指定覆盖的透明度
            * 
            * 
            * @async
            */
        copyMergeGray(source: Image, dstX: number, dstY: number, srcX: number, srcY: number, width: number, height: number, percent: number): void;

        /**
            * 
            * @brief 将一个图像中的一个区域拉伸后复制到指定的位置
            * @param source 源图像对象
            * @param dstX 指定复制目标的 x 坐标
            * @param dstY 指定复制目标的 y 坐标
            * @param srcX 指定复制源左上角的 x 坐标
            * @param srcY 指定复制源左上角的 y 坐标
            * @param dstW 指定复制的拉伸宽度
            * @param dstH 指定复制的拉伸高度
            * @param srcW 指定复制的源宽度
            * @param srcH 指定复制的源高度
            * 
            * 
            * @async
            */
        copyResized(source: Image, dstX: number, dstY: number, srcX: number, srcY: number, dstW: number, dstH: number, srcW: number, srcH: number): void;

        /**
            * 
            * @brief 将一个图像中的一个区域拉伸后复制到指定的位置，不同与 copyResized，此方法拉伸时会对图像进行抖动
            * @param source 源图像对象
            * @param dstX 指定复制目标的 x 坐标
            * @param dstY 指定复制目标的 y 坐标
            * @param srcX 指定复制源左上角的 x 坐标
            * @param srcY 指定复制源左上角的 y 坐标
            * @param dstW 指定复制的拉伸宽度
            * @param dstH 指定复制的拉伸高度
            * @param srcW 指定复制的源宽度
            * @param srcH 指定复制的源高度
            * 
            * 
            * @async
            */
        copyResampled(source: Image, dstX: number, dstY: number, srcX: number, srcY: number, dstW: number, dstH: number, srcW: number, srcH: number): void;

        /**
            * 
            * @brief 将一个图像中的一个区域旋转后复制到指定的位置
            * @param source 源图像对象
            * @param dstX 指定复制目标的 x 坐标
            * @param dstY 指定复制目标的 y 坐标
            * @param srcX 指定复制源左上角的 x 坐标
            * @param srcY 指定复制源左上角的 y 坐标
            * @param width 指定复制的宽度
            * @param height 指定复制的高度
            * @param angle 指定旋转的角度
            * 
            * 
            * @async
            */
        copyRotated(source: Image, dstX: number, dstY: number, srcX: number, srcY: number, width: number, height: number, angle: number): void;

        /**
            * 
            * @brief 把过滤器 filterType应用到图像上，根据过滤器类型传入所需参数
            * 
            * 参数 filterType 可以为以下数值：
            * - MEAN_REMOVAL,    用平均移除法来达到轮廓效果
            * - EDGEDETECT,      用边缘检测来突出图像的边缘
            * - EMBOSS,          使图像浮雕化
            * - SELECTIVE_BLUR,  模糊图像
            * - GAUSSIAN_BLUR,   用高斯算法模糊图像
            * - NEGATE,          将图像中所有颜色反转
            * - GRAYSCALE,       将图像转换为灰度图
            * - SMOOTH,          使图像更柔滑，用arg1设定柔滑级别
            * - BRIGHTNESS,      改变图像的亮度，用arg1设定亮度级别，取值范围是-255~255
            * - CONTRAST,        改变图像的对比度，用arg1设定对比度级别，取值范围是0~100
            * - COLORIZE,        改变图像的色调，用arg1、arg2、arg3分别指定red、blue、green分值，每种颜色范围是0~255，arg4为透明度，取值返回是0~127
            * @param filterType 过滤器类型
            * @param arg1 过滤器所需参数: SMOOTH 的平滑级别、BRIGHTNESS 的亮度级别、CONTRAST 的对比度级别、COLORIZE 的 red 分值
            * @param arg2 过滤器所需参数: COLORIZE 的 green 分值
            * @param arg3 过滤器所需参数: COLORIZE 的 blue 分值
            * @param arg4 过滤器所需参数: COLORIZE 的透明度 alpha 分值
            * 
            * 
            * @async
            */
        filter(filterType: number, arg1?: number/** = 0*/, arg2?: number/** = 0*/, arg3?: number/** = 0*/, arg4?: number/** = 0*/): void;

        /**
            * 
            * @brief 根据给定的矩阵，对当前图像进行仿射
            * 
            * 参数 affine 是一个数组：
            * ```JavaScript
            * affine = [ a0, a1, b0, b1, a2, b2 ];
            * x' = a0x + a1y + a2;
            * y' = b0x + b1y + b2;
            * ```
            * @param affine 仿射矩阵，由  6 个 double 类型的数字组成
            * @param x 可选剪切区域的原点 x 坐标
            * @param y 可选剪切区域的原点 y 坐标
            * @param width 可选剪切区域的的宽度
            * @param height 可选剪切区域的的高度
            * @return 返回仿射后的图像
            * 
            * 
            * @async
            */
        affine(affine: any[], x?: number/** = -1*/, y?: number/** = -1*/, width?: number/** = -1*/, height?: number/** = -1*/): Image;

        /**
            * 
            * @brief 对当前图像进行高斯模糊处理
            * @param radius 模糊半径
            * 
            * 
            * @async
            */
        gaussianBlur(radius: number): void;
    }
}

declare module "http" {
    import { TcpServer } from "net";
    import { X509Cert, PKey } from "crypto";


    interface Message {

        /**
            * 
            * @brief 消息对象构造函数
            * 
            * 
            */
        constructor(): Message;

        /**
            * 
            * @brief 从流内读取指定大小的数据，此方法为 body 相应方法的别名
            * @param bytes 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备
            * @return 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null
            * 
            * 
            * @async
            */
        read(bytes?: number/** = -1*/): Buffer;

        /**
            * 
            * @brief 从流内读取剩余的全部数据，此方法为 body 相应方法的别名
            * @return 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null
            * 
            * 
            * @async
            */
        readAll(): Buffer;

        /**
            * 
            * @brief 写入给定的数据，此方法为 body 相应方法的别名
            * @param data 给定要写入的数据
            * 
            * 
            * @async
            */
        write(data: Buffer): void;

        /**
            * 
            * @brief 以 JSON 编码写入给定的数据
            * @param data 给定要写入的数据
            * @return 此方法不会返回数据
            * 
            * 
            * 
            */
        json(data: any): any;

        /**
            * 
            * @brief 以 JSON 编码解析消息中的数据
            * @return 返回解析的结果
            * 
            * 
            * 
            */
        json(): any;

        /**
            * 
            * @brief 设置当前消息处理结束，Chain 处理器不再继续后面的事务
            * 
            * 
            */
        end(): void;

        /**
            * 
            * @brief 查询当前消息是否结束
            * @return 结束则返回 true
            * 
            * 
            * 
            */
        isEnded(): boolean;

        /**
            * 
            * @brief 清除消息的内容
            * 
            * 
            */
        clear(): void;

        /**
            * 
            * @brief 发送格式化消息到给定的流对象
            * @param stm 指定接收格式化消息的流对象
            * 
            * 
            * @async
            */
        sendTo(stm: FibJS.Stream): void;

        /**
            * 
            * @brief 从给定的缓存流对象中读取格式化消息，并解析填充对象
            * @param stm 指定读取格式化消息的流对象
            * 
            * 
            * @async
            */
        readFrom(stm: FibJS.Stream): void;
    }

    interface HttpMessage extends Message {

        /**
            * 
            * @brief 检查是否存在指定键值的消息头
            * @param name 指定要检查的键值
            * @return 返回键值是否存在
            * 
            * 
            * 
            */
        hasHeader(name: string): boolean;

        /**
            * 
            * @brief 查询指定键值的第一个消息头
            * @param name 指定要查询的键值
            * @return 返回键值所对应的值，若不存在，则返回 undefined
            * 
            * 
            * 
            */
        firstHeader(name: string): any;

        /**
            * 
            * @brief 查询指定键值的全部消息头
            * @param name 指定要查询的键值
            * @return 返回键值所对应全部值的数组，若数据不存在，则返回 null
            * 
            * 
            * 
            */
        allHeader(name: string): any[];

        /**
            * 
            * @brief 添加一个消息头，添加数据并不修改已存在的键值的消息头
            * @param map 指定要添加的键值数据字典
            * 
            * 
            * 
            */
        addHeader(map: Object): void;

        /**
            * 
            * @brief 添加一个消息头，添加数据并不修改已存在的键值的消息头
            * @param name 指定要添加的键值
            * @param value 指定要添加的数据
            * 
            * 
            * 
            */
        addHeader(name: string, value: any): void;

        /**
            * 
            * @brief 设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头
            * @param map 指定要设定的键值数据字典
            * 
            * 
            * 
            */
        setHeader(map: Object): void;

        /**
            * 
            * @brief 设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头
            * @param name 指定要设定的键值
            * @param value 指定要设定的数据
            * 
            * 
            * 
            */
        setHeader(name: string, value: any): void;

        /**
            * 
            * @brief 删除指定键值的全部消息头
            * @param name 指定要删除的键值
            * 
            * 
            * 
            */
        removeHeader(name: string): void;
    }

    interface HttpRequest extends HttpMessage {

        /**
            * 
            * @brief HttpRequest 构造函数，创建一个新的 HttpRequest 对象
            * 
            * 
            */
        constructor(): HttpRequest;
    }

    interface HttpResponse extends HttpMessage {

        /**
            * 
            * @brief HttpResponse 构造函数，创建一个新的 HttpResponse 对象
            * 
            * 
            */
        constructor();

        /**
            * 
            * @brief 设置响应消息的返回状态，返回消息，并添加响应头
            * @param statusCode 指定响应消息的返回状态
            * @param statusMessage 指定响应消息的返回消息
            * @param headers 指定响应消息添加的响应头
            * 
            * 
            * 
            */
        writeHead(statusCode: number, statusMessage: string, headers?: Object/** = v8::Object::New(isolate)*/): void;

        /**
            * 
            * @brief 设置响应消息的返回状态，返回消息，并添加响应头
            * @param statusCode 指定响应消息的返回状态
            * @param headers 指定响应消息添加的响应头
            * 
            * 
            * 
            */
        writeHead(statusCode: number, headers?: Object/** = v8::Object::New(isolate)*/): void;

        /**
            * 
            * @brief 向 cookies 添加一个 HttpCookie 对象
            * @param cookie 指定要添加的 HttpCookie 对象
            * 
            * 
            * 
            */
        addCookie(cookie: HttpCookie): void;

        /**
            * 
            * @brief 发送重定向到客户端
            * @param url 重定向的地址
            * 
            * 
            * 
            */
        redirect(url: string): void;

        /**
            * 
            * @brief 仅发送格式化 http 头到给定的流对象
            * @param stm 指定接收格式化消息的流对象
            * 
            * 
            * @async
            */
        sendHeader(stm: FibJS.Stream): void;
    }

    interface HttpCookie {

        /**
            * 
            * @brief HttpCookie 构造函数，创建一个新的 HttpCookie 对象
            * @param opts 指定创建的 cookie 的属性
            * 
            * 
            * 
            */
        constructor(opts?: Object/** = v8::Object::New(isolate)*/);

        /**
            * 
            * @brief HttpCookie 构造函数，创建一个新的 HttpCookie 对象
            * @param name 指定创建的 cookie 名称
            * @param value 指定创建的 cookie 值
            * @param opts 指定创建的 cookie 的其它属性
            * 
            * 
            * 
            */
        constructor(name: string, value: string, opts?: Object/** = v8::Object::New(isolate)*/);

        /**
            * 
            * @brief 解析给定的字符串，填充 cookie 对象
            * @param header 指定需要解析的 header 字符串
            * 
            * 
            * 
            */
        parse(header: string): void;

        /**
            * 
            * @brief 检测给定的 url 是否匹配当前设置
            * @param url 指定测试的 url
            * @return 匹配成功返回 true
            * 
            * 
            * 
            */
        match(url: string): boolean;
    }

    interface HttpServer extends TcpServer {
        /**
                * 
                * @brief HttpServer 构造函数，在所有本机地址侦听
                * @param port 指定 http 服务器侦听端口
                * @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
                * 
                * 
                * 
                */
        new(port: number, hdlr: FibJS.Handler);

        /**
            * 
            * @brief HttpServer 构造函数
            * @param addr 指定 http 服务器侦听地址，为 "" 则在本机所有地址侦听
            * @param port 指定 http 服务器侦听端口
            * @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * 
            * 
            * 
            */
        constructor(addr: string, port: number, hdlr: FibJS.Handler);

        /**
            * 
            * @brief 设置错误处理器
            * 
            * 使用方式：
            * ```JavaScript
            * hdlr.onerror({
            * "404": function(v)
            * {
            * ...
            * },
            * "500": new mq.Routing(...)
            * })
            * ```
            * @param hdlrs 指定不同的错误的处理器，key 是错误号，value 是处理器，可以是内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * 
            * 
            * 
            */
        onerror(hdlrs: Object): void;

        /**
            * 
            * @brief 允许跨域请求
            * @param allowHeaders 指定接受的 http 头字段
            * 
            * 
            * 
            */
        enableCrossOrigin(allowHeaders?: string/** = "Content-Type"*/): void;

    }

    interface HttpClient {

        /**
            * 
            * @brief HttpClient 构造函数，创建一个新的HttpClient对象
            * 
            * 
            */
        constructor();

        /**
            * 
            * @brief 发送 http 请求到指定的流对象，并返回结果
            * @param conn 指定处理请求的流对象
            * @param req 要发送的 HttpRequest 对象
            * @return 返回服务器响应
            * 
            * 
            * @async
            */
        request(conn: FibJS.Stream, req: HttpRequest): HttpResponse;

        /**
            * 
            * @brief 请求指定的 url，并返回结果
            * opts 包含请求的附加选项，支持的内容如下：
            * ```JavaScript
            * {
            * "query": {},
            * "body": SeekedStream | Buffer | String | {},
            * "json": {},
            * "headers": {}
            * }
            * ```
            * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
            * @param method 指定 http 请求方法：GET, POST 等
            * @param url 指定 url，必须是包含主机的完整 url
            * @param opts 指定附加信息
            * @return 返回服务器响应
            * 
            * 
            * @async
            */
        request(method: string, url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

        /**
            * 
            * @brief 用 GET 方法请求指定的 url，并返回结果，等同于 request("GET", ...)
            * opts 包含请求的附加选项，支持的内容如下：
            * ```JavaScript
            * {
            * "query": {},
            * "body": SeekedStream | Buffer | String | {},
            * "json": {},
            * "headers": {}
            * }
            * ```
            * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
            * @param url 指定 url，必须是包含主机的完整 url
            * @param opts 指定附加信息
            * @return 返回服务器响应
            * 
            * 
            * @async
            */
        get(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

        /**
            * 
            * @brief 用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)
            * opts 包含请求的附加选项，支持的内容如下：
            * ```JavaScript
            * {
            * "query": {},
            * "body": SeekedStream | Buffer | String | {},
            * "json": {},
            * "headers": {}
            * }
            * ```
            * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
            * @param url 指定 url，必须是包含主机的完整 url
            * @param opts 指定附加信息
            * @return 返回服务器响应
            * 
            * 
            * @async
            */
        post(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

        /**
            * 
            * @brief 用 DELETE 方法请求指定的 url，并返回结果，等同于 request("DELETE", ...)
            * opts 包含请求的附加选项，支持的内容如下：
            * ```JavaScript
            * {
            * "query": {},
            * "body": SeekedStream | Buffer | String | {},
            * "json": {},
            * "headers": {}
            * }
            * ```
            * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
            * @param url 指定 url，必须是包含主机的完整 url
            * @param opts 指定附加信息
            * @return 返回服务器响应
            * 
            * 
            * @async
            */
        del(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

        /**
            * 
            * @brief 用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)
            * opts 包含请求的附加选项，支持的内容如下：
            * ```JavaScript
            * {
            * "query": {},
            * "body": SeekedStream | Buffer | String | {},
            * "json": {},
            * "headers": {}
            * }
            * ```
            * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
            * @param url 指定 url，必须是包含主机的完整 url
            * @param opts 指定附加信息
            * @return 返回服务器响应
            * 
            * 
            * @async
            */
        put(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

        /**
            * 
            * @brief 用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)
            * opts 包含请求的附加选项，支持的内容如下：
            * ```JavaScript
            * {
            * "query": {},
            * "body": SeekedStream | Buffer | String | {},
            * "json": {},
            * "headers": {}
            * }
            * ```
            * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
            * @param url 指定 url，必须是包含主机的完整 url
            * @param opts 指定附加信息
            * @return 返回服务器响应
            * 
            * 
            * @async
            */
        patch(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;
    }

    interface HttpsServer extends HttpServer {

        /**
            * 
            * @brief HttpsServer 构造函数，在所有本机地址侦听
            * 
            * certs 格式为：
            * ```JavaScript
            * [
            * {
            * crt: [X509Cert object],
            * key: [PKey object]
            * },
            * {
            * crt: [X509Cert object],
            * key: [PKey object]
            * }
            * ]
            * ```
            * @param certs 服务器证书列表
            * @param port 指定 http 服务器侦听端口
            * @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见
            * 
            * 
            * 
            */
        new(certs: any[], port: number, hdlr: FibJS.Handler);

        /**
            * 
            * @brief HttpsServer 构造函数
            * 
            * certs 格式为：
            * ```JavaScript
            * [
            * {
            * crt: [X509Cert object],
            * key: [PKey object]
            * },
            * {
            * crt: [X509Cert object],
            * key: [PKey object]
            * }
            * ]
            * ```
            * @param certs 服务器证书列表
            * @param addr 指定 http 服务器侦听地址，为 "" 则在本机所有地址侦听
            * @param port 指定 http 服务器侦听端口
            * @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见
            * 
            * 
            * 
            */
        new(certs: any[], addr: string, port: number, hdlr: FibJS.Handler);

        /**
            * 
            * @brief HttpsServer 构造函数，在所有本机地址侦听
            * @param crt X509Cert 证书，用于客户端验证服务器
            * @param key PKey 私钥，用于与客户端会话
            * @param port 指定 http 服务器侦听端口
            * @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见
            * 
            * 
            * 
            */
        new(crt: X509Cert, key: PKey, port: number, hdlr: FibJS.Handler);

        /**
            * 
            * @brief HttpsServer 构造函数
            * @param crt X509Cert 证书，用于客户端验证服务器
            * @param key PKey 私钥，用于与客户端会话
            * @param addr 指定 http 服务器侦听地址，为 "" 则在本机所有地址侦听
            * @param port 指定 http 服务器侦听端口
            * @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见
            * 
            * 
            * 
            */
        new(crt: X509Cert, key: PKey, addr: string, port: number, hdlr: FibJS.Handler);
    }

    interface HttpHandler extends FibJS.HandlerEx {

        /**
            * 
            * @brief 创建一个 http 协议处理器对象，将流对象的数据转变为 http 消息对象
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * 
            * 
            * 
            */
        new(hdlr: FibJS.Handler);

        /**
            * 
            * @brief 允许跨域请求
            * @param allowHeaders 指定接受的 http 头字段
            * 
            * 
            * 
            */
        enableCrossOrigin(allowHeaders?: string/** = "Content-Type"*/): void;
    }

    /**
        * 
        * @brief 创建一个 http 请求对象，参见 HttpRequest
        * 
        * 
        */
    export const Request: HttpRequest;

    /**
        * 
        * @brief 创建一个 http 响应对象，参见 HttpResponse
        * 
        * 
        */
    export const Response: HttpResponse;

    /**
        * 
        * @brief 创建一个 http cookie 对象，参见 HttpCookie
        * 
        * 
        */
    export const Cookie: HttpCookie;

    /**
        * 
        * @brief 创建一个 http 服务器，参见 HttpServer
        * 
        * 
        */
    export const Server: HttpServer;

    /**
        * 
        * @brief 创建一个 http 客户端，参见 HttpClient
        * 
        * 
        */
    export const Client: HttpClient;

    /**
        * 
        * @brief 创建一个 https 服务器，参见 HttpsServer
        * 
        * 
        */
    export const HttpsServer: HttpsServer;

    /**
        * 
        * @brief 创建一个 http 协议处理器对象，参见 HttpHandler
        * 
        * 
        */
    export const Handler: HttpHandler;



    /**
        * 
        * @brief 创建一个 http 静态文件处理器，用以用静态文件响应 http 消息
        * 
        * fileHandler 支持 gzip 预压缩，当请求接受 gzip 编码，且相同路径下 filename.ext.gz 文件存在时，将直接返回此文件，
        * 从而避免重复压缩带来服务器负载。
        * @param root 文件根路径
        * @param mimes 扩展 mime 设置
        * @param autoIndex 是否支持浏览目录文件，缺省为 false，不支持
        * @return 返回一个静态文件处理器用于处理 http 消息
        * 
        * 
        * 
        */
    export function fileHandler(root: string, mimes?: Object/** = v8::Object::New(isolate)*/, autoIndex?: boolean/** = false*/): FibJS.Handler;

    /**
        * 
        * @brief 发送 http 请求到指定的流对象，并返回结果
        * @param conn 指定处理请求的流对象
        * @param req 要发送的 HttpRequest 对象
        * @return 返回服务器响应
        * 
        * 
        * @async
        */
    export function request(conn: FibJS.Stream, req: HttpRequest): HttpResponse;

    /**
        * 
        * @brief 请求指定的 url，并返回结果
        * opts 包含请求的附加选项，支持的内容如下：
        * ```JavaScript
        * {
        * "query": {},
        * "body": SeekedStream | Buffer | String | {},
        * "json": {},
        * "headers": {}
        * }
        * ```
        * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
        * @param method 指定 http 请求方法：GET, POST 等
        * @param url 指定 url，必须是包含主机的完整 url
        * @param opts 指定附加信息
        * @return 返回服务器响应
        * 
        * 
        * @async
        */
    export function request(method: string, url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

    /**
        * 
        * @brief 用 GET 方法请求指定的 url，并返回结果，等同于 request("GET", ...)
        * opts 包含请求的附加选项，支持的内容如下：
        * ```JavaScript
        * {
        * "query": {},
        * "body": SeekedStream | Buffer | String | {},
        * "json": {},
        * "headers": {}
        * }
        * ```
        * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
        * @param url 指定 url，必须是包含主机的完整 url
        * @param opts 指定附加信息
        * @return 返回服务器响应
        * 
        * 
        * @async
        */
    export function get(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

    /**
        * 
        * @brief 用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)
        * opts 包含请求的附加选项，支持的内容如下：
        * ```JavaScript
        * {
        * "query": {},
        * "body": SeekedStream | Buffer | String | {},
        * "json": {},
        * "headers": {}
        * }
        * ```
        * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
        * @param url 指定 url，必须是包含主机的完整 url
        * @param opts 指定附加信息
        * @return 返回服务器响应
        * 
        * 
        * @async
        */
    export function post(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

    /**
        * 
        * @brief 用 DELETE 方法请求指定的 url，并返回结果，等同于 request("DELETE", ...)
        * opts 包含请求的附加选项，支持的内容如下：
        * ```JavaScript
        * {
        * "query": {},
        * "body": SeekedStream | Buffer | String | {},
        * "json": {},
        * "headers": {}
        * }
        * ```
        * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
        * @param url 指定 url，必须是包含主机的完整 url
        * @param opts 指定附加信息
        * @return 返回服务器响应
        * 
        * 
        * @async
        */
    export function del(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

    /**
        * 
        * @brief 用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)
        * opts 包含请求的附加选项，支持的内容如下：
        * ```JavaScript
        * {
        * "query": {},
        * "body": SeekedStream | Buffer | String | {},
        * "json": {},
        * "headers": {}
        * }
        * ```
        * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
        * @param url 指定 url，必须是包含主机的完整 url
        * @param opts 指定附加信息
        * @return 返回服务器响应
        * 
        * 
        * @async
        */
    export function put(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

    /**
        * 
        * @brief 用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)
        * opts 包含请求的附加选项，支持的内容如下：
        * ```JavaScript
        * {
        * "query": {},
        * "body": SeekedStream | Buffer | String | {},
        * "json": {},
        * "headers": {}
        * }
        * ```
        * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
        * @param url 指定 url，必须是包含主机的完整 url
        * @param opts 指定附加信息
        * @return 返回服务器响应
        * 
        * 
        * @async
        */
    export function patch(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;
}

declare module "io" {
    import { Stat } from "fs";
    interface SeekableStream extends FibJS.Stream {

        /**
            * 
            * @brief 移动文件当前操作位置
            * @param offset 指定新的位置
            * @param whence 指定位置基准，允许的值为：SEEK_SET, SEEK_CUR, SEEK_END
            * 
            * 
            * 
            */
        seek(offset: number, whence: number): void;

        /**
            * 
            * @brief 查询流当前位置
            * @return 返回流当前位置
            * 
            * 
            * 
            */
        tell(): number;

        /**
            * 
            * @brief 移动当前位置到流开头
            * 
            * 
            */
        rewind(): void;

        /**
            * 
            * @brief 查询流尺寸
            * @return 返回流尺寸
            * 
            * 
            * 
            */
        size(): number;

        /**
            * 
            * @brief 从流内读取剩余的全部数据
            * @return 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null
            * 
            * 
            * @async
            */
        readAll(): Buffer;

        /**
            * 
            * @brief 修改文件尺寸，如果新尺寸小于原尺寸，则文件被截断
            * @param bytes 新的文件尺寸
            * 
            * 
            * @async
            */
        truncate(bytes: number): void;

        /**
            * 
            * @brief 查询文件是否到结尾
            * @return 返回 True 表示结尾
            * 
            * 
            * 
            */
        eof(): boolean;

        /**
            * 
            * @brief 查询当前文件的基础信息
            * @return 返回 Stat 对象描述文件信息
            * 
            * 
            * @async
            */
        stat(): Stat;
    }

    interface MemoryStream extends SeekableStream {

        /**
            * 
            * @brief MemoryStream 构造函数
            * 
            * 
            */
        new();

        /**
            * 
            * @brief 强制设定内存流对象的最后更新时间
            * @param d 指定要设定的时间
            * 
            * 
            * 
            */
        setTime(d: Date): void;

        /**
            * 
            * @brief 创建当前内存流的一个只读副本
            * @return 返回只读的内存流对象
            * 
            * 
            * 
            */
        clone(): MemoryStream;

        /**
            * 
            * @brief 清空内存文件数据，复位指针
            * 
            * 
            */
        clear(): void;
    }

    interface BufferedStream extends FibJS.Stream {

        /**
            * 
            * @brief BufferedStream 构造函数
            * @param stm BufferedStream 的二进制基础流对象
            * 
            * 
            * 
            */
        new(stm: FibJS.Stream);

        /**
            * 
            * @brief 读取指定字符的文本
            * @param size 指定读取的文本字符个数，以 utf8 或者指定的编码字节数为准
            * @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
            * 
            * 
            * @async
            */
        readText(size: number): string;

        /**
            * 
            * @brief 读取一行文本，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"
            * @param maxlen 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数
            * @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
            * 
            * 
            * @async
            */
        readLine(maxlen?: number/** = -1*/): string;

        /**
            * 
            * @brief 以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"
            * @param maxlines 指定此次读取的最大行数，缺省读取全部文本行
            * @return 返回读取的文本行数组，若无数据可读，或者连接中断，空数组
            * 
            * 
            * 
            */
        readLines(maxlines?: number/** = -1*/): any[];

        /**
            * 
            * @brief 读取一个文本字符串，以指定的字节为结尾
            * @param mk 指定结尾的字符串
            * @param maxlen 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数
            * @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
            * 
            * 
            * @async
            */
        readUntil(mk: string, maxlen?: number/** = -1*/): string;

        /**
            * 
            * @brief 写入一个字符串
            * @param txt 指定写入的字符串
            * 
            * 
            * @async
            */
        writeText(txt: string): void;

        /**
            * 
            * @brief 写入一个字符串，并写入换行符
            * @param txt 指定写入的字符串
            * 
            * 
            * @async
            */
        writeLine(txt: string): void;
    }
    /**
        * 
        * @brief 创建一个内存流对象，参见 MemoryStream
        * 
        * 
        */
    export const MemoryStream: MemoryStream;

    /**
        * 
        * @brief 创建一个缓存流读取对象，参见 BufferedStream
        * 
        * 
        */
    export const BufferedStream: BufferedStream;



    /**
        * 
        * @brief 复制流数据到目标流中
        * @param from 源流对象
        * @param to 目标流对象
        * @param bytes 复制的字节数
        * @return 返回复制的字节数
        * 
        * 
        * @async
        */
    export function copyStream(from: FibJS.Stream, to: FibJS.Stream, bytes?: number/** = -1*/): number;

    /**
        * 
        * @brief 双向复制流数据，直到流中无数据，或者流被关闭
        * @param stm1 流对象一
        * @param stm2 流对象二
        * 
        * 
        * @async
        */
    export function bridge(stm1: FibJS.Stream, stm2: FibJS.Stream): void;
}

declare module "mq" {
    import { Message, HttpHandler } from "http";

    interface Chain extends FibJS.Handler {

        /**
            * 
            * @brief 构造一个消息处理器链处理对象
            * @param hdlrs 处理器数组
            * 
            * 
            * 
            */
        new(hdlrs: any[]);

        /**
            * 
            * @brief 添加处理器数组
            * @param hdlrs 处理器数组
            * 
            * 
            * 
            */
        append(hdlrs: any[]): void;

        /**
            * 
            * @brief 添加处理器
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * 
            * 
            * 
            */
        append(hdlr: FibJS.Handler): void;
    }

    interface Routing extends FibJS.Handler {

        /**
            * 
            * @brief 创建一个消息处理器路由对象
            * @param map 初始化路由参数
            * 
            * 
            * 
            */
        new(map?: Object/** = v8::Object::New(isolate)*/);

        /**
            * 
            * @brief 创建一个消息处理器路由对象
            * @param method 指定 http 请求方法，"*" 接受所有方法
            * @param map 初始化路由参数
            * 
            * 
            * 
            */
        new(method: string, map: Object);

        /**
            * 
            * @brief 从已有路由对象中添加规则，添加后原路由将被清空
            * @param route 已经初始化的路由对象
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        append(route: Routing): Routing;

        /**
            * 
            * @brief 添加一组路由规则
            * @param map 路由参数
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        append(map: Object): Routing;

        /**
            * 
            * @brief 添加一条路由规则
            * @param pattern 消息匹配格式
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        append(pattern: string, hdlr: FibJS.Handler): Routing;

        /**
            * 
            * @brief 添加一条路由规则
            * @param method 指定 http 请求方法，"*" 接受所有方法
            * @param pattern 消息匹配格式
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        append(method: string, pattern: string, hdlr: FibJS.Handler): Routing;

        /**
            * 
            * @brief 添加一组接受所有 http 方法路由规则
            * @param map 路由参数
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        all(map: Object): Routing;

        /**
            * 
            * @brief 添加一条接受所有 http 方法路由规则
            * @param pattern 消息匹配格式
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        all(pattern: string, hdlr: FibJS.Handler): Routing;

        /**
            * 
            * @brief 添加一组 GET 方法路由规则
            * @param map 路由参数
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        get(map: Object): Routing;

        /**
            * 
            * @brief 添加一条接受 http GET 方法路由规则
            * @param pattern 消息匹配格式
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        get(pattern: string, hdlr: FibJS.Handler): Routing;

        /**
            * 
            * @brief 添加一组接受 http POST 方法路由规则
            * @param map 路由参数
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        post(map: Object): Routing;

        /**
            * 
            * @brief 添加一条接受 http POST 方法路由规则
            * @param pattern 消息匹配格式
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        post(pattern: string, hdlr: FibJS.Handler): Routing;

        /**
            * 
            * @brief 添加一组接受 http DELETE 方法路由规则
            * @param map 路由参数
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        del(map: Object): Routing;

        /**
            * 
            * @brief 添加一条接受 http DELETE 方法路由规则
            * @param pattern 消息匹配格式
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        del(pattern: string, hdlr: FibJS.Handler): Routing;

        /**
            * 
            * @brief 添加一组 PUT 方法路由规则
            * @param map 路由参数
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        put(map: Object): Routing;

        /**
            * 
            * @brief 添加一条接受 http PUT 方法路由规则
            * @param pattern 消息匹配格式
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        put(pattern: string, hdlr: FibJS.Handler): Routing;

        /**
            * 
            * @brief 添加一组 PATCH 方法路由规则
            * @param map 路由参数
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        patch(map: Object): Routing;

        /**
            * 
            * @brief 添加一条接受 http PATCH 方法路由规则
            * @param pattern 消息匹配格式
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        patch(pattern: string, hdlr: FibJS.Handler): Routing;

        /**
            * 
            * @brief 添加一组 FIND 方法路由规则
            * @param map 路由参数
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        find(map: Object): Routing;

        /**
            * 
            * @brief 添加一条接受 http FIND 方法路由规则
            * @param pattern 消息匹配格式
            * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * @return 返回路由对象本身
            * 
            * 
            * 
            */
        find(pattern: string, hdlr: FibJS.Handler): Routing;
    }


    /**
        * 
        * @brief 创建一个消息对象，参见 Message
        * 
        * 
        */
    export const Message: Message;

    /**
        * 
        * @brief 创建一个 http 协议处理器对象，参见 HttpHandler
        * 
        * 
        */
    export const HttpHandler: HttpHandler;

    /**
        * 
        * @brief 创建一个消息处理器对象，传递值内置处理器则直接返回
        * 
        * hdlr 接受内置消息处理器，处理函数，链式处理数组，路由对象：
        * - Function javascript 函数，将使用此函数进行处理
        * - Handler 内置处理器，将使用此处理器进行处理
        * - 链式处理数组，等同于返回 new mq.Chain(hdlr)，参见 Chain
        * - 路由对象，等同于返回 new mq.Routing(hdlr)，参见 Routing
        * 
        * 消息处理函数语法如下：
        * ```JavaScript
        * function func(v){
        * }
        * ```
        * 参数 v 为正在处理的消息，返回结果允许有四种:
        * - Function javascript 函数，将使用此函数进行下一阶段处理
        * - Handler 内置处理器，将使用此处理器进行下一阶段处理
        * - 链式处理数组，等同于 new mq.Chain(v)，参见 Chain
        * - 路由对象，等同于 new mq.Routing(v)，参见 Routing
        * 
        * 无返回或者其他的返回结果将结束消息处理。
        * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象
        * @return 返回封装了处理函数的处理器
        * 
        * 
        * 
        */
    export const Handler: FibJS.Handler;

    /**
        * 
        * @brief 创建一个消息处理器链处理对象，参见 Chain
        * 
        * 
        */
    export const Chain: Chain;

    /**
        * 
        * @brief 创建一个消息处理器路由对象，参见 Routing
        * 
        * 
        */
    export const Routing: Routing;



    /**
        * 
        * @brief 创建一个空处理器对象，次处理对象不做任何处理直接返回
        * @return 返回空处理函数
        * 
        * 
        * 
        */
    export function nullHandler(): FibJS.Handler;

    /**
        * 
        * @brief 使用给定的处理器处理一个消息或对象
        * 
        * 不同于处理器的 invoke 方法，此方法将循环调用每个处理器的返回处理器，直到处理器返回 null 为止。
        * @param hdlr 指定使用的处理器
        * @param v 指定要处理的消息或对象
        * 
        * 
        * @async
        */
    export function invoke(hdlr: FibJS.Handler, v: object): void;
}

declare module "os" {

    export class Service extends FibJS.EventEmitter {

        /**
            * 
            * @brief 系统服务管理对象构造函数
            * @param name 服务名称
            * @param worker 服务运行函数
            * @param event 服务事件处理
            * 
            * 
            * 
            */
        new(name: string, worker: Function, event?: Object/** = v8::Object::New(isolate)*/);

        /**
            * 
            * @brief 开始运行服务实体
            * 
            * @async
            */
        run(): void;

        /**
            * 
            * @brief 安装服务到系统
            * @param name 服务名称
            * @param cmd 服务命令行
            * @param displayName 服务显示名称
            * @param description 服务描述信息
            * 
            * 
            * 
            */
        static install(name: string, cmd: string, displayName?: string/** = ""*/, description?: string/** = ""*/): void;

        /**
            * 
            * @brief 从系统中卸载服务
            * @param name 服务名称
            * 
            * 
            * 
            */
        static remove(name: string): void;

        /**
            * 
            * @brief 启动服务
            * @param name 服务名称
            * 
            * 
            * 
            */
        static start(name: string): void;

        /**
            * 
            * @brief 停止服务
            * @param name 服务名称
            * 
            * 
            * 
            */
        static stop(name: string): void;

        /**
            * 
            * @brief 重启服务
            * @param name 服务名称
            * 
            * 
            * 
            */
        static restart(name: string): void;

        /**
            * 
            * @brief 检测服务是否安装
            * @param name 服务名称
            * @return 服务安装返回 True
            * 
            * 
            * 
            */
        static isInstalled(name: string): boolean;

        /**
            * 
            * @brief 检测服务是否运行
            * @param name 服务名称
            * @return 服务运行返回 True
            * 
            * 
            * 
            */
        static isRunning(name: string): boolean;
    }

    /**
        * 
        * @brief 查询当前运行环境主机名
        * @return 返回主机名
        * 
        * 
        * 
        */
    export function hostname(): string;

    /**
        * 
        * @brief 查询当前 CPU 的字节顺序
        * @return 返回字节顺序
        * 
        * 
        * 
        */
    export function endianness(): string;

    /**
        * 
        * @brief 查询当前运行环境操作系统名称
        * @return 返回系统名称
        * 
        * 
        * 
        */
    export function type(): string;

    /**
        * 
        * @brief 查询当前运行环境操作系统版本
        * @return 返回版本信息
        * 
        * 
        * 
        */
    export function release(): string;

    /**
        * 
        * @brief 查询当前用户目录
        * @return 返回目录字符串
        * 
        * 
        * 
        */
    export function homedir(): string;

    /**
        * 
        * @brief 查询当前 cpu 环境
        * @return 返回 cpu 类型，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'
        * 
        * 
        * 
        */
    export function arch(): string;

    /**
        * 
        * @brief 查询运行环境运行时间，以秒为单位
        * @return 返回表示时间的数值
        * 
        * 
        * 
        */
    export function uptime(): number;

    /**
        * 
        * @brief 查询运行环境 1分钟，5分钟，15分钟平均负载
        * @return 返回包含三个负载数据的数组
        * 
        * 
        * 
        */
    export function loadavg(): any[];

    /**
        * 
        * @brief 查询运行环境总内存，以字节为单位
        * @return 返回内存数据
        * 
        * 
        * 
        */
    export function totalmem(): number;

    /**
        * 
        * @brief 查询运行环境可用内存，以字节为单位
        * @return 返回内存数据
        * 
        * 
        * 
        */
    export function freemem(): number;

    /**
        * 
        * @brief 查询当前运行环境 cpu 个数和参数
        * @return 返回包含 cpu 参数的数组，每一项对应一个 cpu
        * 
        * 
        * 
        */
    export function cpus(): any[];

    /**
        * 
        * @brief 查询当前运行环境 cpu 个数
        * @return 返回 cpu 个数
        * 
        * 
        * 
        */
    export function cpuNumbers(): number;

    /**
        * 
        * @brief 查询当前运行环境临时文件目录
        * @return 返回临时文件目录
        * 
        * 
        * 
        */
    export function tmpdir(): string;

    /**
        * 
        * @brief 返回当前有效执行用户信息
        * @param options 用于解释结果字符串的字符编码
        * @return 当前有效执行用户信息
        * 
        * 
        * 
        */
    export function userInfo(options?: Object/** = v8::Object::New(isolate)*/): Object;

    /**
        * 
        * @brief 查询当前运行环境网络信息
        * @return 返回网卡信息
        * 
        * 
        * 
        */
    export function networkInterfaces(): Object;

    /**
        * 
        * @brief 查询当前主机的打印机信息
        * @return 返回打印机信息
        * 
        * 
        * 
        */
    export function printerInfo(): any[];

    /**
        * 
        * @brief 创建一个打印机输出对象
        * @param name 打印机名称
        * @return 返回打印机输出对象
        * 
        * 
        * @async
        */
    export function openPrinter(name: string): FibJS.BufferedStream;

    /**
        * 
        * @brief 查询当前平台名称
        * @return 返回平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'
        * 
        * 
        * 
        */
    export function platform(): string;

    /**
        * 
        * @brief 解析时间字符串或查询运行环境当前时间
        * @param tmString 时间字符串，缺省则查询当前时间
        * @return 返回 javascript Date 对象
        * 
        * 
        * 
        */
    export function time(tmString?: string/** = ""*/): Date;

    /**
        * 
        * @brief 时间计算函数，根据 part 指定计算时间
        * @param d 指定用于计算 Date 对象
        * @param num 指定运算的数值
        * @param part 指定运算的时间部位，接收值为："year", "month", "day", "hour", "minute", "second"
        * @return 返回 javascript Date 对象
        * 
        * 
        * 
        */
    export function dateAdd(d: Date, num: number, part: string): Date;

    /**
        * 
        * @brief 查询当前进程内存使用报告
        * 
        * 内存报告生成类似以下结果：
        * ```JavaScript
        * {
        * "rss": 8622080,
        * "heapTotal": 4083456,
        * "heapUsed": 1621800,
        * "nativeObjects": 122
        * }
        * ```
        * 其中：
        * - rss 返回进程当前占用物理内存大小
        * - heapTotal 返回 v8 引擎堆内存大小
        * - heapUsed 返回 v8 引擎正在使用堆内存大小
        * - nativeObjects 返回当前有效内置对象数
        * @return 返回包含内存报告
        * 
        * 
        * 
        */
    export function memoryUsage(): Object;
}

declare module "path" {

    interface Posix {




		/**
			* 
			* @brief 标准化路径，处理路径中父目录等信息
			* 
			* @param path 给定的未处理的路径
			* @return 返回经过处理的路径
			* 
			* 
			* 
			*/
        normalize(path: string): string;

        /**
            * 
            * @brief 查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名
            * 
            * @param path 给定查询的路径
            * @param ext 指定扩展名，若文件名中有符合条件的扩展名，将自动取消
            * @return 返回文件名称
            * 
            * 
            * 
            */
        basename(path: string, ext?: string/** = ""*/): string;

        /**
            * 
            * @brief 查询路径中的文件扩展名
            * 
            * @param path 给定查询的路径
            * @return 返回得到的扩展名
            * 
            * 
            * 
            */
        extname(path: string): string;

        /**
            * 
            * @brief 查询路径中的目录路径
            * 
            * @param path 给定查询的路径
            * @return 返回得到的目录的路径
            * 
            * 
            * 
            */
        dirname(path: string): string;

        /**
            * 
            * @brief 转换给定路径为全路径
            * 
            * @param path 给定转换的路径
            * @return 返回转换的全路径
            * 
            * 
            * 
            */
        fullpath(path: string): string;

        /**
            * 
            * @brief 识别给定的路径是否是绝对路径
            * 
            * @param path 给定需要识别的路径
            * @return 是绝对路径则返回 true
            * 
            * 
            * 
            */
        isAbsolute(path: string): boolean;

        /**
            * 
            * @brief 合并一系列路径成为一个单一路径
            * 
            * @param ps 一个或多个相关的路径
            * @return 返回得到的新路径
            * 
            * 
            * 
            */
        join(...ps: any[]): string;

        /**
            * 
            * @brief 合并一系列路径成为一个绝对路径
            * 
            * @param ps 一个或多个相关的路径
            * @return 返回得到的新路径
            * 
            * 
            * 
            */
        resolve(...ps: any[]): string;

        /**
            * 
            * @brief 转换成 namespace-prefixed 路径。只在 windows 有效，其他系统直接返回。
            * see: https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
            * @param path 给定的路径。
            * @return 返回得到的新路径
            * 
            * 
            * 
            */
        toNamespacedPath(path?: any/** = v8::Undefined(isolate)*/): any;
    }

    interface Win32 {

		/**
			* 
			* @brief 标准化路径，处理路径中父目录等信息
			* 
			* @param path 给定的未处理的路径
			* @return 返回经过处理的路径
			* 
			* 
			* 
			*/
        normalize(path: string): string;

		/**
			* 
			* @brief 查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名
			* 
			* @param path 给定查询的路径
			* @param ext 指定扩展名，若文件名中有符合条件的扩展名，将自动取消
			* @return 返回文件名称
			* 
			* 
			* 
			*/
        basename(path: string, ext?: string/** = ""*/): string;

		/**
			* 
			* @brief 查询路径中的文件扩展名
			* 
			* @param path 给定查询的路径
			* @return 返回得到的扩展名
			* 
			* 
			* 
			*/
        extname(path: string): string;

		/**
			* 
			* @brief 查询路径中的目录路径
			* 
			* @param path 给定查询的路径
			* @return 返回得到的目录的路径
			* 
			* 
			* 
			*/
        dirname(path: string): string;

		/**
			* 
			* @brief 转换给定路径为全路径
			* 
			* @param path 给定转换的路径
			* @return 返回转换的全路径
			* 
			* 
			* 
			*/
        fullpath(path: string): string;

		/**
			* 
			* @brief 识别给定的路径是否是绝对路径
			* 
			* @param path 给定需要识别的路径
			* @return 是绝对路径则返回 true
			* 
			* 
			* 
			*/
        isAbsolute(path: string): boolean;

		/**
			* 
			* @brief 合并一系列路径成为一个单一路径
			* 
			* @param ps 一个或多个相关的路径
			* @return 返回得到的新路径
			* 
			* 
			* 
			*/
        join(...ps: any[]): string;

		/**
			* 
			* @brief 合并一系列路径成为一个绝对路径
			* 
			* @param ps 一个或多个相关的路径
			* @return 返回得到的新路径
			* 
			* 
			* 
			*/
        resolve(...ps: any[]): string;

		/**
			* 
			* @brief 转换成 namespace-prefixed 路径。只在 windows 有效，其他系统直接返回。
			* see: https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
			* @param path 给定的路径。
			* @return 返回得到的新路径
			* 
			* 
			* 
			*/
        toNamespacedPath(path?: any/** = v8::Undefined(isolate)*/): any;
    }

    export var posix: Posix;

    export var win32: Win32;

    /**
     * 查询当前操作系统的多路径组合字符，posix 返回 ':', windows 返回 ';'
     */
    export var delimiter: Readonly<string>;

    /**
        * 
        * @brief 标准化路径，处理路径中父目录等信息
        * 
        * @param path 给定的未处理的路径
        * @return 返回经过处理的路径
        * 
        * 
        * 
        */
    export function normalize(path: string): string;

    /**
        * 
        * @brief 查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名
        * 
        * @param path 给定查询的路径
        * @param ext 指定扩展名，若文件名中有符合条件的扩展名，将自动取消
        * @return 返回文件名称
        * 
        * 
        * 
        */
    export function basename(path: string, ext?: string/** = ""*/): string;

    /**
        * 
        * @brief 查询路径中的文件扩展名
        * 
        * @param path 给定查询的路径
        * @return 返回得到的扩展名
        * 
        * 
        * 
        */
    export function extname(path: string): string;

    /**
        * 
        * @brief 查询路径中的目录路径
        * 
        * @param path 给定查询的路径
        * @return 返回得到的目录的路径
        * 
        * 
        * 
        */
    export function dirname(path: string): string;

    /**
        * 
        * @brief 转换给定路径为全路径
        * 
        * @param path 给定转换的路径
        * @return 返回转换的全路径
        * 
        * 
        * 
        */
    export function fullpath(path: string): string;

    /**
        * 
        * @brief 识别给定的路径是否是绝对路径
        * 
        * @param path 给定需要识别的路径
        * @return 是绝对路径则返回 true
        * 
        * 
        * 
        */
    export function isAbsolute(path: string): boolean;

    /**
        * 
        * @brief 合并一系列路径成为一个单一路径
        * 
        * @param ps 一个或多个相关的路径
        * @return 返回得到的新路径
        * 
        * 
        * 
        */
    export function join(...ps: any[]): string;

    /**
        * 
        * @brief 合并一系列路径成为一个绝对路径
        * 
        * @param ps 一个或多个相关的路径
        * @return 返回得到的新路径
        * 
        * 
        * 
        */
    export function resolve(...ps: any[]): string;

    /**
        * 
        * @brief 转换成 namespace-prefixed 路径。只在 windows 有效，其他系统直接返回。
        * see: https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
        * @param path 给定的路径。
        * @return 返回得到的新路径
        * 
        * 
        * 
        */
    export function toNamespacedPath(path?: any/** = v8::Undefined(isolate)*/): any;
}

declare module "gui" {

    interface WebView extends FibJS.EventEmitter {

        /**
            * 
            * @brief 设置 webview 的页面 html
            * @param html 设置的 html
            * 
            * 
            * @async
            */
        setHtml(html: string): void;

        /**
            * 
            * @brief 打印当前窗口文档
            * @param mode 打印参数，0: 快速打印; 1: 标准打印; 2: 打印预览。缺省为 1
            * 
            * 
            * @async
            */
        print(mode?: number/** = 1*/): void;

        /**
            * 
            * @brief 关闭当前窗口
            * 
            * @async
            */
        close(): void;

        /**
            * 
            * @brief 等待当前窗口关闭
            * 宿主程序在创建窗口后，需要进入等待，否则随着宿主程序的退出，窗口将自动关闭。同时 wait 的调用也并不是必须的，你可以在打开窗口后处理其它业务，只需要保证程序不会自行退出即可。
            * 
            * 
            * @async
            */
        wait(): void;

        /**
            * 
            * @brief 向 webview 内发送消息
            * postMessage 需要在窗口加载完成后发送消息，在此之前发送的消息会丢失。因此建议在 onload 事件触发后再调用此方法。
            * @param msg 要发送的消息
            * 
            * 
            * @async
            */
        postMessage(msg: string): void;
    }

    /**
        * 
        * @brief WebView ie 模拟版本，指定 ie7
        * 
        * 
        */
    export const IE7 = 7000;

    /**
        * 
        * @brief WebView ie 模拟版本，指定 ie8
        * 
        * 
        */
    export const IE8 = 8000;

    /**
        * 
        * @brief WebView ie 模拟版本，指定 ie9
        * 
        * 
        */
    export const IE9 = 9000;

    /**
        * 
        * @brief WebView ie 模拟版本，指定 ie10
        * 
        * 
        */
    export const IE10 = 10000;

    /**
        * 
        * @brief WebView ie 模拟版本，指定 ie11
        * 
        * 
        */
    export const IE11 = 11000;

    /**
        * 
        * @brief WebView ie 模拟版本，指定 edge
        * 
        * 
        */
    export const EDGE = 11001;





    /**
        * 
        * 设置 WebView 内 ie 最高模拟版本，当系统 ie 版本低于此版本时，将模拟系统安装版本
        * @param ver 指定 ie 模拟版本
        * 
        * 
        * 
        */
    export function setVersion(ver: number): void;

    /**
        * 
        * @brief 打开一个窗口并访问指定网址
        * 
        * 支持以下参数:
        * ```JavaScript
        * {
        * "left": 100, // 窗口左上角 x，缺省系统自动设定
        * "right": 100, // 窗口左上角 y，缺省系统自动设定
        * "width": 100, // 窗口宽度，缺省系统自动设定
        * "height": 100, // 窗口高度，缺省系统自动设定
        * "border": true, // 是否有边框，缺省有边框
        * "caption": true, // 是否有标题栏，缺省有标题栏
        * "resizable": true, // 是否可改变尺寸，缺省可以改变
        * "maximize": false, // 是否最大化显示，缺省不最大化
        * "visible": true, // 是否显示，缺省显示
        * "debug": true // 是否输出 WebView 内的错误和 console 信息，缺省显示
        * }
        * ```
        * 当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中
        * @param url 指定的网址，，可以使用 fs:path 访问本地文件系统
        * @param opt 打开窗口参数
        * @return 返回打开的窗口对象
        * 
        * 
        * 
        */
    export function open(url: string, opt?: Object/** = v8::Object::New(isolate)*/): WebView;
}

//#region===================================================coroutine========================================================
declare module "coroutine" {
    export var Lock: Lock;
    export var Semaphore: Semaphore;
    export var Condition: Condition;
    export var Event: Event;
    export var Worker: FibJS.Worker;

    /**
     *启动一个纤程并返回纤程对象
     *
     * @export
     * @param {Function} func 制定纤程执行的函数
     * @param {*} args 可变参数序列，此序列会在纤程内传递给函数
     * @returns {FibJS.Fiber}
     */
    export function start(func: Function, ...args): FibJS.Fiber;

    /**
     *并行执行一组函数，并等待返回
     *
     * @export
     * @param {Array<Function>} funcs 并行执行的函数数组
     * @param {Integer} [fibers]  限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber
     * @returns {Array<Value>}
     */
    export function parallel(funcs: Array<Function>, fibers?: Integer): Array<Value>;

    /**
     *并行执行一个函数处理一组数据，并等待返回
     *
     * @export
     * @param {Array<Value>} datas 并行执行的数据数组
     * @param {Function} func 并行执行的函数
     * @param {Integer} [fibers] 限制并发 fiber 数量，缺省为 -1，启用与 datas 数量相同 fiber
     * @returns {Array<Value>}
     */
    export function parallel(datas: Array<Value>, func: Function, fibers?: Integer): Array<Value>;

    /**
     *并行执行一个函数多次，并等待返回
     *
     * @export
     * @param {Function} func 并行执行的函数数
     * @param {Integer} num  重复任务数量
     * @param {Integer} [fibers] 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber
     * @returns {Array<Value>}
     */
    export function parallel(func: Function, num: Integer, fibers?: Integer): Array<Value>;

    /**
     *并行执行一组函数，并等待返回
     *
     * @export
     * @param {...Array<Function>} funcs  一组并行执行的函数
     * @returns {Array<Value>}  返回函数执行结果的数组
     */
    export function parallel(...funcs: Array<Function>): Array<Value>;

    /**
     *返回当前纤程
     *
     * @export
     * @returns {FibJS.Fiber} 当前纤程对象
     */
    export function current(): FibJS.Fiber;

    /**
     * 暂停当前纤程指定的时间
     *@async
     *
     * @export
     * @param {Integer} [ms] 指定要暂停的时间，以毫秒为单位，缺省为 0，即有空闲立即回恢复运行
     */
    export function sleep(ms?: Integer): void;

    /**
     * 返回当前正在运行的全部 fiber 数组
     */
    export var fibers: ReadonlyArray<FibJS.Fiber>;

    /**
     * 查询和设置空闲 Fiber 数量，服务器抖动较大时可适度增加空闲 Fiber 数量。缺省为 256
     */
    export var spareFibers: Readonly<Integer>;

    /**
     * 查询当前 vm 编号
     */
    export var vmid: Readonly<Integer>;

    /**
     * 修改和查询本 vm 的输出级别，用以过滤输出信息，缺省为 console.NOTSET，全部输出
     */
    export var loglevel: Readonly<Integer>;

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

//#region===================================================dgram=========================================================
declare module "dgram" {
    export var Socket: DgramSocket;


    /**
     * 
     * @brief 创建一个 dgram.Socket 对象
     * 
     * opts 允许的选项是:
     * ```JavaScript
     * {
     * "type": "udp4" | "udp6",   // 必填
     * "reuseAddr": true | false, //若设置为 true，socket.bind() 则会重用地址，即时另一个进程已经在其上面绑定了一个套接字。 默认是 false
     * "recvBufferSize": ###,     // 设置 SO_RCVBUF 套接字值
     * "sendBufferSize": ###      //设置 SO_RCVBUF 套接字值
     * }
     * ```
     * @param opts
     * @return 返回创建的 Socket 对象
     * 
     * 
     * 
     */
    export function createSocket(opts: {
        type: string,
        reuseAddr?: boolean,
        recvBufferSize?: Value,
        sendBufferSize?: Value
    }): DgramSocket;

    /**
     * 
     * @brief 创建一个 dgram.Socket 对象
     * 
     * opts 允许的选项是:
     * ```JavaScript
     * {
     * "type": "udp4" | "udp6",   // 必填
     * "reuseAddr": true | false, //若设置为 true，socket.bind() 则会重用地址，即时另一个进程已经在其上面绑定了一个套接字。 默认是 false
     * "recvBufferSize": ###,     // 设置 SO_RCVBUF 套接字值
     * "sendBufferSize": ###      //设置 SO_RCVBUF 套接字值
     * }
     * ```
     * @param opts
     * @param callback 为 'message' 事件添加一个监听器。
     * @return 返回创建的 Socket 对象
     * 
     * 
     * 
     */
    export function createSocket(opts: Object, callback: Function): DgramSocket;

    /**
     * 
     * @brief 创建一个 dgram.Socket 对象
     * @param type 套接字族，'udp4' 或 'udp6'。
     * @return 返回创建的 Socket 对象
     * 
     * 
     * 
     */
    export function createSocket(type: string): DgramSocket;

    /**
     * 
     * @brief 创建一个 dgram.Socket 对象
     * @param type 套接字族，'udp4' 或 'udp6'。
     * @param callback 为 'message' 事件添加一个监听器。
     * @return 返回创建的 Socket 对象
     * 
     * 
     * 
     */
    export function createSocket(type: string, callback: Function): DgramSocket;

    interface DgramSocket extends FibJS.EventEmitter {

        /**
         * 
         * @brief 该方法会令 dgram.Socket 在指定的 `port` 和 `addr` 上监听数据包信息。绑定完成时会触发一个 `listening` 事件。
         * @param port 指定绑定端口，若 `port` 未指定或为 0，操作系统会尝试绑定一个随机的端口
         * @param addr 指定绑定地址，若 address 未指定，操作系统会尝试在所有地址上监听。
         * 
         * 
         * @async
         */
        bind(port?: number/** = 0*/, addr?: string/** = ""*/): void;

        /**
         * 
         * @brief 该方法会令 dgram.Socket 在 `opts` 指定的 `port` 和 `address` 上监听数据包信息。绑定完成时会触发一个 `listening` 事件。
         * @param opts 指定绑定参数
         * 
         * 
         * @async
         */
        bind(opts: Object): void;

        /**
         * 
         * @brief 在 socket 上发送一个数据包
         * @param msg 指定发送的数据
         * @param port 指定发送的目的端口
         * @param address 指定发送的目的地址
         * @return 返回发送尺寸
         * 
         * 
         * @async
         */
        send(msg: Buffer, port: number, address?: string/** = ""*/): number;

        /**
         * 
         * @brief 在 socket 上发送一个数据包
         * @param msg 指定发送的数据
         * @param offset 从指定偏移开始发送
         * @param length 之发送指定长度
         * @param port 指定发送的目的端口
         * @param address 指定发送的目的地址
         * @return 返回发送尺寸
         * 
         * 
         * @async
         */
        send(msg: Buffer, offset: number, length: number, port: number, address?: string/** = ""*/): number;

        /**
         * 
         * @brief 返回一个包含 socket 地址信息的对象。对于 UDP socket，该对象将包含 address、family 和 port 属性。
         * @return 返回对象绑定地址
         * 
         * 
         * 
         */
        address(): any;

        /**
         * 
         * @brief 关闭当前 socket
         * 
         * 
         */
        close(): void;

        /**
         * 
         * @brief 关闭当前 socket
         * @param callback 关闭完成后的回调函数，它相当于为 `close` 事件添加了一个监听器
         * 
         * 
         * 
         */
        close(callback: Function): void;

        /**
         * 
         * @brief 查询 socket 接收缓冲区大小
         * @return 返回查询结果
         * 
         * 
         * 
         */
        getRecvBufferSize(): number;

        /**
         * 
         * @brief 查询 socket 发送缓冲区大小
         * @return 返回查询结果
         * 
         * 
         * 
         */
        getSendBufferSize(): number;

        /**
         * 
         * @brief 设置 socket 接收缓冲区大小
         * @param size 指定要设置的尺寸
         * 
         * 
         * 
         */
        setRecvBufferSize(size: number): void;

        /**
         * 
         * @brief 设置 socket 发送缓冲区大小
         * @param size 指定要设置的尺寸
         * 
         * 
         * 
         */
        setSendBufferSize(size: number): void;

        /**
         * 
         * @brief 设置或清除 SO_BROADCAST socket 选项
         * @param flag 当设置为 true, UDP包会被发送到一个本地接口的广播地址
         * 
         * 
         * 
         */
        setBroadcast(flag: boolean): void;

        /**
         * 
         * @brief 维持 fibjs 进程不退出，在对象绑定期间阻止 fibjs 进程退出
         * @return 返回当前对象
         * 
         * 
         * 
         */
        ref(): DgramSocket;

        /**
         * 
         * @brief 允许 fibjs 进程退出，在对象绑定期间允许 fibjs 进程退出
         * @return 返回当前对象
         * 
         * 
         * 
         */
        unref(): DgramSocket;
    }
}
//#endregion

//#region===================================================events=========================================================
declare module "events" {
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
declare module "constants" {

}
//#endregion

//#region ===================================================net========================================================
declare module "net" {

    interface Socket extends FibJS.Stream {
        /**
		* 
		* @brief Socket 构造函数，创建一个新的 Socket 对象
		* @param family 指定地址集，缺省为 AF_INET，ipv4
		* @param type 指定协议族，缺省为 SOCK_STREAM，tcp
		* 
		* 
		* 
		*/
        new(family?: number/** = undefined*/, type?: number/** = undefined*/);

        /**
            * 
            * @brief 建立一个 tcp 连接
            * @param host 指定对方地址或主机名
            * @param port 指定对方端口
            * 
            * 
            * @async
            */
        connect(host: string, port: number): void;

        /**
            * 
            * @brief 将当前 Socket 绑定至本地所有地址的指定端口
            * @param port 指定绑定的端口
            * @param allowIPv4 指定是否接受 ipv4 连接，缺省为 true。本参数在 ipv6 时有效，并依赖于操作系统
            * 
            * 
            * 
            */
        bind(port: number, allowIPv4?: boolean/** = true*/): void;

        /**
            * 
            * @brief 将当前 Socket 绑定至指定地址的指定端口
            * @param addr 指定绑定的地址
            * @param port 指定绑定的端口
            * @param allowIPv4 指定是否接受 ipv4 连接，缺省为 true。本参数在 ipv6 时有效，并依赖于操作系统
            * 
            * 
            * 
            */
        bind(addr: string, port: number, allowIPv4?: boolean/** = true*/): void;

        /**
            * 
            * @brief 开始监听连接请求
            * @param backlog 指定请求队列长度，超出的请求将被拒绝，缺省为 120
            * 
            * 
            * 
            */
        listen(backlog?: number/** = 120*/): void;

        /**
            * 
            * @brief 等待并接受一个连接
            * @return 返回接收到得连接对象
            * 
            * 
            * @async
            */
        accept(): Socket;

        /**
            * 
            * @brief 从连接读取指定大小的数据，不同于 read 方法，recv 并不保证读完要求的数据，而是在读取到数据后立即返回
            * @param bytes 指定要读取的数据量，缺省读取任意尺寸的数据
            * @return 返回从连接读取的数据
            * 
            * 
            * @async
            */
        recv(bytes?: number/** = -1*/): Buffer;

        /**
            * 
            * @brief 读取一个 UDP 包
            * recvfrom 返回结果中包含以下内容：
            * - data: 接收到的二进制数据块
            * - address: 发送方的地址
            * - port: 发送方的端口
            * @param bytes 指定要读取的数据量，缺省读取任意尺寸的数据
            * @return 返回从连接读取的数据包
            * 
            * 
            * @async
            */
        recvfrom(bytes?: number/** = -1*/): any;

        /**
            * 
            * @brief 将给定的数据写入连接，此方法等效于 write 方法
            * @param data 给定要写入的数据
            * 
            * 
            * @async
            */
        send(data: Buffer): void;

        /**
            * 
            * @brief 向给定 ip:port 发送一个 UDP 包
            * @param data 给定要写入的数据
            * @param host 指定目标 ip 或主机名
            * @param port 指定目标端口
            * 
            * 
            * @async
            */
        sendto(data: Buffer, host: string, port: number): void;
    }

    interface Smtp {

        /**
            * 
            * @brief Smtp 对象构造函数
            * 
            * 
            */
        new();

        /**
            * 
            * @brief 建立到指定的服务器
            * @param url 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
            * 
            * 
            * @async
            */
        connect(url: string): void;

        /**
            * 
            * @brief 发送指定命令，并返回响应，服务器报错则抛出错误
            * @param cmd 命令名
            * @param arg 参数
            * @return 如果成功，返回服务器响应
            * 
            * 
            * @async
            */
        command(cmd: string, arg: string): string;

        /**
            * 
            * @brief 发送 HELO 命令，服务器报错则抛出错误
            * @param hostname 主机名，缺省为“localhost”
            * 
            * 
            * @async
            */
        hello(hostname?: string/** = "localhost"*/): void;

        /**
            * 
            * @brief 用指定的用户及密码登录服务器，服务器报错则抛出错误
            * @param username 用户名
            * @param password 密码
            * 
            * 
            * @async
            */
        login(username: string, password: string): void;

        /**
            * 
            * @brief 指定发件人信箱，服务器报错则抛出错误
            * @param address 发件人信箱
            * 
            * 
            * @async
            */
        from(address: string): void;

        /**
            * 
            * @brief 指定收件人信箱，服务器报错则抛出错误
            * @param address 收件人信箱
            * 
            * 
            * @async
            */
        to(address: string): void;

        /**
            * 
            * @brief 发送文本到收件人，服务器报错则抛出错误
            * @param txt 要发送的文本
            * 
            * 
            * @async
            */
        data(txt: string): void;

        /**
            * 
            * @brief 退出并关闭连接，服务器报错则抛出错误
            * 
            * @async
            */
        quit(): void;
    }

    interface TcpServer {

        /**
            * 
            * @brief TcpServer 构造函数，在所有本机地址侦听
            * @param port 指定 tcp 服务器侦听端口
            * @param listener 指定 tcp 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * 
            * 
            * 
            */
        new(port: number, listener: FibJS.Handler);

        /**
            * 
            * @brief TcpServer 构造函数
            * @param addr 指定 tcp 服务器侦听地址，为 "" 则在本机所有地址侦听
            * @param port 指定 tcp 服务器侦听端口
            * @param listener 指定 tcp 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
            * 
            * 
            * 
            */
        new(addr: string, port: number, listener: FibJS.Handler);

        /**
            * 
            * @brief 运行服务器并开始接收和分发连接，此函数不会返回
            * 
            * @async
            */
        run(): void;

        /**
            * 
            * @brief 异步运行服务器并开始接收和分发连接，调用后立即返回，服务器在后台运行
            * 
            * 
            */
        asyncRun(): void;

        /**
            * 
            * @brief 关闭 socket中止正在运行的服务器
            * 
            * @async
            */
        stop(): void;
    }

    interface UrlObject {

        /**
            * 
            * @brief UrlObject 对象构造函数，使用参数构造
            * @param args 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash
            * 
            * 
            * 
            */
        new(args: Object);

        /**
            * 
            * @brief UrlObject 对象构造函数，使用 url 字符串构造
            * @param url 指定构造 url 字符串
            * @param parseQueryString 指定是否解析 query
            * @param slashesDenoteHost  默认为false, 如果设置为true，则从字符串'//'之后到下一个'/'之前的字符串会被解析为host，例如'//foo/bar', 结果应该是{host: 'foo', pathname: '/bar'}而不是{pathname: '//foo/bar'}
            * 
            * 
            * 
            */
        new(url?: string/** = ""*/, parseQueryString?: boolean/** = false*/, slashesDenoteHost?: boolean/** = false*/);

        /**
            * 
            * @brief 解析一个 url 字符串
            * @param url 指定需要解析的 url 字符串
            * @param parseQueryString 指定是否解析 query
            * @param slashesDenoteHost  默认为false, 如果设置为true，则从字符串'//'之后到下一个'/'之前的字符串会被解析为host，例如'//foo/bar', 结果应该是{host: 'foo', pathname: '/bar'}而不是{pathname: '//foo/bar'}
            * 
            * 
            * 
            */
        parse(url: string, parseQueryString?: boolean/** = false*/, slashesDenoteHost?: boolean/** = false*/): void;

        /**
            * 
            * @brief 使用指定的参数构造 UrlObject
            * @param args 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash
            * 
            * 
            * 
            */
        format(args: Object): void;

        /**
            * 
            * @brief 重定位 url 路径，自动识别新路径为相对路径还是绝对路径
            * @param url 指定新的路径
            * @return 返回包含重定位数据的对象
            * 
            * 
            * 
            */
        resolve(url: string): UrlObject;

        /**
            * 
            * @brief 标准化路径
            * 
            * 
            * 
            */
        normalize(): void;
    }

    /**
    * 
    * @brief 地址集常量，指定 ipv4
    * 
    * 
    */
    export const AF_INET = 2;

    /**
        * 
        * @brief 地址集常量，指定 ipv6
        * 
        * 
        */
    export const AF_INET6 = 10;

    /**
        * 
        * @brief 协议族常量，指定 tcp
        * 
        * 
        */
    export const SOCK_STREAM = 1;

    /**
        * 
        * @brief 协议族常量，指定 udp
        * 
        * 
        */
    export const SOCK_DGRAM = 2;



    /**
        * 
        * @brief 创建一个 Socket 对象，参见 Socket
        * 
        * 
        */
    export const Socket: Socket;

    /**
        * 
        * @brief 创建一个 Smtp 对象，参见 Smtp
        * 
        * 
        */
    export const Smtp: Smtp;

    /**
        * 
        * @brief 创建一个 TcpServer 对象，参见 TcpServer
        * 
        * 
        */
    export const TcpServer: TcpServer;

    /**
        * 
        * @brief 创建一个 UrlObject 对象，参见 UrlObject
        * 
        * 
        */
    export const Url: UrlObject;



    /**
        * 
        * @brief 查询当前运行环境网络信息
        * @return 返回网卡信息
        * 
        * 
        * 
        */
    export function info(): Object;

    /**
        * 
        * @brief 查询给定的主机名的地址
        * @param name 指定主机名
        * @param family 指定查询返回类型，缺省为 AF_INET
        * @return 返回查询的 ip 字符串
        * 
        * 
        * @async
        */
    export function resolve(name: string, family?: number/** = undefined*/): string;

    /**
        * 
        * @brief 快速查询的主机地址，等效与 resolve(name)
        * @param name 指定主机名
        * @return 返回查询的 ip 字符串
        * 
        * 
        * @async
        */
    export function ip(name: string): string;

    /**
        * 
        * @brief 快速查询的主机 ipv6 地址，等效与 resolve(name, net.AF_INET6)
        * @param name 指定主机名
        * @return 返回查询的 ipv6 字符串
        * 
        * 
        * @async
        */
    export function ipv6(name: string): string;

    /**
        * 
        * @brief 创建一个 Socket 或 SslSocket 对象并建立连接
        * @param url 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
        * @param timeout 指定超时时间，单位是毫秒，默认为0
        * @return 返回连接成功的 Socket 或者 SslSocket 对象
        * 
        * 
        * @async
        */
    export function connect(url: string, timeout?: number/** = 0*/): FibJS.Stream;

    /**
        * 
        * @brief 创建一个 Smtp 对象并建立连接，参见 Smtp
        * @param url 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
        * @param timeout 指定超时时间，单位是毫秒，默认为0
        * @return 返回连接成功的 Smtp 对象
        * 
        * 
        * @async
        */
    export function openSmtp(url: string, timeout?: number/** = 0*/): Smtp;

    /**
        * 
        * @brief 查询当前系统异步网络引擎
        * @return 返回网络引擎名称
        * 
        * 
        * 
        */
    export function backend(): string;

    /**
        * 
        * @brief 检测输入是否是 IP 地址
        * @param ip 指定要检测的字符串
        * @return 非合法的 IP 地址，返回 0, 如果是 IPv4 则返回 4，如果是 IPv6 则返回 6
        * 
        * 
        * 
        */
    export function isIP(ip?: string/** = ""*/): number;

    /**
        * 
        * @brief 检测输入是否是 IPv4 地址
        * @param ip 指定要检测的字符串
        * @return 如果是 IPv4 则返回 true.否则返回 false
        * 
        * 
        * 
        */
    export function isIPv4(ip?: string/** = ""*/): boolean;

    /**
        * 
        * @brief 检测输入是否是 IPv6 地址
        * @param ip 指定要检测的字符串
        * @return 如果是 IPv6 则返回 true.否则返回 false
        * 
        * 
        * 
        */
    export function isIPv6(ip?: string/** = ""*/): boolean;
}
//#endregion