// new 数组构造函数(长度)
const int8Array = new Int8Array(5); // 初始化为 5 个 0
console.log(int8Array); // Int8Array(5) [0, 0, 0, 0, 0, buffer: ArrayBuffer(5), byteLength: 5, byteOffset: 0, length: 5, Symbol(Symbol.toStringTag): 'Int8Array']0: 01: 02: 03: 04: 0buffer: ArrayBuffer(5)byteLength: 5length: 5Symbol(Symbol.toStringTag): "Int8Array"[[Prototype]]: TypedArray

// 数组构造函数.of(元素...)
const uint8Array = Uint8Array.of(1,2,3,4,5);
console.log(uint8Array); // Uint8Array(5) [1, 2, 3, 4, 5, buffer: ArrayBuffer(5), byteLength: 5, byteOffset: 0, length: 5, Symbol(Symbol.toStringTag): 'Uint8Array']

// 数组构造函数.from(可迭代对象)
// Uncaught TypeError: Constructor Int32Array requires 'new'
// const int32Array =Int32Array([1, 2, 3, 4, 5]);
const int32Array = new Int32Array([1, 2, 3, 4, 5]);
console.log(int32Array); // Int32Array(5) [1, 2, 3, 4, 5, buffer: ArrayBuffer(20), byteLength: 20, byteOffset: 0, length: 5, Symbol(Symbol.toStringTag): 'Int32Array']

// new 数组构造函数(其他类型化数组)
const float32Array = new Float32Array(int32Array);
console.log(float32Array); // Float32Array(5) [1, 2, 3, 4, 5, buffer: ArrayBuffer(20), byteLength: 20, byteOffset: 0, length: 5, Symbol(Symbol.toStringTag): 'Float32Array']

const int32Array2 = new Int32Array(int32Array);
console.log(int32Array === int32Array2); // false

