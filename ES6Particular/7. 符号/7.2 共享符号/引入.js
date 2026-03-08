const symbol = Symbol();

// 如果跨文件，要共享同一个 symbol 属性不方便 ——》共享符号
const obj1 = {
  a: 1,
  b: 2,
  [symbol]: 111,
};

const obj2 = {
  c: 1,
  d: 2,
  [symbol]: 111,
};
console.log(obj1); // {a: 1, b: 2, Symbol(): 111}
console.log(obj2); // {c: 1, d: 2, Symbol(): 111}