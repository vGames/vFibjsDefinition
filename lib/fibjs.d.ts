/*
 * https://github.com/fibjs/fibjs
 * fibjs typescript definition
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
        argv:Array<any>;
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
    export class Worker extends Object {
        /**
         *Creates an instance of Worker.
         * @param {string} path 指定 Worker 入口脚本，只接受绝对路径
         * @param {Object} opts 构造选项，暂未支持
         * @memberof Worker
         */
        constructor(path:string,opts:Object);
        /**
         *默认全局最大监听器数
         *
         * @static
         * @type {number}
         * @memberof Worker
         */
        static defaultMaxListeners:number;
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
declare var argv:Array<any>;

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