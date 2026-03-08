/* const symbol1 = Symbol.for();
const symbol2 = Symbol.for();
console.log(symbol1); // Symbol(undefined)
console.log(symbol2); // Symbol(undefined)
console.log(symbol1 === symbol2); // true */

// 根据某个符号名称（符号描述）能够得到同一个符号
// Symbol.for("符号名/符号描述")  //获取共享符号
const symbol1 = Symbol.for('share');
const symbol2 = Symbol.for('share');
console.log(symbol1); // Symbol(share)
console.log(symbol2); // Symbol(share)
console.log(symbol1 === symbol2); // true

// 如果跨文件，要共享同一个 symbol 属性不方便 ——》共享符号
const obj1 = {
  a: 1,
  b: 2,
  [Symbol.for('share-prop')]: 111,
};

const obj2 = {
  c: 1,
  d: 2,
  [Symbol.for('share-prop')]: 111,
};
console.log(obj1); // {a: 1, b: 2, Symbol(share-prop): 111}
console.log(obj2); // {c: 1, d: 2, Symbol(share-prop): 111}
