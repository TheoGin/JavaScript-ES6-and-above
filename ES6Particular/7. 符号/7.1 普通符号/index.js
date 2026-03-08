// 1. 没有字面量
const symbol = Symbol(); // 创建一个符号
console.log(symbol); // Symbol()

// 2. 使用 typeof 得到的类型是 symbol
console.log(typeof symbol); // symbol

const symbol1 = Symbol("这是一个描述内容，用于调式用");
const symbol2 = Symbol("这是一个描述内容，用于调式用");
console.log(symbol1); // Symbol(这是一个描述内容，用于调式用)
console.log(symbol2); // Symbol(这是一个描述内容，用于调式用)

// 3. 每次调用 Symbol 函数得到的符号永远不相等，无论符号名是否相同
console.log(symbol1 === symbol2); // false
console.log(typeof symbol1 === "symbol"); // true
console.log(typeof symbol2 === "symbol"); // true

// ----------- 4. start -----------
// 4. 符号可以作为对象的属性名存在，这种属性称之为符号属性
// 4.1 开发者可以通过精心的设计，让这些属性无法通过常规方式被外界访问
const symbolProp = Symbol("prop");
const obj = {
  a: 1,
  b: 2,
  [symbolProp]: 11, // 符号属性
  [symbolProp]: 22, // 后面会覆盖前面的
};
console.log(obj); // {a: 1, b: 2, Symbol(prop): 22}
// console.log(obj[symbolProp]); // 22

// 4.2 符号属性是不能枚举的，因此在 for-in 循环中无法读取到符号属性，Object.keys 方法也无法读取到符号属性
for (const prop in obj) {
  console.log(prop);
}
/*
a
b
*  */
console.log(Object.keys(obj)); // ['a', 'b']

// 4.3 ES5 Object.getOwnPropertyNames 尽管可以得到所有无法枚举的属性，但是仍然无法读取到符号属性
console.log(Object.getOwnPropertyNames(obj)); // ['a', 'b']

// 4.4 ES6 新增 Object.getOwnPropertySymbols 方法，可以读取符号
const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
// 得到的是一个符号属性的数组
console.log(ownPropertySymbols); // [Symbol(prop)]
const prop = ownPropertySymbols[0];
console.log(obj[prop]); // 22

// ----------- 4. end -----------

// 5. 符号无法被隐式转换，因此不能被用于数学运算、字符串拼接或其他隐式转换的场景，但符号可以显式的转换为字符串，通过 String 构造函数进行转换即可，console.log 之所以可以输出符号，是它在内部进行了显式转换
const symbol3 = Symbol('test');
// console.log(symbol3 + 2); // Uncaught TypeError: Cannot convert a Symbol value to a number
// console.log(symbol3 + 'abc'); // Uncaught TypeError: Cannot convert a Symbol value to a string

const str = String(symbol3);
console.log(str); // Symbol(test)   【控制台文字颜色是：黑色】
console.log(symbol3); // Symbol(test)   【控制台文字颜色是：红色】直接输出其实也是先帮你转换为 字符串，然后再加个颜色