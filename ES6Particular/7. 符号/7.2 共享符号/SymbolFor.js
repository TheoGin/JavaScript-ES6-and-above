const SymbolFor = (() => {
  const global = {}; //用于记录有哪些共享符号

  return function (key) {
    if (!global[key]) {
      global[key] = Symbol(key);
    }
    return global[key];
  };
})();

const symbol1 = SymbolFor('share');
const symbol2 = SymbolFor('share');
console.log(symbol1); // Symbol(share)
console.log(symbol2); // Symbol(share)
console.log(symbol1 === symbol2); // true