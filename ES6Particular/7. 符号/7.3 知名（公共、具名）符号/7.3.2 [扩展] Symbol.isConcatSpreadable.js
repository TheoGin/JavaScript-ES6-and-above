const arr = [2, 5];

const concatArr = [11, 22, 33];
let newArr = arr.concat(6, concatArr);
// 如果传递给 concat 的：既有基本类型，又有数组，会展开数组放进去
console.log(newArr); // [2, 5, 6, 11, 22, 33]

console.log(arr); // [2, 5]

// 该知名符号会影响数组的 concat 方法
// arr[Symbol.isConcatSpreadable] = false; // 错误写法，设置的是要连接的数组！！！
// arr.concat[Symbol.isConcatSpreadable] = false; // 错误写法
concatArr[Symbol.isConcatSpreadable] = false;// 既有基本类型，又有数组，数组不会被拆开，会被当成一个整体连接

newArr = arr.concat(6, concatArr);
console.log(newArr); // [2, 5, 6, [11, 22, 33]]

for (const item of newArr) {
  console.log(item);
  if (Array.isArray(item)) {
    for (const itemElement of item) {
      console.log(itemElement); // 不会迭代到 Symbol
    }
  }
}
/*
 2
5
6
(3) [11, 22, 33, Symbol(Symbol.isConcatSpreadable): false]
11
22
33
*  */