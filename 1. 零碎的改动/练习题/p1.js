// 下面的代码段是否有错误，错在哪里？

// 代码段1
/* let a;
// Missing initializer in const declaration
const b; // 没有初始化 */

// 代码段2
/* let a = 1;
const b = 2;
a++;
b++; // TypeError: Assignment to constant variable. */

// 代码段3
/* console.log(a);
let a = 1; // ReferenceError: Cannot access 'a' before initialization */

// 代码段4
/* let a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared */

